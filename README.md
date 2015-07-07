# A tiny preprocessor for WebPack

This is a tiny preprocessor that you can use to do `#include` and such stuff as you wish. To use it, just add it as a loader for `.js` files:

```javascript
module.exports = {
    // ...
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "pp"
            }
        ]
    }
}
```

## Options
You can pass these options to the preprocessor. Use `+` or `-` to enable or disable a boolean.

- `enumHex` (Bool): Use a hexadecimal notation when generating enums.
- `commentEscape` (Bool): Every line starting with `#` is a comment (excludes directives).
- `trimIncludes` (Bool): Use `String.prototype.trim` on included files.
- `spaceLineLimit` (Integer): Limits of empty following lines (0 = no limit).
