impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut j = 1;

        for i in 1..nums.len(){
            if nums[i] != nums[i-1]{
                nums[j] = nums[i];
                j+=1;
            }
        }

        j as i32
    }
}
