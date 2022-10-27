import React from "react";
import PropTypes from "prop-types";
import "./message-history.style.css";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
export const MessageHistory = ({msg} ) => {
  const {replyMsg}=useSelector(state=>state.tickets)
  if (!msg) return null;


  return msg.map((row, i) => (
     
 
    
  
    <div key={i} className="message-history mt-3">
     
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.sender}</div>
        
        <div className="date">
          {row.msgAt&&new Date(row.msgAt).toLocaleDateString()}
        </div>
      </div>
      <div className="message">{row.message}</div>
    </div>
    
    
  ));
};

