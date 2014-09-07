var test = require('tape');
var map = require('../..').map;

test("map - array", function(assert) {

    var res = map(function(x, i) {
        return 2 * x + i;
    }, [1, 2, 3]);

    assert.deepEqual([2, 5, 8], res);
    assert.end();

});

test("map - object", function(assert) {

    var res = map(function(value, key) {
        return key + " is " + value;
    }, {
        a: 1,
        b: 2,
        c: 3
    });

    assert.deepEqual({
        a: 'a is 1',
        b: 'b is 2',
        c: 'c is 3'
    }, res);

    assert.end();

});
