import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';

import Template from './template';

import { StaticRouter } from 'react-router-dom';

import App from '../browser/components/app';

const server = express();

server.use(cors());

server.use('/assets', express.static('dist'));

const port = 3000;

server.get('/*', (req, res) => {
  const context = {}
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.send(Template(html, 'A Forest'));
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
