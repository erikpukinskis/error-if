**error-if** is a simple assertion package.

### Why? Why another JavaScript assertion package in this cruel world?

* It's justs simple functions, no gnarly DSL or javascript property magic
* Written in ES5, so it runs on any old browser or code without transpilation. Debugging tools should be runnable anywhere.
* Single .js file, no dependencies, all in one singleton generator. So you can package it however you like, or even copy it into the bottom of another file

```javascript
var errorIf = require("error-if")

errorIf.regexNotFound(
  "booboo",
  /boob/)

// won't throw an error because the string is in there

errorIf.notEnoughMatches(
  "booboo",
  /boo/,
  3)

// will error out because the string is only found twice
```

### Repackaging

It's packaged for [https://www.npmjs.com/package/module-library](module-library) but only for convenience. You can copy the singleton generator out and package it however you like.

