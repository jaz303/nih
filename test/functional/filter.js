var test = require('tape');
var filter = require('../..').filter;

test("filter - array", function(assert) {

    var res = filter(function(item, ix) {
        return item > 5;
    }, [4, 5, 6, 7]);

    assert.deepEqual([6, 7], res);
    assert.end();

});

test("filter - object", function(assert) {

    var res = filter(function(item, ix) {
        return item > 3;
    }, {a: 2, b: 3, c: 4, d: 5});

    assert.deepEqual({c: 4, d: 5}, res);
    assert.end();

});
