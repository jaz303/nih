var test = require('tape');
var reduce = require('../..').reduce;

test("reduce", function(assert) {

    var res = reduce(function(str, v) {
        return str + v;
    }, '', ['a', 'b', 'c']);

    assert.equal(res, 'abc');
    assert.end();

});