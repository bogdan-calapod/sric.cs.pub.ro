# SRIC Website

Built using [Gatsby](http://gatsbyjs.org)

[Gatsby documentation available here](https://www.gatsbyjs.org/docs/)

SRIC website template for Gatsby, with Jest, Sass, Google Analytics & Hotjar
baked in.

Also includes:

- .eslint.rc config using standard.js
- Mock for Jest styles (so that styles imports don't break your tests)

## Configuring Analytics and Hotjar

To configure Google Analytics and Hotjar, insert your Google Analytics Tracking ID and Hotjar script version and ID into `gatsby-config.js`.

## Writing tests

The Jest runner is configured to look for all files named `*.test.js` and run all the tests in them. It is recommended to place the test files in the same folder with the component it is testing.

To run tests use `npm run test`, and `npm run test-coverage` if you want a coverage report as well.

## API Config

The data for the website should be available on a Harmonia server with the correct endpoints. Look into the endpoints repo for more info.

## Installing

- `npm install` && `npm run develop` to develop
- `npm run test` to run tests

## Deploying

- `npm run build` and deploy contents of `public` folder
