/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let previous = -1;
    let current = 1

    while(true){
        yield previous + current
        let temp = previous + current
        previous = current
        current = temp
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
