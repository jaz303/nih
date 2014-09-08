var test = require('tape');
var values = require('../..').values;

test("values - returns array of values", function(assert) {

    assert.deepEqual([1,2,3,4,5], values([1,2,3,4,5]));
    assert.deepEqual([1,2,3], values({a: 1, b: 2, c: 3}));
    assert.end();

});

test("values - returns new array", function(assert) {

    var input = [1,2,3,4];
    
    assert.notEqual(input, values(input));
    assert.end();

});
