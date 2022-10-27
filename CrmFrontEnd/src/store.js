import { configureStore } from '@reduxjs/toolkit'
import ticketreducer from './page/ticket-listing/ticketSlice'

import LoginReducer from './component/login/loginSlice'
import userReducer from './page/dashboard/userSlice'

const store = configureStore({ reducer:{

   tickets:ticketreducer,
   login:LoginReducer,
   user:userReducer,


 
} })



export default store;

