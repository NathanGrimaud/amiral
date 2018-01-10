import test from 'ava'
import HeartBeatHandler from './heartbeat'

const mockModel = {}
const tPrefix = "api:handlers:heartbeat"
test( `${tPrefix}:generateKey creates a new key entry`, async(t)=>{
    const handler = HeartBeatHandler(mockModel)
    const keys = await handler.generateKey()
    t.not(keys.current,null)
})