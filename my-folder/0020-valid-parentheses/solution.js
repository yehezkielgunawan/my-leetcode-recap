/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let tempStack = [];

    for(let item of s){
        if(item === "{" || item === "[" || item === "("){
            tempStack.push(item)
        } else {
            if(s.length === 0 || 
            (item === "}" && tempStack[tempStack.length-1] !== "{") ||
            (item === ")" && tempStack[tempStack.length-1] !== "(") || 
            (item === "]" && tempStack[tempStack.length-1] !== "[")
            ) {
                return false
            }
            tempStack.pop()
        }
    }
    return tempStack.length===0
    
};
