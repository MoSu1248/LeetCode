/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letterMap = new Map();

    for (let char of sentence) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letterMap.set(char.toLowerCase(), true);
        }
    }

    return letterMap.size === 26;
};