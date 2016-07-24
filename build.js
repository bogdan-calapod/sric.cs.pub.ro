/**
 * SRIC Website 2016
 *
 * Static website generation using Pug and Node-Sass
 */
let PROD = process.argv[2] == '--prod' ? true : false;

let Generator = require('./Generator');
let data = require('./data.js');

let config = {
  siteData: data,
  sassOptions: {
    file: './src/styles/index.scss',
    out: './build/css/style.css',
    sourceMap: PROD ? false : true,
    includePaths: require('bourbon-neat').includePaths,
    outputStyle: PROD ? 'compressed' : 'nested'
  }
};

let g = new Generator(config);

g.renderPug(data)
 .renderStyles()
 .copyStaticAssets()
 .copyJavaScript();


