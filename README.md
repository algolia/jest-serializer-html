# A Jest snapshot serializer that beautifies HTML.

[![NPM version](https://badge.fury.io/js/jest-serializer-html.svg)](https://npmjs.org/package/jest-serializer-html)
[![Build Status](https://travis-ci.org/rayrutjes/jest-serializer-html.svg?branch=master)](https://travis-ci.org/rayrutjes/jest-serializer-html)

When using this Jest serializer, it will turn any string starting with '<' to nicely indented HTML in the snapshot.

This serializer is based on [diffable-html](https://github.com/rayrutjes/diffable-html) which is an opinionated HTML formatter that will ease readability of diffs in case of failing snapshot tests.

## Install

Add the package as a dev-dependency:

```bash
# With npm
npm install --save-dev jest-serializer-html

# With yarn
yarn add --dev jest-serializer-html
```

Update package.json to [let Jest know about the serializer](https://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string):

```json
"jest": {
  "snapshotSerializers": ["jest-serializer-html"]
}
```

## Vanilla JS Example

```js
test('should beautify HTML', () => {
  expect('<ul><li><a href="#">My HTML</a></li></ul>').toMatchSnapshot();
});
```

Will output:

```js
exports[`should beautify HTML 1`] = `
<ul>
  <li>
    <a href="#">
      My HTML
    </a>
  </li>
</ul>
`;
```

## Vue.js component output example

```js
import Vue from 'vue';
const Hello = {
  props: {
    msg: {
      type: String,
      default: 'World'
    }
  },
  template: `
    <h1>Hello ${ msg }!</h1>
    <ul id="main-list" class="list"><li><a href="#">My HTML</a></li></ul>
  `
};

test('should beautify HTML', () => {
  const Component = Vue.extend(Hello);
  const vm = new Component({
    propsData: {
      msg: 'You'
    }
  });

  vm.$mount();

  expect(vm.$el.outerHTML).toMatchSnapshot();
});
```

Will output:

```js
exports[`should beautify HTML 1`] = `
<h1>
  Hello You!
</h1>
<ul id="main-list"
    class="list"
>
  <li>
    <a href="#">
      My HTML
    </a>
  </li>
</ul>
`;
```

You can read more about the [HTML formatting here](https://github.com/rayrutjes/diffable-html#readme).

## Special thanks

This package was inspired by the amazing post here: [Jest for all: Episode 1 — Vue.js](https://hackernoon.com/jest-for-all-episode-1-vue-js-d616bccbe186) by [Cristian Carlesso](https://hackernoon.com/@kentaromiura_the_js_guy).
