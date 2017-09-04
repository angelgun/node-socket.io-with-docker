/**
 * @fileoverview 시스템에 사용 할 환경 변수 설정 및 반환
 * node의 첫 번째 인자(process.argv[2])를 환경을 결정하는데 사용함
 */

/**
 * 사용 가능한 환경 목록
 * 변경 할 변수를 덮어 쓰거나 추가하고 싶은 변수 추가하여 사용
 * @type {Object}
 */
const environments = {
    // 로컬 테스트 환경
    test: {
        port: 5500,
        dbServer: '{serverDomain}',
        dbUser: '{ID}',
        dbPassword: '{PW}'
    },

    // 개발 서버 환경
    development: {
        port: 5501,
        dbServer: '{serverDomain}',
        dbUser: '{ID}',
        dbPassword: '{PW}'
    },

    // 운영 서버 환경
    production: {
        port: 5500,
        dbServer: '{serverDomain}',
        dbUser: '{ID}',
        dbPassword: '{PW}'
    }
};

/**
 * 공통 환경
 * @type {Object}
 */
const commonEnvironment = {
    port: 5501,
    dbServer: '{serverDomain}',
    dbPort: 3306,
    dbUser: '{ID}',
    dbPassword: '{PW}',
    dbUseSchema: '{Schema}'
};

/**
 * 오브젝트 extend
 * target의 가장 왼쪽의 오브젝트를 기준으로 다른 오브젝트를 병합 함
 * @param {...Object} target 병합 할 오브젝트 목록
 * @return {Object} 병합 기준이 된 오브젝트의 참조
 */
function extend(target) {
    var sources = [].slice.call(arguments, 1);

    sources.forEach(src =>
        src && Object.keys(src).forEach(prop => target[prop] = src[prop])
    );

    return target;
}

// 서버 실행 시 파라미터에 따른 환경 결정
// 기본값은 로컬 테스트 환경으로 함
const envName = process.argv[2] || 'test';
const environment = environments[envName];

// 공통 환경 오브젝트와 특정 환경 오브젝트 병합
const merged = extend({}, commonEnvironment, environment);

module.exports = merged;
