/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let tempSubArray = []
    let tempArray = []

    if(arr.length < 1){
        return arr
    } else if(arr.length < size){
        return [arr]
    }
    
    while(arr.length > 0){
        for(let i=0; i<size; i++){
            tempSubArray.push(arr[0])
            arr.shift()
            if(arr.length ===0){
                break;
            }
        }
        tempArray.push(tempSubArray)
        tempSubArray = []
    }

    return tempArray
};

