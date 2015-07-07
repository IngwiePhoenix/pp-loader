var compiler = require("compile-js-like-c/lib/compiler");
var util = require("loader-utils");
var merge = require("merge");

module.exports = function(src) {
    this.cacheable();
    compiler.o = merge(compiler.o, util.parseQuery(this.query));

    var res = compiler.p(src, true);
    return res;
}
