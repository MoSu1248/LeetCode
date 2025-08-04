/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0; 
  let j = 0; 
  const mergedArray = [];

  while (i < word1.length && j < word2.length) {
    if (i <= j) {
      mergedArray.push(word1[i]);
      i++;
    } else {
      mergedArray.push(word2[j]);
      j++;
    }
  }

  while (i < word1.length) {
    mergedArray.push(word1[i]);
    i++;
  }

  while (j < word2.length) {
    mergedArray.push(word2[j]);
    j++;
  }

  return mergedArray.join('');
};