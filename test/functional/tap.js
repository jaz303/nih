var test = require('tape');
var tap = require('../..').tap;

test("tap - calls cb once and returns self", function(assert) {

    var x = 0;
    var input = [1,2,3,4];

    var output = tap(function() {
        x++;
    }, input);

    assert.equal(x, 1);
    assert.equal(input, output);
    assert.end();

});
