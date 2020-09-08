/* eslint-disable no-undef */
/* eslint-disable import/extensions */
// Starting point for out client side bundle
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.jsx';

ReactDOM.hydrate((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>),
document.querySelector('#root'));
