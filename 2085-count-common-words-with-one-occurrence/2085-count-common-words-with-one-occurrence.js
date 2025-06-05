/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {

    words1.sort() ; 
    words2.sort() ; 

    const count = {};
    const count2 = {};

for (let char of words1) {
    count[char] = (count[char] || 0) + 1;
}

for (let char of words2) {
    count2[char] = (count2[char] || 0) + 1;
}

 // Find words that appear exactly once in both lists
    let result = [];

    for (let word in count) {
        if (count[word] === 1 && count2[word] === 1) {
            result.push(word);
        }
    }

    return result.length


    
};