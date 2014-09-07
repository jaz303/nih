var test = require('tape');
var pipe = require('../..').pipe;

test("pipe", function(assert) {

    var res = pipe([
        function(x) { return x + 1; },
        function(x) { return x * 2; },
        function(x) { return x * x; }
    ], 5);

    assert.equal(res, 144);
    assert.end();

});