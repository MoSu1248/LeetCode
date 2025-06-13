/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
    var reversePrefix = function(word, ch) {
    let arr = word.split('');
       
    for (let i = 0; i < word.length; i++) {
  
 
       if (arr[i] === ch) {
       
    let end = i; 
    let start = 0 ;

        while (start < end) {

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

                start++;
                end--;
    }

    return arr.join('');
    }

}

    return word;
    
};