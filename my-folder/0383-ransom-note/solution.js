/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    for(const i of magazine){
        ransomNote = ransomNote.replace(i, "")
    }

    if(!ransomNote) return true;

    return false

    
};
