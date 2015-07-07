module.exports = {
    entry: "./app.js",
    output: {path:__dirname, filename:"bundle.js"},
    module: {
      loaders: [
        { test: /\.js$/, loader: require.resolve("../") }
      ]
    }
}
