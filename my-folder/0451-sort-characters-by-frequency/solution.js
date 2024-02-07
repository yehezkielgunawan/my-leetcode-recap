/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let tempMap = new Map()
    const newArrString = []

    for(const item of s){
        if(tempMap.has(item)){
            tempMap.set(item, tempMap.get(item)+1)
        } else{
            tempMap.set(item, 1)
        }
    }
   tempMap = Array.from(tempMap).sort((a,b) => b[1]-a[1])
   
   for(let [key, value] of tempMap){
       for(let i=0; i<value; i++){
       newArrString.push(key)
       }
   }
   return newArrString.join("")
};
