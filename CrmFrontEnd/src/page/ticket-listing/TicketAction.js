import axios from "axios";


import {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets,
   
    fetchSingleTicketFail,
fetchSingleTicketLoading,
fetchSingleTicketSuccess,
replyTicketFail,
replyTicketSuccess,
replyTicketError,
replyTicketLoading,
closeTicketLoading,
closeTicketSuccess,
closeTicketFail
  } from "./ticketSlice";
  
  import {
    getAllTickets,
    getSingleTicket,
    updateReplyTicket,
   
    updateTicketStatusClosed 
  } from "../../api/ticketApi";
  

 export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
      const result = await getAllTickets();
     
     
     
   
     dispatch(fetchTicketSuccess(result.data.result));
       
    

    } catch (error) {
      dispatch(fetchTicketFail(error.message));
    }
  };


  export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
  };
  


  export const fetchsingleTickets = (id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
      const result = await getSingleTicket(id);
     
     
     console.log(result)
   
     dispatch(fetchSingleTicketSuccess(result.data.result.length&&result.data.result[0]));
       
    

    } catch (error) {
      dispatch(fetchSingleTicketFail(error.message));
    }
  };
    //Actions for replying on single ticket
  export const replyOnTicket = (id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
      const result = await updateReplyTicket(id, msgObj);
      console.log(result);
      if (result.status === "error") {
        return dispatch(replyTicketFail(result.Message));
      }
  
      dispatch(fetchsingleTickets(id));
  
      dispatch(replyTicketSuccess(result.Message));
    } catch (error) {
      console.log(error.message);
      dispatch(replyTicketFail(error.Message));
    }
  };

    //Actions for closing ticket
  export const closeTicket = (id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
      const result = await updateTicketStatusClosed(id);
      console.log("working")

      console.log(result)
      if (result.status === "error") {
        return dispatch(closeTicketFail(result.message));
      }
  
      // dispatch(fetchsingleTickets(id));
  
      dispatch(closeTicketSuccess("Status Updated successfully"));
    } catch (error) {
      console.log(error.message);
      dispatch(closeTicketFail(error.message));
    }
  };








  // export const fetchAllTickets = () => async (dispatch) => {
  //   dispatch(fetchTicketLoading());
  //   try {
  //     const result = await getAllTickets();
  //     result.data.result.length &&
  //       dispatch(fetchTicketSuccess(result.data.result));
  //   } catch (error) {
  //     dispatch(fetchTicketFail(error.message));
  //   }
  // };
  
  // export const filterSerachTicket = (str) => (dispatch) => {
  //   dispatch(searchTickets(str));
  // };
  
  // //Actions for single ticket only
  // export const fetchSingleTicket = (_id) => async (dispatch) => {
  //   dispatch(fetchSingleTicketLoading());
  //   try {
  //     const result = await getSingleTicket(_id);
  //     dispatch(
  //       fetchSingleTicketSuccess(
  //         result.data.result.length && result.data.result[0]
  //       )
  //     );
  //   } catch (error) {
  //     dispatch(fetchSingleTicketFail(error.message));
  //   }
  // };
  

