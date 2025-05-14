/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
   let currentVal = init

    function increment(){
        currentVal++ 
        return currentVal

    }function reset(){
        currentVal = init; 
                return currentVal

    }
    function decrement(){
        currentVal-- 
                return currentVal

    }
    
    return {increment, reset, decrement}

}


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */