const {TicketSchema}=require("../ticket/ticket.schema")




const insertTicket=(ticketObj)=>{
   
    return new Promise ((resolve,reject)=>{

       
        try {

         
            TicketSchema(ticketObj)
            .save()
            .then((data)=>{
                resolve(data)}).catch((error)=>{
                    reject(error)
                })

        
        } catch (error) {

            reject(error)
            
        }
   
       })
  
    }
    const getTicket=(userid)=>{
   
        return new Promise ((resolve,reject)=>{
    
           
            try {
    
             
                TicketSchema
                .find({ClientID:userid})
                .then((data)=>{
                    resolve(data)}).catch((error)=>{
                        reject(error)
                    })
    
            
            } catch (error) {
    
                reject(error)
                
            }
       
           })
      
        }

 
    module.exports={

     insertTicket,
     getTicket
     
 

    }