import {Server} from 'hapi'
import Route from './route'
/**
 * 
 * @param {Server} server 
 * @param {Object} handlers 
 * @param {Object} handlers.KeysHandler
 */
export default function(server, {KeysHandler}){
    
    server.route({
        method: 'PUT',
        path: '/code',
        handler: Route(KeysHandler.check)
      })

}