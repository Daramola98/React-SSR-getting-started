/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  return res.send(content);
});

app.listen(3000, () => {
  console.log('Yeah I am listening');
});