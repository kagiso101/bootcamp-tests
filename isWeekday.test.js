describe('isWeekday is working fine', function () {
    it('should return a Weekday', function () {
        assert.equal(true, isWeekday("Tuesday"))
    });
    it('should return a Weekday', function () {
        assert.equal(true, isWeekday("Monday"))
    });
    it('should return a false', function () {
        assert.equal(false, isWeekday("Sunday"))
    });
});