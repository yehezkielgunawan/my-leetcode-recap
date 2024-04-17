use std::collections::HashMap;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut hashTemp = HashMap::new();

        for num in nums{
            let count = hashTemp.entry(num).or_insert(0);
            *count += 1;
        }

        let mut sortedMapArr: Vec<_> = hashTemp.iter().collect();
        sortedMapArr.sort_by(|a,b| b.1.cmp(a.1));

        sortedMapArr.first().map(|(&key, _)| key).unwrap()

    }
}
