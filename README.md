# Custom Docker Image for OpenWhisk abd Probot

OpenWhisk comes with a one megabyte limit for function ZIP files. This can be a too harsh limit for 
many practical purposes. In addition, the Node 6 action comes with a long list of pre-packaged depdendencies, 
including some of the most popular NPM packages. The newer Node 8 action does not include any 
pre-packaged dependencies, which means we are forced to trade-off between using a modern Node version 
having access to useful packages.

Fortunately, OpenWhisk also supports the creation of custom Docker images, so we can circumvent this 
trade-off by creating a Docker image that has exactly the dependencies pre-installed that we need, 
without any of the stuff we don't need.

## Probot Support

This docker image contains packages used to run a  [Github ProBot](https://probot.github.io) application
as openwhisk action.

## Building it

Make sure you have Docker installed and are logged in to Docker Hub. The image is published under the `tripodsan` namespace
and tagged with `tripodsan/probot-ow-nodejs8:latest`

```bash
$ npm run build
```

## Testing it

Once the function has been deployed, it can be tested using `npm test`

## What's included

The package is based on the dependency list of the original Node 6 image, with some additions

### Dependencies
<!-- the list below is automatically generated during the build -->

### @tripod/openpgp@4.1.2

> OpenPGP.js is a Javascript implementation of the OpenPGP protocol. This is defined in RFC 4880.
> [homepage](https://openpgpjs.org/)


### async@2.6.1

> Higher-order functions and common patterns for asynchronous code
> [homepage](https://caolan.github.io/async/)


### axios@0.18.0

> Promise based HTTP client for the browser and node.js
> [homepage](https://github.com/axios/axios)


### body-parser@1.18.2

> Node.js body parsing middleware
> [homepage](https://github.com/expressjs/body-parser#readme)


### btoa@1.2.1

> btoa for Node.JS (it's a one-liner)
> [homepage](https://git.coolaj86.com/coolaj86/btoa.js.git)


### decompress@4.2.0

> Extracting archives made easy
> [homepage](https://github.com/kevva/decompress#readme)


### dotenv@6.0.0

> Loads environment variables from .env file
> [homepage](https://github.com/motdotla/dotenv#readme)


### express@4.16.2

> Fast, unopinionated, minimalist web framework
> [homepage](http://expressjs.com/)


### fs-extra@5.0.0

> fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
> [homepage](https://github.com/jprichardson/node-fs-extra)


### glob@7.1.2

> a little globber
> [homepage](https://github.com/isaacs/node-glob#readme)


### gm@1.23.1

> GraphicsMagick and ImageMagick for node.js
> [homepage](https://github.com/aheckmann/gm#readme)


### iconv-lite@0.4.23

> Convert character encodings in pure javascript.
> [homepage](https://github.com/ashtuchkin/iconv-lite)


### js-yaml@3.12.0

> YAML 1.2 parser and serializer
> [homepage](https://github.com/nodeca/js-yaml)


### lodash@4.17.10

> Lodash modular utilities.
> [homepage](https://lodash.com/)


### merge@1.2.0

> Merge multiple objects into one, optionally creating a new cloned object. Similar to the jQuery.extend but more flexible. Works in Node.js and the browser.
> [homepage](https://github.com/yeikos/js.merge)


### mime-types@2.1.19

> The ultimate javascript content-type utility.
> [homepage](https://github.com/jshttp/mime-types#readme)


### moment@2.22.2

> Parse, validate, manipulate, and display dates
> [homepage](http://momentjs.com)


### mustache@2.3.2

> Logic-less {{mustache}} templates with JavaScript
> [homepage](https://github.com/janl/mustache.js)


### nodemailer@4.6.8

> Easy as cake e-mail sending from your Node.js applications
> [homepage](https://nodemailer.com/)


### oauth2-server@2.4.1

> Complete, compliant and well tested module for implementing an OAuth2 Server/Provider with express in node.js
> [homepage](https://github.com/thomseddon/node-oauth2-server#readme)


### openwhisk@3.17.0

> JavaScript client library for the OpenWhisk platform
> [homepage](https://github.com/openwhisk/openwhisk-client-js#readme)


### parcel-bundler@1.9.7

> Blazing fast, zero configuration web application bundler
> [homepage](https://github.com/parcel-bundler/parcel#readme)


### probot@7.3.1

> 🤖 A framework for building GitHub Apps to automate and improve your workflow
> [homepage](https://probot.github.io)


### probot-commands@1.1.0

> A Probot extension that adds slash commands to GitHub
> [homepage](https://github.com/probot/commands)


### process@0.11.10

> process information for node.js and browsers
> [homepage](https://github.com/shtylman/node-process#readme)


### pug@2.0.3

> A clean, whitespace-sensitive template language for writing HTML
> [homepage](https://pugjs.org)


### request@2.88.0

> Simplified HTTP request client.
> [homepage](https://github.com/request/request#readme)


### request-promise@4.2.2

> The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.
> [homepage](https://github.com/request/request-promise#readme)


### semver@5.5.1

> The semantic version parser used by npm.
> [homepage](https://github.com/npm/node-semver#readme)


### shelljs@0.8.2

> Portable Unix shell commands for Node.js
> [homepage](http://github.com/shelljs/shelljs)


### socket.io@2.1.1

> node.js realtime framework server
> [homepage](https://github.com/socketio/socket.io#readme)


### socket.io-client@2.1.1

> [![Build Status](https://secure.travis-ci.org/socketio/socket.io-client.svg?branch=master)](http://travis-ci.org/socketio/socket.io-client) [![Dependency Status](https://david-dm.org/socketio/socket.io-client.svg)](https://david-dm.org/socketio/socket.io-client) [![devDependency Status](https://david-dm.org/socketio/socket.io-client/dev-status.svg)](https://david-dm.org/socketio/socket.io-client#info=devDependencies) [![NPM version](https://badge.fury.io/js/socket.io-client.svg)](https://www.npmjs.com/package/socket.io-client) ![Downloads](http://img.shields.io/npm/dm/socket.io-client.svg?style=flat) [![](http://slack.socket.io/badge.svg?)](http://slack.socket.io)
> [homepage](https://github.com/Automattic/socket.io-client#readme)


### superagent@3.8.3

> elegant & feature rich browser / node HTTP with a fluent API
> [homepage](https://github.com/visionmedia/superagent#readme)


### tmp@0.0.31

> Temporary file and directory creator
> [homepage](http://github.com/raszi/node-tmp)


### uuid@3.2.1

> RFC4122 (v1, v4, and v5) UUIDs
> [homepage](https://github.com/kelektiv/node-uuid#readme)


### validator@9.4.1

> String validation and sanitization
> [homepage](http://github.com/chriso/validator.js)


### ws@1.1.5

> Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
> [homepage](https://github.com/websockets/ws)


### xml2js@0.4.19

> Simple XML to JavaScript object converter.
> [homepage](https://github.com/Leonidas-from-XIV/node-xml2js)


### xmlhttprequest@1.8.0

> XMLHttpRequest for Node
> [homepage](https://github.com/driverdan/node-XMLHttpRequest#readme)


### yauzl@2.10.0

> yet another unzip library for node
> [homepage](https://github.com/thejoshwolfe/yauzl)


