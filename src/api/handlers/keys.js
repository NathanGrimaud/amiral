import randomstring from 'randomstring'
import {or} from 'ramda'
import {matches} from 'z'
import * as errors from '../errors'
export default function({KeysModel, FleetModel}){
    const handler = {
        check: async(request) => {
            const {key,name} = request.payload
            const lastKeys = await KeysModel.getLastTwo()
            const [current,old] = lastKeys            
            const isCurrentOrOld = matches(key)(
                (x=null) => false,
                (x) => or(x === current.id,x === old.id)
            )
            if( isCurrentOrOld === true){
                await FleetModel.setLastKey(current.id,name)
                return current
            }
            return errors.InvalidToken
        },
        generateKey : async(request) => {
            const key = randomstring.generate({ length: 8 })
            return await KeysModel.saveKey(key)
        }

    }
    return handler
}