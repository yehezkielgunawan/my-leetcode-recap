/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /^[a-zA-Z0-9]$/;
    let tempStr = []

    for(const i of s){
        if(i.match(regex)){
            tempStr.push(i.toLowerCase())
        }
    }

    return tempStr.join("") === tempStr.reverse().join("")
    
};
