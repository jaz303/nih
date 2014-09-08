var test = require('tape');
var any = require('../..').any;

function gt5(x) { return x > 5; }

test("any - array", function(assert) {

    var yes = [1, 2, 3, 4, 6];
    var no  = [1, 2, 3, 4, 5];

    assert.ok(any(gt5, yes));
    assert.notOk(any(gt5, no));

    assert.end();

});

test("any - object with forEach", function(assert) {

    var yes = { forEach: function(cb) { cb(6, 0); cb(2, 1), cb(-3, 2); } };
    var no  = { forEach: function(cb) { cb(1, 0); cb(2, 1), cb(3, 2); } };

    assert.ok(any(gt5, yes));
    assert.notOk(any(gt5, no));

    assert.end();

});

test("any - object", function(assert) {

    var yes = { a: 6, b: 1, c: 2, d: 0, e: 4 };
    var no  = { a: -1, b: -2, c: -3, d: -4, e: -5 };

    assert.ok(any(gt5, yes));
    assert.notOk(any(gt5, no));

    assert.end();

});
