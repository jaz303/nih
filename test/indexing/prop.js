var test = require('tape');
var prop = require('../..').prop;

test("prop", function(assert) {

    var obj = {
        a: 10,
        b: 20,
        c: 30,
        d: 40
    };

    assert.equal(30, prop('c', obj));
    assert.end();

});