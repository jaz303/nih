var test = require('tape');
var set = require('../..').set;

test("set makes set", function(assert) {

    var res = set(['a', 'b', 'c']);

    assert.deepEqual(res, {a: true, b: true, c: true});
    assert.end();

});