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


        const getTicketbyID=(_id,ClientID)=>{
   
            return new Promise ((resolve,reject)=>{
        
               
                try {
        
                 
                    TicketSchema
                    .find({ _id, ClientID })
                    .then((data)=>{
                        resolve(data)}).catch((error)=>{
                            reject(error)
                        })
        
                
                } catch (error) {
        
                    reject(error)
                    
                }
           
               })
          
            }
    
            const updateClientReply = ({ _id, message, sender }) => {
                return new Promise((resolve, reject) => {
                  try {
                    TicketSchema.findOneAndUpdate(
                      { _id },
                      {
                        status: "Pending operator response",
                        $push: {
                          conversation: { message, sender },
                        },
                      },
                      { new: true }
                    )
                      .then((data) => resolve(data))
                      .catch((error) => reject(error));
                  } catch (error) {
                    reject(error);
                  }
                });
              };
              

              const updateStatusClose = ({ _id, clientId }) => {
                return new Promise((resolve, reject) => {
                  try {
                    TicketSchema.findOneAndUpdate(
                      { _id, clientId },
                      {
                        status: "Closed",
                      },
                      { new: true }
                    )
                      .then((data) => resolve(data))
                      .catch((error) => reject(error));
                  } catch (error) {
                    reject(error);
                  }
                });
              };
                    const deleteTicket=({id,user_id})=>{
   
                        return new Promise ((resolve,reject)=>{
                    
                           
                            try {
                    
                             
                                TicketSchema
                                .findOneAndDelete(
                                    { id,user_id },
                                   
                                    
                                    ) 
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
     getTicket,
     getTicketbyID,
     updateClientReply,
     updateStatusClose,
     deleteTicket
 

    }