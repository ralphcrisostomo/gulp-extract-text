'use strict';

const through2 = require('through2');

module.exports = function (params, options) {
    let { pattern_start, pattern_end } = params;
    return through2.obj(function (file, enc, cb) {
        let contents  = file.contents.toString('utf8');
        let pattern   = new RegExp(`${pattern_start}((.|\\n)*?)${pattern_end}`);
        let extract   = pattern.exec(contents);
        extract       = extract ? extract[1] : '';
        file.contents = new Buffer(extract);
        return cb(null, file);
    });
};
