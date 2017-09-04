/**
 * 10미만 정수에 0 추가 반환
 * @param {number} n 정수
 * @return {string} 변환된 문자열
 */
module.exports = n => {
    return n < 10 && n >= 0 ? '0' + n : '' + n;
};
