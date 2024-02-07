/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const resArray = []
    
    function helper(arrInput, depth){
        for(const val of arrInput){
            if(Array.isArray(val) && depth < n){
                helper(val, depth + 1)
            } else {
                resArray.push(val)
            }
        }
        return resArray
    }
    return helper(arr, 0)
};
