import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'foundation-sites/dist/css/foundation.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
