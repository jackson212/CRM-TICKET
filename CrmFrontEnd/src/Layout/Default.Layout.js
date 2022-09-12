import React from 'react'
import {Header} from "./Partials/Header.comp"
import { Footer } from './Partials/footer.Comp'
import "../App.css"

export const DefaultLayout = ({children}) => {
  return (
 
          
       <div className="deafult">
             <header className="header mb-4">

                 <Header/>
                </header>
                 
                <main className="main">{children}</main>




                <footer className="footer">
                <Footer/>

                  </footer>
     
        
       
       </div>
       

 
       


  )
}
