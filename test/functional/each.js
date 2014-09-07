var test = require('tape');
var each = require('../..').each;

test("each - array", function(assert) {

    var out = [];
    each(function(item, ix) {
        out.push(item, ix);
    }, [1, 2]);

    assert.deepEqual([1, 0, 2, 1], out);
    assert.end();

});

test("each - object with forEach", function(assert) {

    var o = {
        forEach: function(cb) {
            cb(1, 2);
            cb(3, 4);
        }
    };

    var out = [];
    each(function(item, ix) {
        out.push(item, ix);
    }, o);

    assert.deepEqual([1, 2, 3, 4], out);
    assert.end();

});

test("each - object", function(assert) {

    var out = [];
    each(function(item, ix) {
        out.push(item, ix);
    }, {foo: 'bar', baz: 'bleem'});

    assert.deepEqual(['bar', 'foo', 'bleem', 'baz'], out);
    assert.end();

});
