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

// Render pug files
console.log('[StatGen] Rendering Pug files');
let html = pug.renderFile('./src/index.pug');

console.log('[StatGen] Writing index.html file');
fs.writeFile('./build/index.html', html);

// Render SASS files
console.log('[StatGen] Compiling SCSS files ')
sass.render({
  file: './src/styles/index.scss',
  includePaths: require('bourbon-neat').includePaths
},
  (err, res) => {
    if(err)
      console.error('[StatGen] Error while compiling SCSS', err);

    console.log('[StatGen] Writing CSS file');
    fs.writeFile('./build/css/style.css', res.css);
  }
);

//TODO Compile JavaScript
