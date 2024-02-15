/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sortedNums = nums.sort((a,b) => a-b)
    let count = 0
    
    for(let i=0; i<sortedNums.length; i++){
        count+=sortedNums[i]
    }

    for(let i=sortedNums.length-1; i>0; i--){
        count-=sortedNums[i]
        if(count > sortedNums[i]){
            return count + sortedNums[i]
        }
    }
    return -1
};