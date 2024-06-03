/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let resArr = []
    
    for(let i=0; i<accounts.length; i++){
        let sum = 0;
        for(let j=0; j<accounts[i].length; j++){
            sum+=accounts[i][j];
        }
        resArr.push(sum)
    }

    return Math.max(...resArr)
};
