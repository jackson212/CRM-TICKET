import React, { useEffect } from 'react'
import { Routes ,Route} from 'react-router-dom'
import { Navigate,Outlet } from "react-router-dom";
import { DefaultLayout } from '../../Layout/Default.Layout';
import { useDispatch, useSelector } from 'react-redux';
import {getUserProfile} from '../../page/dashboard/userAction'

import {fetchNewAccessJWT} from '../../api/userApi'

import  {loginSuccess} from '../../component/login/loginSlice'

const PrivateRoute = () => {
 const dispatch =useDispatch()

  const {isAuth}=useSelector(state=>state.login)
  const {user}=useSelector(state=>state.user)

   useEffect(() => {
    const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT;
			result && dispatch(loginSuccess());
		};

    
     
   !user.id && dispatch(getUserProfile())
		!sessionStorage.getItem("accessJWT") &&localStorage.getItem("crmSite") &&updateAccessJWT();

    !isAuth&&sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
    
   }, [isAuth,dispatch,user.id])
   




  return (
 
    isAuth ?  <Outlet/> : <Navigate to="/" /> 
      
    




  )
}

export default PrivateRoute