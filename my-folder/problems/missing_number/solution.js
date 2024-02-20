/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedNums = nums.sort((a,b) => a-b)
    const serialNums = []
    let tempMap = new Map()

    

    for(let i=0; i<=sortedNums.length; i++){
        serialNums.push(i)
        tempMap.set(i, 0)
    }
    
    for(const item of sortedNums){
        if(tempMap.has(item)){
            tempMap.set(item, 1)
        }
    }
    
    for(const [key, value] of tempMap){
        if(value ===0){
            return key
        }
    }
   
    
};