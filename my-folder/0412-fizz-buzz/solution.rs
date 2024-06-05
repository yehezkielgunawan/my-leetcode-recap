impl Solution {
    pub fn fizz_buzz(n: i32) -> Vec<String> {
        let mut tempArr = Vec::new();

    for i in 1..=n {
        if i % 15 == 0 {
            tempArr.push("FizzBuzz".to_string());
        } else if i % 3 == 0 {
            tempArr.push("Fizz".to_string());
        } else if i % 5 == 0 {
            tempArr.push("Buzz".to_string());
        } else {
            tempArr.push(i.to_string());
        }
    }
    tempArr
}
    
}

