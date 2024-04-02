/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = ""
    const sortedArr = strs.sort()
    const first = sortedArr[0]
    const last = sortedArr[sortedArr.length - 1]

    for(let i=0; i<Math.min(first.length, last.length); i++){
        if(first.charAt(i) !== last.charAt(i)){
            return ans
        }
        ans += first.charAt(i)
    }
    return ans
};
