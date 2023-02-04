import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Portfolio from './portfolio/Portfolio';
//import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Portfolio /> */}
  </React.StrictMode>
);
