export default function(db){
    const model = {
        saveKey : async function(key){
            return db.keys.insert({id:key})
        },
        getLast: async function(){
            return db.keys.findOne({},{
                order: [{                       
                    direction: 'desc', 
                }],
                limit:1
            })
        },
        getLastTwo: async function(){
            return db.keys.find({},{
                order: [{field: 'created_on', direction: 'desc'}],
                limit:2
            })
        }
    }
    return model
}