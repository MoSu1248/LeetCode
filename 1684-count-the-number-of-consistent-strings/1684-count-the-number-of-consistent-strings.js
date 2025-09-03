/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let current = true; // assume the word is valid

        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                current = false; // found a disallowed character
                break; // stop checking this word
            }
        }

        if (current) {
            count++; // all characters were allowed
        }
    }

    return count;
};
