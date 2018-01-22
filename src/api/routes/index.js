import Keys from './keys'
import Fleet from './fleet'
export default function(server,handlers){
    Keys(server,handlers),
    Fleet(server,handlers)
}