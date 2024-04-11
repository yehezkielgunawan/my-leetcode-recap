impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut i = m as usize;

        for &num in nums2.iter() {
            nums1[i] = num;
            i+=1;
        }

        nums1.sort()
    }
}
