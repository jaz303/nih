var test = require('tape');
var assoc = require('../..').assoc;
var assoc_p = require('../..').assoc_p;
var assoc_m = require('../..').assoc_m;

test('assoc', function(assert) {

    var input = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' }
    ];

    var res = assoc(function(item) {
        return item.id;
    }, input);

    assert.deepEqual(res, {
        a: input[0],
        b: input[1],
        c: input[2]
    });

    assert.end();

});

test('assoc_p', function(assert) {

    var input = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' }
    ];

    var res = assoc_p('id', input);

    assert.deepEqual(res, {
        a: input[0],
        b: input[1],
        c: input[2]
    });

    assert.end();

});

test('assoc_m', function(assert) {

    var input = [
        { id: 'a', getId: function() { return this.id; } },
        { id: 'b', getId: function() { return this.id; } },
        { id: 'c', getId: function() { return this.id; } }
    ];

    var res = assoc_m('getId', input);

    assert.deepEqual(res, {
        a: input[0],
        b: input[1],
        c: input[2]
    });

    assert.end();

});
