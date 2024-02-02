/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const tempSeq = "123456789"
    let tempArr = []

    for(let i=0; i<tempSeq.length; i++){
        for(let j=i+1; j<=tempSeq.length; j++){
            tempArr.push(Number(tempSeq.substr(i, j-i)))
        }
    }
    return tempArr.filter(item => item >= low && item <= high).sort((a,b) => a-b)
};
