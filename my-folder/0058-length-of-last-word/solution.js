/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splittedWords = s.split(" ").filter(word => word !== "")

     return splittedWords[splittedWords.length-1].length
};
