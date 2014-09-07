var test = require('tape');
var attr = require('../..').attr;

test("attr", function(assert) {

    var obj = {
        foo: 10,
        bar: 20,
        getAttribute: function(a) {
            return this[a];
        }
    };

    assert.equal(10, attr('foo', obj));
    assert.equal(20, attr('bar', obj));
    assert.end();

});