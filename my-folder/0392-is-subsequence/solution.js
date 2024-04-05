/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   let position = 0

   for(let i=0; i<t.length; i++){
    if(t[i] === s[position]){
        position++
    }
   }
   return position === s.length
    
};
