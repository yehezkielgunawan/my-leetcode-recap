/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNum = 0;
    let counter = 0
    let temp = x

    if(x < 0){
        return false
    }
 for(temp=x; temp>0; temp = Math.floor(temp/10)){
     reversedNum = reversedNum * 10 + temp%10
 }

    return reversedNum === x
    
};
