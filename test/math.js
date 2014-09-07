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