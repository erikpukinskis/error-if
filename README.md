Simple assertion package.

The only reason this exists is that these are basic functions, they'll run on any browser without any kind of transpilation.  All the other assertion libraries I found used ES6 or were broken into a bunch of little files, or set up some sort of gnarly DSL or test runner or whatever.

You can just copy the code onto your page, or put it in a single .js file. It's packaged for [https://www.npmjs.com/package/module-library](module-library) but only for convenience. You can copy the singleton generator out and package it however you like.

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
