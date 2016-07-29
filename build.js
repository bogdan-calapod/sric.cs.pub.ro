/**
 * SRIC Website 2016
 *
 * Static website generation using Pug and Node-Sass
 */
let PROD = process.argv[2] == '--prod' ? true : false;

let Generator = require(__dirname + '/Generator');
let data = require(__dirname + '/data.js').getData(__dirname);

let config = {
  siteData: data,
  rootPath: __dirname,
  gzipAssets: PROD,
  sassOptions: {
    file: '/src/styles/index.scss',
    out: '/build/css/style.css',
    sourceMap: !PROD,
    includePaths: require('bourbon-neat').includePaths,
    outputStyle: PROD ? 'compressed' : 'nested'
  }
};

let g = new Generator(config);

g.renderPug()
 .renderStyles()
 .processAssets();


