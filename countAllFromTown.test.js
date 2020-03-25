describe('countAllFromTown is working fine' , function(){
    it('should return false for CY' , function(){
        assert.equal(false, countAllFromTown("CY") )
    });
    it('should return CA' , function(){
        assert.equal(0, countAllFromTown("CA") )
    });
    it('should return false for CJ' , function(){
        assert.equal(false, countAllFromTown("CJ") )
    });
});