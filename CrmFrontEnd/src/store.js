import { configureStore } from '@reduxjs/toolkit'
import ticketreducer from './page/ticket-listing/ticketSlice'

const store = configureStore({ reducer:{

   tickets:ticketreducer

} })



export default store;

