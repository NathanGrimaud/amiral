import {Observable} from 'rxjs'

function generateKey(){
    
}
const hours = 60
const minutes = 60
const seconds = 1000

const defaultTimer = 20 * seconds
export default function ({KeysHandler},period = defaultTimer){
    return Observable.interval(defaultTimer)
        .startWith(0)
        .flatMap(KeysHandler.generateKey)
}