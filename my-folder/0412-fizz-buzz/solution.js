/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let tempArray = []

    for(let i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            tempArray.push("FizzBuzz")
        } else if(i%3===0){
            tempArray.push("Fizz")
        } else if(i%5===0){
            tempArray.push("Buzz")
        } else{
            tempArray.push(String(i));
        }
    }
    return tempArray
    
};
