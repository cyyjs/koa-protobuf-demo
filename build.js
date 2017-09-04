var pbjs = require("protobufjs/cli/pbjs");
pbjs.main([ "--target", "static-module", "./awesome.proto" , "-o", "bundle.js"], function(err, output) {
    if (err)
        throw err;
    // do something with output
});