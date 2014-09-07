var test = require('tape');
var defaults = require('../..').defaults;

test("defaults - returns new object if none provided", function(assert) {

    var res = defaults(null, {});

    assert.ok(res && typeof res === 'object');
    assert.end();

});

test("defaults - returns same object if one provided", function(assert) {

    var obj = {};
    var res = defaults(obj, {});

    assert.ok(res === obj);
    assert.end();

});

test("defaults - sets those keys/values not existing in subject", function(assert) {

    var res = defaults(
        { a: 1, c: 2 },
        { a: 10, b: 10, c: 10, d: 20 }
    );

    assert.deepEqual(res, { a: 1, b: 10, c: 2, d: 20 });
    assert.end();

});