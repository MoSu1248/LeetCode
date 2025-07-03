/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

let highCount = 0; 

    for(let i = 0 ; i < sentences.length ; i++){

    let count = (test) =>test.trim().split(/\s+/).reduce((count) => count + 1, 0);  

    let test = sentences[i]  

    if(count(test) > highCount){
        highCount = count(test); 
    }

    }
    
    return highCount
};