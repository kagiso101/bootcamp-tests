describe('countAllPaarl is working fine', function () {
    it('should return CJ', function () {
        assert.equal(true, countAllPaarl("CJ"))
    });
    it('should return false ', function () {
        assert.equal(false, countAllPaarl("CY"))
    });
    it('should return false', function () {
        assert.equal(false, countAllPaarl("CA"))
    });
});