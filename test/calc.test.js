if (typeof window == 'undefined' || typeof window.expect == 'undefined') {
    var expect = require('expect.js');
}

describe('add', function(){
    it('should be two', function(){
        var calc = new Calc();
        var result = calc.add(1, 1);
        expect(result).to.be(2);
    });

    it('should not be four', function(){
        var calc = new Calc();
        var result = calc.add(1, 2);
        expect(result).not.to.be(4);
    });
});


// describe('add', function(){
//     it("calls the original function", function () {
//         var callback = sinon.spy();
//         var proxy = once(callback);
// 
//         proxy();
// 
//         assert(callback.called);
//     });
// });
