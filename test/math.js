var test = require('tape');
var _ = require('..');

test('math', function(assert) {

    var tests = {
        add: [10, 5, 15],
        sub: [12, 22, 10],
        mul: [3, 9, 27],
        div: [7, 14, 2]
    };

    for (var k in tests) {
        
        var l = tests[k][0];
        var r = tests[k][1];
        var x = tests[k][2];
        
        assert.equal(_[k](l, r), x, k);
    
    }

    assert.end();

});

test('sum', function(assert) {

    assert.equal(_.sum([1,2,3,4,5]), 15);
    assert.end();

});

test('isOdd', function(assert) {

    assert.ok(_.isOdd(1));
    assert.notOk(_.isOdd(10));
    assert.end();

});

test('isEven', function(assert) {

    assert.ok(_.isEven(10));
    assert.notOk(_.isEven(121413));
    assert.end();

});