const autoHypen = require('../src/util/auto-hypen-phone');
const should = require('should');

describe('전화번호 하이픈 분리가 잘 되는가?', () => {
    it('8자리 전화번호', () => {
        const result = autoHypen('00000000');
        result.should.be.equal('0000-0000');
    });
    it('9자리 전화번호', () => {
        const result = autoHypen('000000000');
        result.should.be.equal('00-000-0000');
    });
    it('10자리 전화번호 중 서울제외', () => {
        const result = autoHypen('0000000000');
        result.should.be.equal('000-000-0000');
    });
    it('10자리 전화번호 중 서욾', () => {
        const result = autoHypen('0200000000');
        result.should.be.equal('02-0000-0000');
    });
    it('11자리 전화번호', () => {
        const result = autoHypen('00000000000');
        result.should.be.equal('000-0000-0000');
    });
});