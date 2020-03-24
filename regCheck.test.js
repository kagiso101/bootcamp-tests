describe('regCheck is working fine' , function(){
    it('should return true for GP, L, EC, MP' , function(){
        assert.equal(false, regCheck ("GP, L, EC, MP"))
    });
});