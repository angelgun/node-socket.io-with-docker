/**
 * 코루틴
 * @param {Function*} generator 제너레이터
 */
module.exports = generator => {
    var gen = generator();

    function next(res) {
        var ret = gen.next(res);
        if (ret.done) return;
        ret.value(next);
    }

    next();
};
