import KeysModel from './keys'
import Fleet from './fleet'
export default function(db){
    return {
        KeysModel: KeysModel(db),
        FleetModel: Fleet(db)
    }
}