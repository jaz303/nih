var test = require('tape');
var group = require('../..').group;
var group_p = require('../..').group_p;
var group_m = require('../..').group_m;

test('group', function(assert) {

    var input = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' },
        { id: 'a' },
        { id: 'b' },
        { id: 'c' }
    ];

    var res = group(function(item) {
        return item.id;
    }, input);

    assert.deepEqual(res, {
        a: [input[0], input[3]],
        b: [input[1], input[4]],
        c: [input[2], input[5]],
    });

    assert.end();

});

test('group', function(assert) {

    var input = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' },
        { id: 'a' },
        { id: 'b' },
        { id: 'c' }
    ];

    var res = group_p('id', input);

    assert.deepEqual(res, {
        a: [input[0], input[3]],
        b: [input[1], input[4]],
        c: [input[2], input[5]],
    });

    assert.end();

});

test('group_m', function(assert) {

    function Thing(id) { this.id = id; }
    Thing.prototype.getId = function() { return this.id; };

    var input = [
        new Thing('a'), new Thing('b'), new Thing('c'),
        new Thing('a'), new Thing('b'), new Thing('c')
    ];

    var res = group_m('getId', input);

    assert.deepEqual(res, {
        a: [input[0], input[3]],
        b: [input[1], input[4]],
        c: [input[2], input[5]],
    });

    assert.end();

});
