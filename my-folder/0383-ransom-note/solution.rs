impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut tempRansom = ransom_note;
        for c in magazine.chars(){
           if let Some(pos) = tempRansom.find(c){
            tempRansom.remove(pos);
           }
        }

       tempRansom.is_empty()
    }
}
