/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    let maxProfit = 0;
    
    for(let price of prices){
        if(price < buyPrice){
            buyPrice = price;
        } else{
            profit = price - buyPrice;
            buyPrice = price
            maxProfit += profit;
        }
    }
    return maxProfit
    
};
