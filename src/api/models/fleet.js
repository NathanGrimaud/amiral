import {Database} from 'sqlite'
/**
 * 
 * @param {Database} db 
 */
export default function(db){
    const model = {
        join: async(fleetId,satelliteId)=>{
       
        },
        setLastKey: async(key,name) => {
            return await db.run(
                'UPDATE satellite SET last_key = ? WHERE name = ?;',[key,name]
            )
        },
        get: async()=>{
            return await db.all(`
                SELECT * FROM satellite
            `)
        },
        getActive: async() => {
            return db.all(`
                select * from satellite s
                join keys k ON s.last_key = k.id
                where k.date >= datetime('now','-1 hour', '-30 minutes');
            `)
        },
        getIddle: async() => {
            return db.all(`
                select * from satellite s
                join keys k ON s.last_key = k.id
                where k.date < datetime('now','-1 hour', '-30 minutes');
            `)
        },
        getOneSatellite: async(name)=>{
            return await db.get(`
                SELECT * FROM satellite WHERE name = ?
            `,name)
        },
    }
    return model
}