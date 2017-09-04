var _addZero = n => {
    return n < 10 && n >= 0 ? '0' + n : '' + n;
};

/**
 * 날짜 양식 변환
 * @param {Date} d 날짜
 * @param {string} f 양식
 * @return {string} 날짜 양식
 */
module.exports =(d, f) => {
    if (typeof d !== 'object' || !d || !d.valueOf()) return '';

    var weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var h;
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case 'yyyy': return d.getFullYear();
            case 'yy': return _addZero((d.getFullYear() % 1000));
            case 'MM': return _addZero(d.getMonth() + 1);
            case 'dd': return _addZero(d.getDate());
            case 'E': return weekName[d.getDay()];
            case 'HH': return _addZero(d.getHours());
            case 'hh': return _addZero(((h = d.getHours() % 12) ? h : 12));
            case 'mm': return _addZero(d.getMinutes());
            case 'ss': return _addZero(d.getSeconds());
            case 'a/p': return d.getHours() < 12 ? '오전' : '오후';
            default: return $1;
        }
    });
};
