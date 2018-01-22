import {Database} from 'sqlite'
/**
 * 
 * @param {Database} db 
 */
export default function(db){
    const model = {
     
        saveKey : async function(key){
            const stmt = await db.prepare(`
                INSERT INTO keys(id) VALUES (?)
            `)
            await stmt.run(key)
            await stmt.finalize()
            return {key}
        },
        getLast: async function(){
            return await db.all(`
                select * from keys 
                ORDER BY date desc 
                LIMIT 1;
            `)
        },
        getLastTwo: async function(){
            return await db.all(`
            select * from keys 
            ORDER BY date desc 
            LIMIT 2;
        `)
        },
    }
    return model
}