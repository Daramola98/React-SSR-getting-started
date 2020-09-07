/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import renderer from './helpers/renderer.jsx';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send(renderer()));

app.listen(3000, () => {
  console.log('Yeah I am listening');
});
