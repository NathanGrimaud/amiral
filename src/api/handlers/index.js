import KeysHandler from './keys'
import Fleet from './fleet'
export default function(models){
    return {
        KeysHandler: KeysHandler(models),
        FleetHandler: Fleet(models)
    }
}