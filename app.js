const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const redirectSSL = require('redirect-ssl')

const isProd = process.env.NODE_ENV === 'production';

let config = require('./nuxt.config.js');
config.dev = !isProd;

const nuxt = new Nuxt(config);
const promise = Promise.resolve();
promise.then(() => {
    app.use(redirectSSL)
    app.use(nuxt.render);
    app.listen(3000);

    console.log('Server is listening on http://localhost:3000');
})
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });