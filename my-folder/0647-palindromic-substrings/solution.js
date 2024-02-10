/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let counterTotal = 0
   const palindromeCount = (s, left, right) => {
        let counter = 0
       while(left>=0 && right<s.length && s.charAt(left--) === s.charAt(right++)){
           counter++
       }
       return counter
   }
   
   for(let i=0; i<s.length; i++){
       let even = palindromeCount(s, i, i+1)
       let odd = palindromeCount(s, i-1, i+1)

       counterTotal += even + odd + 1
   }

    return counterTotal;
};
