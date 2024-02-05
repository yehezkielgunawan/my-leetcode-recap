/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let tempMap = new Map()

   for(let i=0; i<s.length; i++){
       if(!tempMap.get(s[i])){
           tempMap.set(s[i], 1)
       } else{
           let mapValue = tempMap.get(s[i])
           tempMap.set(s[i], mapValue+=1)
       }
   }
   for(let i=0; i<s.length; i++){
       if(tempMap.get(s[i]) === 1){
           return i
       }
   }

   return -1
    
};