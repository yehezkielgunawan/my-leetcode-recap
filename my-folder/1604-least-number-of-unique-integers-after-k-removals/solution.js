/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let tempMap = new Map()

    for(let i=0; i<arr.length; i++){
        if(!tempMap.has(arr[i])){
            tempMap.set(arr[i], 1)
        } else{
            let tempVal = tempMap.get(arr[i])
            tempMap.set(arr[i], ++tempVal)
        }
    }
   const sortedMap = new Map([...tempMap.entries()].sort((a,b) => a[1]-b[1]))
   let uniqueCount = sortedMap.size
   
   for(const [key, value] of sortedMap){
       if(k >= value){
           k-=value
           uniqueCount--
       } else{
           break;
       }
   }
   return uniqueCount
};
