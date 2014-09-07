var test = require('tape');
var tap = require('../..').tap;

test("tap - calls cb for each element", function(assert) {

    var sum = 0;
    tap(function(x) {
        sum += x;
    }, [1, 2, 3, 4, 5]);

    assert.equal(sum, 15);
    assert.end();

});

test("tap - returns original collection", function(assert) {

    var ary = [1, 2, 3];
    var out = tap(function() {}, ary);

    assert.equal(ary, out);
    assert.end();

});