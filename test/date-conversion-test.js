const dateConvert = require('../src/util/date-conversion');
const should = require('should');

describe('날자와 시간이 합쳐지는가?', () => {
    it('자바스크립트 시간으로 표현되는가?', () => {
        const result = dateConvert('170830','120000');
        result.should.be.equal('2017-08-30T12:00:00Z');
    });
});