/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m
  let j = 0

    while(j < n){
        nums1[i] = nums2[j]
        j++
        i++
    }

  nums1.sort((a,b) => a-b)
    
};
