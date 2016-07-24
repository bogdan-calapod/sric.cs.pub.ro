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

class Generator {
  constructor(config) {
    // TODO: Specify configuration options
    this.setConfig(config);
  }

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

  copyStaticAssets() {
    console.log('[StatGen] Copying static assets');

    // Move static assets
    ncp('./src/img', './build/img');

    return this;
  }

  copyJavaScript() {
    console.log('[StatGen] Copying JavaScript');
    
    // Get JS
    ncp('./src/js', './build/js');

    return this;
  }
}

module.exports = Generator;