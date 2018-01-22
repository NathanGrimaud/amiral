import {Server} from 'hapi'
import Route from './route'
/**
 * 
 * @param {Server} server 
 * @param {Object} handlers 
 * @param {Object} handlers.HeartbeatHandler
 */
export default function(server, {FleetHandler}){
    
      server.route({
        method: 'GET',
        path: '/fleet',
        handler: Route(FleetHandler.get)
      })

      server.route({
        method: 'GET',
        path: '/fleet/active',
        handler: Route(FleetHandler.getActive)
      })


      server.route({
        method: 'GET',
        path: '/fleet/iddle',
        handler: Route(FleetHandler.getIddle)
      })


      server.route({
        method: 'GET',
        path: '/satellite/{satellite_id}',
        handler: Route(FleetHandler.getOneSatellite)
      })

}