import React from 'react'

import { useSelector } from 'react-redux'

import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Tablecomp = () => {

  const {searchTicketList,isLoading,error}=useSelector((state)=>state.tickets)
   
  if(isLoading) return <h1> Loading...</h1>

  if(error)
   return  <h3>error 404 ..ticket not found</h3>

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
               { searchTicketList.length ? searchTicketList.map((row) =>(
                 
                 <tr key={row._id}> 
                   <td>{row._id}</td>
                   <td>
                   <Link to ={`/ticket/${row._id}`}> 
                   {row.subject}
                   </Link>
                   </td>
                   <td>{row.status}</td>
                   <td>{row.openAt}</td>
               </tr>
                ) ) : <tr> 
                      <td colSpan="4" className="text-center"> its empty </td>
                </tr>
            }
                   
               


          </tbody>


     </Table>

      



  )
}
