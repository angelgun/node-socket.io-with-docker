/**
 * 날짜와 시간 합치기
 * @param {string} d 날자
 * @param {string} t 시간
 * @return {string} TZ YYYY-MM-DDTHH-MM-SSZ
 */
module.exports = (d, t) => {

    var d = '' + d;
    var t = '' + t;

    var year = '20' + d.substring(0,2);
    var month = d.substring(2,4);
    var day = d.substring(4,6);
    var date = year + '-' + month + '-' + day;

    var hour = t.substring(0,2);
    var min = t.substring(2,4);
    var sec = t.substring(4,6);
    var time = 'T' + hour + ':' + min + ':' + sec + 'Z';
    return TZ = date + time;
};
