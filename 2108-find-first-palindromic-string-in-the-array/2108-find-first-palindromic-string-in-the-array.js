/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let left = 0, right = word.length - 1;
        let isPalindrome = true;

        while (left < right) {
            if (word[left] !== word[right]) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }

        if (isPalindrome) {
            return word;
        }
    }

    return "";
};
