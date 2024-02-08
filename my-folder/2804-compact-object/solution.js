/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const compactObj = {}

    if(!obj) return null
    else if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    } else if(typeof obj !== "object") {
        return obj
    }

    for(const key in obj){
        const val = compactObject(obj[key])
        if(val){
            compactObj[key] = val
        }
    }
    return compactObj
};
