var ArsDao = require('../../../src/dao/ArsDao');
var co = require('../../../src/util/co');
var autoHypen = require('../../../src/util/auto-hypen-phone.js');

//ARS 입력
module.exports = (req,res) => {
    //예외처리
    if (!req.body) {
        res.sendStatus(400);
        res.end();
    }

    var arsDao = new ArsDao();

    /**
     * @type {string} 걸려온 전화번호
     */
    var callNumber = req.body.call_number;

    /**
     * @type {string} 하이픈 삽입 함수
     */
    var callNum = autoHypen(callNumber);

    /**
     * @type {string} 대표번호
     */
    var branchNum = req.body.branch_number;

    /**
     * @type {string} 시스템 번호
     */
    var systemCode = req.body.system_code;

    /**
     * @type {string} 시리얼번호
     */
    var sn = req.body.sn;

    co(function* () {
        var result = yield cb =>
            arsDao.insertArs(callNum,branchNum,systemCode,sn,cb);
        res.status(200).json(result);
    });
};