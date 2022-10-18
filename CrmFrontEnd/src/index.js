import React from 'react';
import { createRoot } from 'react-dom/client';

import {StrictMode} from 'react';


import { ReactDOM } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );


const container = document.getElementById('root');
const root = createRoot(container);




root.render( 
<StrictMode>
    
<Provider store={store}>
        <App />

</Provider>
  
  </StrictMode>
  
  
  
  );