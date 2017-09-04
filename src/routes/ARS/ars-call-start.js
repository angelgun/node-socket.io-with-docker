var ArsDao = require('../../../src/dao/ArsDao');
var co = require('../../../src/util/co');
var dateConvert = require('../../../src/util/date-conversion');

//ARS 회원상태 업데이트
module.exports = (req,res) => {
    //예외처리
    if (!req.body.start_date || !req.body.start_time || !req.body.sn) {
        res.sendStatus(400);
        res.end();
    }

    var arsDao = new ArsDao();

    /**
     * @type {string} 날자
     */
    var startDate = req.body.start_date;

    /**
     * @type {string} 날자
     */
    var startTime = req.body.start_time;

    /**
     * @type {object} 날자 + 시간
     */
    var callStartTime = dateConvert(startDate, startTime);

    /**
     * @type {string} 시리얼번호
     */
    var sn = req.body.sn;

    co(function* () {
        var result = yield cb =>
            arsDao.updateArsStart(callStartTime,sn,cb);
        res.status(200).json(result);
    });
};