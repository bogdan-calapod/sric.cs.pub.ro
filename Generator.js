/**
 * SRIC Website 2016
 *
 * Static website generator
 */

// Imports
let pug = require('pug');
let sass = require('node-sass');
let fs = require('fs');
let ncp = require('ncp').ncp;
let zip = require('node-targz');

class Generator {
  constructor(config) {
    // TODO: Specify configuration options
    this.setConfig(config);
  }

  /// PUBLIC FUNCTIONS ///
  setConfig(config) {
    if(config)
      this.config = config;
  }

  renderPug(data) {
    console.log('[StatGen] Rendering Pug files');

    data = data ? data : this.config.siteData;

    let html = pug.renderFile('./src/index.pug', data);
    fs.writeFile('./build/index.html', html);

    return this;
  }

  renderStyles() {
    console.log('[StatGen] Compiling SCSS files ');

    let options = this.config.sassOptions;

    sass.render(
      this.config.sassOptions,
      (err, res) => {
        if(err)
          throw new Error(err);
        fs.writeFile(options.out, res.css);
      }
    );

    // Move fonts
    ncp('./src/styles/font', './build/css/font');

    return this;
  }

  processAssets() {
    console.log('[StatGen] Processing assets');

    this._copyStaticAssets()
        ._copyJavaScript();

    if(this.config.gzipAssets == true)
      this._gzipAssets();

    return this;
  }

  /// PRIVATE FUNCTIONS ///
  _copyStaticAssets() {
    // Move static assets
    ncp('./src/img', './build/img');

    return this;
  }

  _copyJavaScript() {
    // Get JS
    ncp('./src/js', './build/js');

    return this;
  }

  _gzipAssets() {
    // TODO: Dynamically get file list from tree
    let fileList = [
      './build/index.html',
      './build/css/style.css',
      './build/js/community.js',
      './build/js/courses.js',
      './build/js/howtoapply.js',
    ];

    fileList.map(
      file => zip.compress({
        source: file,
        destination: file + '.gz'
      })
    );
  }
}

module.exports = Generator;