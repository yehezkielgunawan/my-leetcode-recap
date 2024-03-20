/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0
    const symbolMap = new Map()
    symbolMap.set("I", 1);
    symbolMap.set("V", 5);
    symbolMap.set("X", 10);
    symbolMap.set("L", 50);
    symbolMap.set("C", 100);
    symbolMap.set("D", 500);
    symbolMap.set("M", 1000);

    for(let i=s.length - 1; i>=0; i--){
        if(symbolMap.get(s[i]) < symbolMap.get(s[i+1])){
            count -= symbolMap.get(s[i])
        } else{
            count += symbolMap.get(s[i])
        }
    }

    return count


    
};
