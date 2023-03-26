import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
//axios.defaults.baseURL="http://localhost:4500";
axios.defaults.baseURL="https://movie-booking-backend-pqjg.onrender.com";
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

