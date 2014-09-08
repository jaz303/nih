var test = require('tape');
var all = require('../..').all;

function gt5(x) { return x > 5; }

test("all - array", function(assert) {

    var yes = [6, 7, 8, 9, 10];
    var no  = [6, 7, 5, 9, 10];

    assert.ok(all(gt5, yes));
    assert.notOk(all(gt5, no));

    assert.end();

});

test("all - object with forEach", function(assert) {

    var yes = { forEach: function(cb) { cb(6, 0); cb(7, 1), cb(8, 2); } };
    var no  = { forEach: function(cb) { cb(6, 0); cb(7, 1), cb(2, 2); } };

    assert.ok(all(gt5, yes));
    assert.notOk(all(gt5, no));

    assert.end();

});

test("all - object", function(assert) {

    var yes = { a: 6, b: 7, c: 8, d: 9, e: 10 };
    var no  = { a: 6, b: 7, c: 4, d: 9, e: 10 };

    assert.ok(all(gt5, yes));
    assert.notOk(all(gt5, no));

    assert.end();

});
