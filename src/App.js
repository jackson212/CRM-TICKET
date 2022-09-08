import PrivateRoute from './component/privaterouter/PrivateRoute.comp'
import {DefaultLayout} from './Layout/Default.Layout'
import { Dashboard } from './page/dashboard/dashboard.comp';
import {AddTicket} from './page/new-ticket/AddTicket.page'
import { TicketListing } from './page/ticket-listing/TicketListing.page';
import { Ticket } from './page/ticket/ticket.page';
import { Entry } from './page/entry/entry';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 

} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router> 
    <Routes>
    <Route exact path="/" element={<Entry/>}> </Route>
      </Routes>
   
    <DefaultLayout>
    <Routes>
      <Route element={<PrivateRoute/>}>
        
            
            
            <Route  element={<Dashboard/>} path="/dashboard"  /> 
            <Route  element={<Ticket/>} path="/ticket/:td"  /> 
            <Route  element={<TicketListing/>} path="/tickets"  /> 
            <Route  element={<AddTicket/>} path="/add-ticket"  /> 
            

        
         </Route>
    
       
        </Routes>
        </DefaultLayout>
    </Router>
     
    
    </div>
  );
}

export default App;
