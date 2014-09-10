var test = require('tape');
var map_a = require('../..').map_a;

test("map_a - array", function(assert) {

    var res = map_a(function(x, i) {
        return 2 * x + i;
    }, [1, 2, 3]);

    assert.deepEqual([2, 5, 8], res);
    assert.end();

});

test("map_a - object", function(assert) {

    var res = map_a(function(value, key) {
        return key + " is " + value;
    }, {
        a: 1,
        b: 2,
        c: 3
    });

    assert.deepEqual([
        'a is 1',
        'b is 2',
        'c is 3'
    ], res);

    assert.end();

});
