var test = require('tape');
var extend = require('../..').extend;

test("extend - returns new object if none provided", function(assert) {

    var res = extend(null);

    assert.ok(res && typeof res === 'object');
    assert.end();

});

test("extend - returns same object if one provided", function(assert) {

    var obj = {};
    var res = extend(obj);

    assert.ok(res === obj);
    assert.end();

});

test("extend - extends from left to right", function(assert) {

    var res = extend(null,
        { a: 1, b: 2, c: 3 },
        { a: 2, c: 4},
        { d: 10 }
    );

    assert.deepEqual(res, { a: 2, b: 2, c: 4, d: 10 });
    assert.end();

});