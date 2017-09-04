const db = require('../../src/config/db-connection');
var pool = db.connectionPool;

/**
 * 콜 전화 등록
 */
var ARS_INSERT_SQL = `INSERT INTO
    ARS
SET
    call_number = ?,
    branch_number = ?,
    cr_date = NOW(),
    system_code = ?,
    sn = ?`;

/**
 * 콜 회원상태 메뉴 업데이트
 */
var UPDATE_ARS_MENU_SQL = `UPDATE
    ARS
SET
    member_stat = ?
WHERE
    sn = ?`;

/**
 * 콜 링상태 업데이트
 */
var UPDATE_ARS_CALLBELL_SQL = `UPDATE
    ARS
SET
    call_stat = ?,
    branch_number2 = ?
WHERE
    sn = ?`;

/**
 * 콜 전화 시작시간 업데이트
 */
var UPDATE_ARS_CALLSTART_SQL = `UPDATE
    ARS
SET
    call_start_time = ?
WHERE
    sn = ?`;

/**
 * 콜 전화 종료시간 업데이트
 */
var UPDATE_ARS_CALLEND_SQL = `UPDATE
    ARS
SET
    call_stat = ?,
    call_end_time = ?
WHERE
    sn = ?`;

module.exports = class ArsDao {
    constructor () {}

    /**
     * 콜 전화 등록
     * @param {string} callNum 걸려온 전화번호
     * @param {string} branchNum 대표번호
     * @param {string} systemCode 0000: 피플링크 1111: 편두리본사
     * @param {string} sn 시리얼번호
     * @param {Function} cb 콜백함수
     */
    insertArs(callNum,branchNum,systemCode,sn,cb) {
        pool.query(ARS_INSERT_SQL, [callNum,branchNum,systemCode,sn], (err,result) => {
            cb(result);
        });
    };

    /***
     * 콜 회원상태 메뉴 업데이트
     * @param {string} memberStatus 회원상태 1:비회원 2:회원 3:기타상담
     * @param {string} sn 시리얼번호
     * @param {Function} cb 콜백함수
     */
    updateArsMenu(memberStatus,sn,cb) {
        pool.query(UPDATE_ARS_MENU_SQL, [memberStatus,sn], (err,result) => {
            cb(result);
        });
    };

    /**
     * 콜 링상태 업데이트
     * @param {string} callStatus 통화상태
     * @param {string} branchNum2 받은 전화번호
     * @param {string} sn 시리얼번호
     * @param {Function} cb 콜백함수
     */
    updateArsCall(callStatus,branchNum2,sn,cb) {
        pool.query(UPDATE_ARS_CALLBELL_SQL, [callStatus,branchNum2,sn], (err,result) => {
            cb(result);
        });
    };

     /**
     * 콜 전화 시작시간 업데이트
     * @param {string} callStartTime 전화시작 시간
     * @param {string} sn 시리얼번호
     * @param {Function} cb 콜백함수
     */
    updateArsStart(callStartTime,sn,cb) {
        pool.query(UPDATE_ARS_CALLSTART_SQL, [callStartTime,sn], (err,result) => {
            cb(result);
        });
    };

    /**
     * 콜 전화 종료시간 업데이트
     * @param {string} callStatus 통화상태
     * @param {string} callEndTime 전화종료시간
     * @param {string} sn 시리얼번호
     * @param {Function} cb 콜백함수
     */
    updateArsEnd(callStatus,callEndTime,sn,cb) {
        pool.query(UPDATE_ARS_CALLEND_SQL, [callStatus,callEndTime,sn], (err,result) => {
            cb(result);
        });
    };
};
