import React from 'react'
import {Table} from 'react-bootstrap'

export const Tablecomp = ({ticket}) => {
  
  return (
    
     <Table striped bordered hover>
          <thead>
            <tr>
                <th>#</th>
                <th>subject</th>
                <th>status</th>
                <th>opened data</th>

            </tr>
           

          </thead>

          <tbody>
               { ticket.length ? ticket.map((row) =>(
                 
                 <tr key={row.id}> 
                   <td>{row.id}</td>
                   <td>{row.sub}</td>
                   <td>{row.status}</td>
                   <td>{row.addededat}</td>
               </tr>
                ) ) : <tr> 
                      <td colSpan="4" className="text-center"> its empty </td>
                </tr>
            }
                   
               


          </tbody>


     </Table>

      



  )
}
