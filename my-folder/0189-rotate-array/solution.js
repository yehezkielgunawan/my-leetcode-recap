/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let end = nums.splice(nums.length - k)
    
    nums.splice(0,0,...end)
    
};
