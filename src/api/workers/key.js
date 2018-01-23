import {Observable} from 'rxjs'

function generateKey(){
    
}
const seconds = 1000
const minutes = 60 * seconds
const hours = 60 * minutes

const defaultTimer =  5 * minutes
export default function ({KeysHandler},period = defaultTimer){
    return Observable.interval(defaultTimer)
        .startWith(0)
        .flatMap(KeysHandler.generateKey)
}