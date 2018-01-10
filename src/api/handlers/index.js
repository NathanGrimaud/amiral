import HeartbeatHandler from './heartbeat'

export default function(models){
    return {
        HeartbeatHandler: HeartbeatHandler(models)
    }
}