describe('totalPhoneBill is working fine' , function(){
    it('should return totalPhoneBill' , function(){
        assert.equal("R0.00", totalPhoneBill("R + total.toFixed(2)"))
    });

});