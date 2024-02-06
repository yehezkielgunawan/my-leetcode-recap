/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray = [...arr1, ...arr2];
    let resArray = new Map()

    for(let i=0; i<joinedArray.length; i++){
        if(resArray.has(joinedArray[i].id)){
            resArray.set(joinedArray[i].id, {...resArray.get(joinedArray[i].id), ...joinedArray[i]})
        } else{
            resArray.set(joinedArray[i].id, joinedArray[i])
        }
    }
    return Array.from(resArray.values()).sort((a,b) => a.id-b.id)
    
};
