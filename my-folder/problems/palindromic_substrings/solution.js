/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let counter = 0
   const isPalindrome = (s, left, right) => {
       while(left < right){
           if(s.charAt(left++) !== s.charAt(right--)) return false
       }
       return true
   }
   
   for(let i=0; i<s.length; i++){
       for(let j=i; j<s.length; j++){
           if(isPalindrome(s, i, j)){
               counter++
           }
       }
   }

    return counter;
};