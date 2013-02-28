# convert-buffer

convert from list type A to list type B.

```javascript
var fs = require('fs')
  , convert = require('convert-buffer')

fs.createReadStream('file/path')
  .pipe(convert(Uint8Array))
  .pipe(/* something that wants Uint8Arrays! */)

```

## api

#### convert(targetType[, howfunction][, decorateFunction]) -> stream

Convert input from whatever list type to `targetType` (i.e., each new
chunk calls `new targetType(input.length)`); assign params using `output[N] = how(input[N])`;
additionally modify the output using `decorateFunction`.

# License

MIT
