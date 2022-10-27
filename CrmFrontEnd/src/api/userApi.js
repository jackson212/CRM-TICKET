import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const userProfileUrl = rootUrl + "user";

const loginUrl ='http://localhost:3001/v1/user/login'

const logoutUrl ='http://localhost:3001/v1/user/logout'

const newAccessJWT ='http://localhost:3001/v1/token'

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, frmData);
        console.log(res)
        
        
        resolve(res.data);
  
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
          localStorage.setItem(  "crmSite",JSON.stringify({ refreshJWT: res.data.RefreshJwt }) );
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const accessJWT = sessionStorage.getItem("accessJWT");
  
        if (!accessJWT) {
          reject("Token not found!");
        }
  
        const res = await axios.get(userProfileUrl, {
          headers: {
            authorization: accessJWT,
          },
        });
  
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error.message);
      }
    });
  };
  
  export const userLogout = async () => {
    try {
      await axios.delete(logoutUrl, {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

        console.log(refreshJWT)
  
         if (!refreshJWT) {
          reject("Token not found!");
          }
  
        const res = await axios.get(newAccessJWT, {
          headers: {
            authorization: refreshJWT,
          },
        });
        
        console.log(res.data)
  
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
        }
  
        resolve(true);
      } catch (error) {
        if (error.message === "Failed to load resource: net::ERR_CONNECTION_REFUSED") {
           localStorage.removeItem("crmSite");

  
      resolve(false)
        } 
      }
    });
  };