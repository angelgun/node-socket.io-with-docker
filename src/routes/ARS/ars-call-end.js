var ArsDao = require('../../../src/dao/ArsDao');
var co = require('../../../src/util/co');
var dateConvert = require('../../../src/util/date-conversion');

//ARS 회원상태 업데이트
module.exports = (req,res) => {
    //예외처리
    if (!req.body.call_stat || !req.body.end_date || !req.body.end_time || !req.body.sn) {
        res.sendStatus(400);
        res.end();
    }

    var arsDao = new ArsDao();

    /**
     * @type {string} 전화 상태
     */
    var callStatus = req.body.call_stat;

    /**
     * @type {string} 날자
     */
    var endDate = req.body.end_date;

    /**
     * @type {string} 시간
     */
    var endTime = req.body.end_time;

    /**
     * @type {object} 날자 + 시간
     */
    var callEndTime = dateConvert(endDate, endTime);

    /**
     * @type {string} 시리얼번호
     */
    var sn = req.body.sn;

    co(function* () {
        var result = yield cb =>
            arsDao.updateArsEnd(callStatus,callEndTime,sn,cb);
        res.status(200).json(result);
    });
};