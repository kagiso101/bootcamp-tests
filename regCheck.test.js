describe('regCheck is working fine' , function(){
    it('should return true for L' , function(){
        assert.equal(0, regCheck ("L"))
    });
    it('should return true for  MP' , function(){
        assert.equal(0, regCheck ("MP"))
    });
    it('should return true for  EC,' , function(){
        assert.equal(0, regCheck ("EC"))
    });
    it('should return true for GP' , function(){
        assert.equal(0, regCheck ("GP"))
    });
});