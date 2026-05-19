/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let i = 0; 
    let ans = [];

    while(i < matrix.length ){            
        let val = 0;     let x = 0; 

        while (x < matrix[i].length){
            if (matrix[i][x] === 1 ){
                val++  
            }
            x++ 
        }
        ans.push(val)

        i++ 
    }

    return ans
};