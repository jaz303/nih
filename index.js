x(require('./lib/defaults'));
x(require('./lib/functional'));
x(require('./lib/object'));
x(require('./lib/string'));

function x(mod) {
    for (var k in mod) {
        exports[k] = mod[k];
    }
}

[   'all',
	'any',
	'mapValues',
    'append',
    'prepend',
    'pluck'
].forEach(function(fn) {
    exports[fn].C = exports.autoCurry(exports[fn]);
});
