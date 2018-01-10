import randomstring from 'randomstring'
import {or} from 'ramda'
import {matches} from 'z'

export default function({HeartbeatModel}){
    const handler = {
        ping: async(request) => {
            const key = request.payload.key
            const lastKeys = await HeartbeatModel.getLastTwo()
            const [current,old] = lastKeys            
            const isCurrentOrOld = matches(key)(
                (x=null) => false,
                (x) => or(x === current.id,x === old.id)
            )
            return Promise.resolve(isCurrentOrOld)
        },
        generateKey : async(request) => {
            const key = randomstring.generate({ length: 8 })
            return await HeartbeatModel.saveKey(key)
        }

    }
    return handler
}