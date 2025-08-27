/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
     let origin = 0; 
     let left = 0;
     let right = 0; 
     let both = 0;
    let steps = moves.split('')

    steps.forEach(number  =>{
    
    switch (number) {
    case "L":
       left++ 
        break;
    case "R":
        right++
        break;
    case "_":
        both++
        break;
    default:
        break;
    }



    });
    if(left > right){
       origin = ( left - right) + both

        
    }
    else{
        origin = (right - left) + both 
        
    }
return origin
};