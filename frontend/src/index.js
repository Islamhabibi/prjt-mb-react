import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/styles/css/core.css' 
import  './assets/styles/css/theme-default.css'  
import './assets/styles/demo.css'  
import  './assets/styles/perfect-scrollbar.css'  
import   './assets/styles/apex-charts.css'  
import '@mdi/font/css/materialdesignicons.min.css';
import './assets/styles/node-waves.css'
import './assets/styles/css/datatables.bootstrap5.css'
import './assets/styles/css/responsive.bootstrap5.css'
import'./assets/libs/bs-stepper/bs-stepper.css'

import  store from './components/Redux/Store'

import Icon from '@mdi/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 