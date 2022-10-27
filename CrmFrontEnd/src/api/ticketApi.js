import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";


const ticketUlr= "http://localhost:3001/v1/ticket/"

const closeTicketUrl ="http://localhost:3001/v1/ticket/close-ticket/"

export const  getAllTickets = ()=>{

    return new Promise (async(resolve,reject)=>{

        try {

      const results=  await axios.get('http://localhost:3001/v1/ticket',
        { headers:{
   
          authorization: sessionStorage.getItem('accessJWT')
        }})

        resolve(results)

    } catch (error) {

        reject(error)
    
    }
    })
    
  
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25nZW9yZ2UxOTk4QGdtYWlsLmNvbSIsImlhdCI6MTY2NTczODYxMywiZXhwIjoxNjY5NjI2NjEzfQ.Nv8kTlZVTgzDf3HK5e5YpNlhG4W7i1GPh2_Aec4Zb7s

}


export const getSingleTicket = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUlr+id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateReplyTicket = (id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(ticketUlr + id, msgObj, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusClosed = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

// export const createNewTicket = (frmData) => {
//   console.log("from api", frmData);
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await axios.post(ticketUlr, frmData, {
//         headers: {
//           Authorization: sessionStorage.getItem("accessJWT"),
//         },
//       });

//       resolve(result.data);
//     } catch (error) {
//       console.log(error.message);
//       reject(error);
//     }
//   });
// };