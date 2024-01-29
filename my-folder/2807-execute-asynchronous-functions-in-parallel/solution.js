/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    let tempFn = []

    return new Promise((resolve, reject) => {
        for(let i=0; i<functions.length; i++){
            functions[i]().then(res => {
                tempFn[i] = res
        if(tempFn.filter(filteredFn => filteredFn !==null).length === functions.length){
            resolve(tempFn)
        }
                
                }).catch(reject)
        }
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
