var test = require('tape');
var filter_a = require('../..').filter_a;

test("filter_a - array", function(assert) {

    var res = filter_a(function(item, ix) {
        return item > 5;
    }, [4, 5, 6, 7]);

    assert.deepEqual([6, 7], res);
    assert.end();

});

test("filter_a - object", function(assert) {

    var res = filter_a(function(item, ix) {
        return item > 3;
    }, {a: 2, b: 3, c: 4, d: 5});

    assert.deepEqual([4, 5], res);
    assert.end();

});
