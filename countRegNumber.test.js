describe('countRegNumber is working fine', function () {
    it('should return true for CA 182736', function () {
        assert.equal(1, countRegNumber("CA 182736"))
    });
    it('should return true for CY 523519', function () {
        assert.equal(1, countRegNumber("CY 523519"))
    });
    it('should return true for CJ 812328', function () {
        assert.equal(1, countRegNumber("CJ 812328"))
    });
    it('should return true for CA 182736', function () {
        assert.equal(1, countRegNumber("CA 182736"))
    });
});