import randomstring from 'randomstring'
import {or} from 'ramda'
import {matches} from 'z'

export default function({FleetModel}){
    const handler = {

        get: async(request, h)=>{
            return await FleetModel.get()
        },
        getOneSatellite: async(request, h)=>{
            const {name} = request.params
            return await FleetModel.getOneSatellite(name)
        },
        getActive: async(request, h) => {
            return await FleetModel.getActive()
        },
        getIddle: async(request, h) => {
            return await FleetModel.getIddle()
        },

    }
    return handler
}