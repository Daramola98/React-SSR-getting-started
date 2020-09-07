/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line import/extensions
import Home from './client/components/Home.jsx';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  return res.send(html);
});

app.listen(3000, () => {
  console.log('Yeah I am listening');
});
