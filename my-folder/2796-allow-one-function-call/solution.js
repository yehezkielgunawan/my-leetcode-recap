/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calledCount = 0
    
    return function(...args){
        if(calledCount > 0) return undefined;
        calledCount++
        return fn(...args)
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

