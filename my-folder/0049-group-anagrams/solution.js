/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resMap = new Map()
    if(strs.length === 1){
        return [strs]
    }
    for(let i=0; i<strs.length; i++){
       if(resMap.has(strs[i].toLowerCase().split("").sort().join(""))){
           resMap.set(strs[i].toLowerCase().split("").sort().join(""), [...resMap.get(strs[i].toLowerCase().split("").sort().join("")), strs[i]])
       } else{
           resMap.set(strs[i].toLowerCase().split("").sort().join(""), [strs[i]])
       }
    }

    return Array.from(resMap.values())
};
