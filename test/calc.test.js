var expect = require('expect.js');
var calc   = require('../lib/calc.js');

describe('add', function(){
    it('1と1を与えたら2を返す', function(){
        var result = calc.add(1, 1);
        expect(result).to.be(2);
    });
    // テストケースを追記
    it('1と2を与えたら4にならない', function(){
        var result = calc.add(1, 2);
        expect(result).not.to.be(4);
    });
});
