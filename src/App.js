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
    
       
          <Route path="/addticket" element={<AddTicket/>}>
       
       </Route>
       <Route path="/dashboard" element={  <Dashboard/> }> </Route>
        
       <Route path="/TicketListing" element={  <TicketListing/> }>
       
       </Route>
       <Route path="/ticket:td" element={  <Ticket/> }>
       
       </Route>
        
         
       
        </Routes>
        </DefaultLayout>
    </Router>
     
    
    </div>
  );
}

export default App;
