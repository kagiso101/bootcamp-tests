describe('fromWhere is working fine', function () {
    it('should return Bellville', function () {
        assert.equal("Bellville",fromWhere("CY"))
    });
    it('should return Paarl', function () {
        assert.equal("Paarl",fromWhere("CJ"))
    });
    it('should return fromWhere', function () {
        assert.equal("Some other place!",fromWhere("other"))
    });
});