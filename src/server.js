import {Server} from 'hapi'
import Api from './api'
import {Observable} from 'rxjs'
import Massive from 'massive'
export default function start(){
    const port = process.env['API_PORT'] || 3000
    const server = new Server({
        host: '0.0.0.0',
        port: 3000
    })
    const connectionString = process.env['PG_CONNECTION_STRING'] || 'postgres://amiral@localhost:5432/amiral'
    Massive(connectionString)
        .then(db => Api(server,db))
        .catch(err =>{
            console.error(err)
            process.exit(1)
        })
    
    return Observable
            .fromPromise(server.start())
            .mapTo(server)
}