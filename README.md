# SRIC Website

Built using [Gatsby](http://gatsbyjs.org)

[Gatsby documentation available here](https://www.gatsbyjs.org/docs/)

SRIC website template for Gatsby, with Jest, Sass, Google Analytics & Hotjar
baked in.

Also includes:
* .eslint.rc config using standard.js
* Mock for Jest styles (so that styles imports don't break your tests)
* Example wercker config with test, build, deploy (using SCP) and Slack notification configs

## Configuring Analytics and Hotjar

To configure Google Analytics and Hotjar, insert your Google Analytics Tracking ID and Hotjar script version and ID into `gatsby-config.js`.

## Writing tests

The Jest runner is configured to look for all files named `*.test.js` and run all the tests in them. I recommend placing the test file in the same folder with the component it's testing.

To run tests use `yarn test`, and `yarn test-coverage` if you want a coverage report as well.

## API Config

The data for the website should be available on a Harmonia server with the correct endpoints. Look into the endpoints repo for more info.


## Installing
* `yarn` && `yarn develop` to develop
* `yarn test` to run tests

## Deploying
* `yarn build` and deploy contents of `public` folder


## Contibutions are welcome! 😊