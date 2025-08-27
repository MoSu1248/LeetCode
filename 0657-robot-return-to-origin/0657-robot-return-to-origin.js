/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let Horigin = 0;
    let Vorigin= 0; 
    let steps = moves.split('')

    steps.forEach(number  =>{
switch (number) {
    case "U":
       Vorigin++ 
        break;
    case "D":
        Vorigin--
        break;
    case "L":
        Horigin++
        break;
    case "R":
        Horigin--
        break;
    default:
        break;
}
    });

if(Horigin === 0 && Vorigin === 0){
    return true
}
return false
    
};