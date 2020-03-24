describe('yearsAgo is working fine' , function(years){
    it('should return yearsAgo' , function(){
        var years = 2000
        assert.equal(yearsAgo(years),20)
    });
    it('should return yearsAgo' , function(){
        var years = 2001
        assert.equal(yearsAgo(years),19)
    });
    it('should return yearsAgo' , function(){
        var years = 2010
        assert.equal(yearsAgo(years),10)
    });
});