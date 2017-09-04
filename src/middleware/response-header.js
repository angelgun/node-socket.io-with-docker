/**
 * @fileoverview Response 헤더 설정 모듈
 */

/**
 * 사용 할 헤더와 값
 * @type {Object}
 */
var _map = {
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': true,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
};

/**
 * 헤더 설정
 * @param {Object} res HTTP Response
 * @param {string} header header name
 * @param {any} value value for header
 */
var _setHeader = (res, header, value) => res.setHeader(header, value);

/**
 * @param {Array<string>} allowedCors 허용된 도메인 목록
 * @return {Function} Middleware
 */
module.exports = allowedCors => {
    return (req, res, next) => {
        // 모든 도메인 허용
        var origin = req.headers.origin;
        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        // 헤더 설정
        Object.keys(_map).forEach(
            key => _setHeader(res, key, _map[key]));

        // 다음 레이어로 이동
        next();
    };
};
