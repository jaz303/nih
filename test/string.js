var test = require('tape');
var _ = require('..');

test('string', function(assert) {

    var tests = {
        prepend: ['mr ', 'pink', 'mr pink'],
        append: ['nd', '2', '2nd']
    };

    for (var k in tests) {
        
        var l = tests[k][0];
        var r = tests[k][1];
        var x = tests[k][2];
        
        assert.equal(_[k](l, r), x, k);
    
    }

    assert.end();

});