/* eslint-disable import/extensions */
// Starting point for out client side bundle
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';

// eslint-disable-next-line no-undef
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
