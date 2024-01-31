/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // let primeCount = 0
    // const isPrime = (inputNum) => {
    //     for(let i=2; i < (inputNum**0.5); i++){
    //        if(inputNum % i === 0){
    //            return false
    //        }
    //     }
    //     return true
    // }

    // if(n < 2) {
    //     return 0
    // }
    // for(let i=2; i < n; i++){
    //     if(isPrime(i)){
    //         primeCount++
    //     }
    // }
    

    // return primeCount

    let isPrime = []
    let count = 0
    if(n <= 2) {
        return 0
    }

    for(let i=3; i<n; i+=2){
        isPrime[i]=true
    }
    isPrime[2] = true
    
    for(let i=3; i*i < n; i+=2){
        if(isPrime[i]){
            for(let j=i*i; j<n; j+=2*i){
                isPrime[j] = false
            }
        }
    }
    for(let i=2; i<n; i++){
        if(isPrime[i]){
            count++
        }
    }

    return count;


};
