/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const sortedG = g.sort((a,b) => a-b)
    const sortedS = s.sort((a,b) => a-b)
    let ans = 0
    let gi = 0;
    let si = 0

    if(s.length < 1 || g.length < 1){
        return 0
    }

    while(gi<sortedG.length && si<sortedS.length){
        if(s[si] >= g[gi]){
            ans++
            gi++
        }
        si++
    }
    return ans
    
};
