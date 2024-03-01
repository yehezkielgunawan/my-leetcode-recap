/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // const splittedString = s.split("").sort((a,b) => b-a)
  
    // for(let i=s.length -1; i>=0; i--){
    //     [splittedString[i], splittedString[splittedString.length-1]] = [splittedString[splittedString.length-1], splittedString[i]]
    // }

    // return splittedString.join("")

    let count0 = 0
    let count1=0

    for(let itemNum of s){
        if(itemNum === "1") count1++
        else{
            count0++
        }

    }
        return "1".repeat(--count1) + "0".repeat(count0) + "1"
};