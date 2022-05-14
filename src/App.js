import {DefaultLayout} from './Layout/Default.Layout'
import { Dashboard } from './page/dashboard/dashboard.comp';
function App() {
  return (
    <div className="App">
        {/* <Entry/> */}
        <DefaultLayout>
          <Dashboard/>
        </DefaultLayout>
        

    </div>
  );
}

export default App;
