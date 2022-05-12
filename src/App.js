import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import { Entry } from './page/entry/entry';
import {DefaultLayout} from './Layout/Default.Layout'
function App() {
  return (
    <div className="App">
        {/* <Entry/> */}
        <DefaultLayout>
          hi there
        </DefaultLayout>
        

    </div>
  );
}

export default App;
