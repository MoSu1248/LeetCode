/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const ans = s.split(" ");
    let selected = ans.length -1

    console.log(ans[selected].length)

    return ans[selected].length
};