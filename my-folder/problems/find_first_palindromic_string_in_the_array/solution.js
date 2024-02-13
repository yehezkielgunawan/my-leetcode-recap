/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    const isPalindrome = word => word.split("").reverse("").join("") === word

    for(let i=0; i<words.length; i++){
        if(isPalindrome(words[i])){
            return words[i]
        }
    }
    return ""
};