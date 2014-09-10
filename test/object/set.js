var test = require('tape');
var set = require('../..').set;

test("set - array", function(assert) {

    var res = set(['a', 'b', 'c']);

    assert.deepEqual(res, {a: true, b: true, c: true});
    assert.end();

});

test("set - object", function(assert) {

    var res = set({ x: 'a', y: 'b', z: 'c' });

    assert.deepEqual(res, {a: true, b: true, c: true});
    assert.end();

});