/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     const cleanStr1 = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
     const cleanStr2 = t.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
     return cleanStr1 === cleanStr2;
};