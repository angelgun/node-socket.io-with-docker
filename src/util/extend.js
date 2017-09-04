/**
 * Object extend
 * @param {Object} origin 기준이 될 Object
 * @param {Object} newObj 추가 할 Object
 * @return {Object} 수정 된 Object
 */
module.exports = (origin, newObj) => {
    for(var key in newObj)
        if(newObj.hasOwnProperty(key))
            origin[key] = newObj[key];
    return origin;
};
