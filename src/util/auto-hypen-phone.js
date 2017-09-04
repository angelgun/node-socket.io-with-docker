/**
 * 전화번호 변경
 * @param {string} phoneNum 전화번호
 * @return {string} 0000-0000 or 00-000-0000 or 000-000-0000 or 00-0000-0000 or 000-0000-0000
 */
module.exports = (phoneNum) => {
    if (typeof phoneNum !== 'string' || !phoneNum || !phoneNum.valueOf()) return '';

    var tmp = '';
    var phoneNum = phoneNum.replace(/[^0-9]/g, '');
    if (phoneNum.length === 8) {
        tmp += phoneNum.substr(0,4);
        tmp += '-';
        tmp += phoneNum.substr(4);
        return tmp;
    } else if (phoneNum.length === 9) {
        tmp += phoneNum.substr(0,2);
        tmp += '-';
        tmp += phoneNum.substr(2,3);
        tmp += '-';
        tmp += phoneNum.substr(5);
        return tmp;
    } else if (phoneNum.length === 10) {
        var seoul = '';
        seoul = phoneNum.substr(0,2);
        if (seoul === '02') {
            tmp += phoneNum.substr(0,2);
            tmp += '-';
            tmp += phoneNum.substr(2,4);
            tmp += '-';
            tmp += phoneNum.substr(6);
            return tmp;
        } else {
            tmp += phoneNum.substr(0,3);
            tmp += '-';
            tmp += phoneNum.substr(3,3);
            tmp += '-';
            tmp += phoneNum.substr(6);
            return tmp;
        }
    } else if (phoneNum.length === 11) {
        tmp += phoneNum.substr(0,3);
        tmp += '-';
        tmp += phoneNum.substr(3,4);
        tmp += '-';
        tmp += phoneNum.substr(7);
        return tmp;
    };
};
