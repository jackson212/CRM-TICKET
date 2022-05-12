import React from 'react'
import {Header} from "./Partials/Header.comp"
import { Footer } from './Partials/footer.Comp'
import "../App.css"

export const DefaultLayout = ({children}) => {
  return (
 
          
       <div className="deafult">
             <div className="header">

                 <Header/>
                </div>
                 
                <main className="main">{children}</main>




                <footer className="footer">
                <Footer/>

                  </footer>
     
        
       
       </div>
       

 
       


  )
}
