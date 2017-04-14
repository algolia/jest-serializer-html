# A Jest snapshot serializer that beautifies HTML.

[![NPM version](https://badge.fury.io/js/jest-serializer-html.svg)](https://npmjs.org/package/jest-serializer-html)
[![Build Status](https://travis-ci.org/rayrutjes/jest-serializer-html.svg?branch=master)](https://travis-ci.org/rayrutjes/jest-serializer-html)

This serializer is based on [js-beautify](https://github.com/beautify-web/js-beautify) and is configured to indent HTML tags as much as possible to ease readability of failing tests.

## Install

Add the package as a dev-dependency:

```bash
# With npm
npm install --save-dev jest-serializer-html

# With yarn
yarn add -D jest-serializer-html
```

Update package.json to [let Jest know about the serializer](https://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string):

```json
"jest": {
  "snapshotSerializers": ["jest-serializer-html"]
}
```

## Special thanks

This package was inspired by the amazing post here: [Jest for all: Episode 1 — Vue.js](https://hackernoon.com/jest-for-all-episode-1-vue-js-d616bccbe186) by [Cristian Carlesso](https://hackernoon.com/@kentaromiura_the_js_guy).
