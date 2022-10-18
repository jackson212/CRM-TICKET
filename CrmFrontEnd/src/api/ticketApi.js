import axios from "axios"


export const  getAllTickets = ()=>{

    return new Promise (async(resolve,reject)=>{

        try {

      const results=  await axios.get('http://localhost:3001/v1/ticket',
        { headers:{
   
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25nZW9yZ2UxOTk4QGdtYWlsLmNvbSIsImlhdCI6MTY2NTczODYxMywiZXhwIjoxNjY5NjI2NjEzfQ.Nv8kTlZVTgzDf3HK5e5YpNlhG4W7i1GPh2_Aec4Zb7s'
          
        }})

        resolve(results)

    } catch (error) {

        reject(error)
    
    }
    })
    
  
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25nZW9yZ2UxOTk4QGdtYWlsLmNvbSIsImlhdCI6MTY2NTczODYxMywiZXhwIjoxNjY5NjI2NjEzfQ.Nv8kTlZVTgzDf3HK5e5YpNlhG4W7i1GPh2_Aec4Zb7s

}