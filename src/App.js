import {DefaultLayout} from './Layout/Default.Layout'
// import { Dashboard } from './page/dashboard/dashboard.comp';

import {AddTicket} from './page/new-ticket/AddTicket.page'
import { TicketListing } from './page/ticket-listing/TicketListing.page';
import { Ticket } from './page/ticket/ticket.page';
function App() {
  return (
    <div className="App">
        {/* <Entry/> */}
        <DefaultLayout>
          {/* <Dashboard/> */}
          {/* <AddTicket/> */}

          {/* <TicketListing/> */}

          <Ticket/>
        </DefaultLayout>
        

    </div>
  );
}

export default App;
