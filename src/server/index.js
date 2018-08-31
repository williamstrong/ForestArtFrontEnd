import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';

import html from './html';

const app = express();

app.use(cors());

app.use(express.static('dist'));

const port = 3000;

app.get('*', (req, res, next) => {
  res.send(
    `
      <!doctype html>
      <html class="no-js" lang="">

      <head>
        <meta charset="utf-8">

        <link rel="dns-prefetch" href="//s3.amazonaws.com">

        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="manifest" href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/site.webmanifest">
        <link rel="apple-touch-icon" href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/css/normalize.css">
        <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/aforest-web/assets/css/main.css">
      </head>

      <body>
        <!--[if lte IE 9]>
          <p class="browserupgrade">
            You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.
          </p>
        <![endif]-->

        <div id="root"></div>

        <script src="bundle.js"></script>

        <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/vendor/modernizr-3.6.0.min.js"></script>
        <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/plugins.js"></script>
        <script src="https://s3-us-west-1.amazonaws.com/aforest-web/assets/js/main.js"></script>
      </body>

      </html>
    `
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
