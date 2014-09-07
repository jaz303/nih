var test = require('tape');
var pluck = require('../..').pluck;

test("pluck", function(assert) {

    var obj = {
        a: 10,
        b: 20,
        c: 30,
        d: 40
    };

    var res = pluck(['a', 'c'], obj);

    assert.deepEqual(res, {a: 10, c: 30});
    assert.end();

});