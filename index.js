[   require('./lib/curry'),
    require('./lib/defaults'),
    require('./lib/dom'),
    require('./lib/functional'),
    require('./lib/indexing'),
    require('./lib/math'),
    require('./lib/range'),
    require('./lib/string')
].forEach(function(lib) {
    for (var k in lib) {
        exports[k] = lib[k];
    }
});
