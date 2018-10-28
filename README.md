Simple error checking package.

The only reason this exists is that these are basic functions, they'll run on any browser without any kind of transpilation. You can just copy the code onto your page, or put it in a .js file.

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
