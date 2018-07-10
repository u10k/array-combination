'use strict';
/**
 *@desc
 *@author wenzhe
 *@date 2018-07-10
 */

/**
 * 自由组合数组
 * @return{Array}
 */
module.exports = function () {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        var ret = [];
        a.forEach(function(a) {
            b.forEach(function(b) {
                ret.push(a.concat([b]));
            });
        });
        return ret;
    }, [[]]);
};

