/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let tempArray = []

    for(let i=0; i<s.length; i++){
       if(tempArray.includes(s[i])){
           return s[i]
       }
       tempArray.push(s[i])
    }

};
