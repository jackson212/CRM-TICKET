import React from 'react'

import './../MessageHistory/message-history.style.css'

export const Message = ({msg}) => {

  return (
     msg.map((row,i)=> <div key={i} className="message-history mt-3">
     <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageby}</div>
        <div className="date">
                {row.date}
             </div>

     </div>
     <div className="message">
           {row.message}
     </div>
     
 </div>
))
    
}
