/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let s = sentence; 
    const MAX_CHAR = 26;

    let vis = new Array(MAX_CHAR).fill(false);
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c >= 'A' && c <= 'Z')
            vis[c.charCodeAt(0) - 'A'.charCodeAt(0)] = true;
        else if (c >= 'a' && c <= 'z')
            vis[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
    }
    for (let i = 0; i < MAX_CHAR; i++) {
        if (!vis[i])
            return false;
    }
    return true;
};