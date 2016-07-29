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

    let html = pug.renderFile(this.config.rootPath + '/src/index.pug', data);
    fs.writeFile(this.config.rootPath + '/build/index.html', html);

    return this;
  }

  renderStyles() {
    console.log('[StatGen] Compiling SCSS files ');

    let options = this.config.sassOptions;
    options.file = this.config.rootPath + options.file;

    sass.render(
      this.config.sassOptions,
      (err, res) => {
        if(err)
          throw new Error(err);
        fs.writeFile(this.config.rootPath + options.out, res.css);
      }
    );

    // Move fonts
    ncp(
      this.config.rootPath + '/src/styles/font',
      this.config.rootPath + '/build/css/font'
    );

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
    ncp(
      this.config.rootPath + '/src/img',
      this.config.rootPath + '/build/img'
    );

    return this;
  }

  _copyJavaScript() {
    // Get JS
    ncp(
      this.config.rootPath + '/src/js',
      this.config.rootPath + '/build/js'
    );

    return this;
  }

  _gzipAssets() {
    // TODO: Dynamically get file list from tree
    let fileList = [
      this.config.rootPath + '/build/index.html',
      this.config.rootPath + '/build/css/style.css',
      this.config.rootPath + '/build/js/community.js',
      this.config.rootPath + '/build/js/courses.js',
      this.config.rootPath + '/build/js/howtoapply.js',
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