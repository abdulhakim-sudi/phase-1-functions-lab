// helpers.js
require('@babel/register')({
    presets: ['@babel/preset-env'],
    ignore: /node_modules/
  });
  require('mocha-jsdom'); // If using mocha-jsdom
  