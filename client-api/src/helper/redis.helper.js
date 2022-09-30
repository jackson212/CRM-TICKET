require('dotenv').config()
const redis=require('redis')

const client =redis.createClient(process.env.REDIS_URL);



const setJWT=(key,value)=>{

  console.log(typeof key,typeof value)

   return new Promise((resolve,reject)=>{

    try {

        client.set(key,value,(err,res)=>{

            if(err){
      
              reject(err)
            }
            resolve(res)
      
          })
      
        
    } catch (error) {

        reject(error)
        
    }

   
   });

};

const deleteJWT=(key)=>{

  try {
     client.del(key)
     

  } catch (error) {
    
    console.log(error)
  }



}






const getJWT=(key)=>{

    return new Promise((resolve,reject)=>{
 
     try {
 
         client.get(key,(err,res)=>{
           
 
             if(err){
       
               reject(err)
             }
             resolve(res)
       
           })
       
         
     } catch (error) {
 
         reject(error)
         
     }
 
    
    });
 
 };























// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('key', 'value');
// const value = await client.get('key');


module.exports={

    setJWT,
    getJWT,
    deleteJWT
}