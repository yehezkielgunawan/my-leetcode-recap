/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m


    for(let j=0; j<n; j++){
        nums1[i] = nums2[j]
        i++
    }

  nums1.sort((a,b) => a-b)
    
};
