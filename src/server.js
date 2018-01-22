import {Server} from 'hapi'
import Api from './api'
import {Observable} from 'rxjs'
import {open} from 'sqlite'
export default function start(){
    
    const port = process.env['API_PORT'] || 3000
    const server = new Server({
        host: '0.0.0.0',
        port: 3000
    })
    const db = open('amiral.db')
    db.then((database)=>{
        Api(server,database)
    }).catch((err)=>{
        console.error(err)
        process.exit(1)
    })
    return Observable
            .fromPromise(server.start())
            .mapTo(server)
}