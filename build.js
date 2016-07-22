/**
 * SRIC Website 2016
 *
 * Static website generation using Pug and Node-Sass
 */

// Imports
let pug = require('pug');
let sass = require('node-sass');
//let webpack = require('webpack');
let fs = require('fs');
let ncp = require('ncp').ncp;

// Render pug files

let data = require('./data.js');

console.log('[StatGen] Rendering Pug files');
let html = pug.renderFile('./src/index.pug', data);

console.log('[StatGen] Writing index.html file');
fs.writeFile('./build/index.html', html);

// Render SASS files
let sassIncludePaths = require('bourbon-neat').includePaths;
sassIncludePaths.push('./node_modules/normalize');

console.log('[StatGen] Compiling SCSS files ')
sass.render({
  file: './src/styles/index.scss',
  includePaths: sassIncludePaths
},
  (err, res) => {
    if(err)
      console.error('[StatGen] Error while compiling SCSS', err);

    console.log('[StatGen] Writing CSS file');
    fs.writeFile('./build/css/style.css', res.css);
  }
);

// Move fonts
ncp('./src/styles/font', './build/css/font');

// Move static assets
ncp('./src/img', './build/img');

// Get JS
ncp('./src/js', './build/js');
