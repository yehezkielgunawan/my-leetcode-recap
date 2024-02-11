/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.tempNums = nums
    
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let total = 0
    for(const layer1 of this.tempNums){
        total += layer1
    }
    return total
    
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    let resArray = []
    for(let i=0; i<this.tempNums.length; i++){
        resArray.push(this.tempNums[i])
    }
    return `[${resArray}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */