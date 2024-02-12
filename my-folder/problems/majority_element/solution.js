/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashTemp = new Map()
    for(const item of nums){
        if(!hashTemp.has(item)){
            hashTemp.set(item, 1)
        } else{
            let itemValue = hashTemp.get(item)
            hashTemp.set(item, ++itemValue)
        }
    }
    const sortedMapArr = Array.from(hashTemp).sort((a, b) => b[1]-a[1])
    return sortedMapArr[0][0]
};