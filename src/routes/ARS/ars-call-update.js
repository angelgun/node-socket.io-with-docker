var ArsDao = require('../../../src/dao/ArsDao');
var co = require('../../../src/util/co');

//ARS 회원상태 업데이트
module.exports = (req,res) => {
    //예외처리
    if (!req.body.call_stat || !req.body.branch_number2 || !req.body.sn) {
        res.sendStatus(400);
        res.end();
    }

    var arsDao = new ArsDao();

    /**
     * @type {string} 걸려온 전화번호
     */
    var callStatus = req.body.call_stat;

    /**
     * @type {string} 받은 전화번호
     */
    var branchNum2 = req.body.branch_number2;

    /**
     * @type {string} 시리얼번호
     */
    var sn = req.body.sn;

    co(function* () {
        var result = yield cb =>
            arsDao.updateArsCall(callStatus,branchNum2,sn,cb);
        res.status(200).json(result);
    });
};