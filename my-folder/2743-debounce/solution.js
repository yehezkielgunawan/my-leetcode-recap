/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    const tempCache = {}
    
    return function(...args) {
        clearTimeout(tempCache[0])
        tempCache[0] = setTimeout(() => fn(...args), t)

        return tempCache[0]
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
