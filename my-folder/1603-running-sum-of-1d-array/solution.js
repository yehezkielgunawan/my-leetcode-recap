/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let tempCount = 0
    let tempArr = []

    for(let i=0; i<nums.length; i++){
        tempCount+=nums[i]
        tempArr.push(tempCount)
    }

    return tempArr;
};
