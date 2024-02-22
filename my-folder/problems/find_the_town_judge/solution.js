/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trusting = new Array(n+1).fill(0)
    const trusted = new Array(n+1).fill(0)

    for(const person of trust){
        trusted[person[0]]++
        trusting[person[1]]++
    }

 
    for(let i=1; i<=n; i++){
        if(trusting[i] === n-1 && trusted[i] ===0){
            return i
        }
    }

    return -1
    
};