/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let returnedObj = {}
    const arr = this;

    for(let i=0; i<arr.length; i++){
        if(fn(arr[i]) in returnedObj){
            returnedObj[fn(arr[i])].push(arr[i])
        } else{
        returnedObj[fn(arr[i])] = [arr[i]]
        }
    }

    return returnedObj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
