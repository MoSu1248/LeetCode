/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  const arr = []
  const newArr = []

  let num = x.toString().replace(/[^a-z0-9]/g, '');

  

  for(let i = 0 ; i < num.length ; i++){
    arr.push(num[i])
  }
  
  for(let i = 0 ; i < num.length ; i++){
    newArr.push(arr.pop())
  }

  if (x < 0) {
    let value = ("-"+ newArr.join("")); 
    finalValues = parseInt(value); 

    if (finalValues <= 2147483647 && finalValues >=  -2147483648) {

      return finalValues; 
    }
    else{

      return finalValues = 0
    }

  }
  else{
    let value = (newArr.join("")); 
    finalValues = parseInt(value); 
    
    if (finalValues <= 2147483647 && finalValues >=  -2147483648) {
      
    return finalValues; 
    }
    else{

   return finalValues = 0
    }
  }
    
  };

