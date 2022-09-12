import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { Navigate,Outlet } from "react-router-dom";
import { DefaultLayout } from '../../Layout/Default.Layout';




const isAuth=true

const PrivateRoute = () => {
  return (
 
    isAuth ?  <Outlet/> : <Navigate to="/" /> 
      
    




  )
}

export default PrivateRoute