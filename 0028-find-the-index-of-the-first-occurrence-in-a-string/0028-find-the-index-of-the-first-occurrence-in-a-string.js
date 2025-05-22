/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let lowerHaystack = haystack.toLowerCase();
    let lowerNeedle = needle.toLowerCase(); 

    if (lowerNeedle === "") return 0;

    if (lowerHaystack.includes(lowerNeedle[0])) {
        // Try all possible positions in haystack
        for (let start = 0; start <= lowerHaystack.length - lowerNeedle.length; start++) {
            const arr = [];
            const arrCount = [];

            for (let i = start; i < start + lowerNeedle.length; i++) {
                arr.push(lowerHaystack[i]);
                arrCount.push(i);
            }

            if (arr.join("") === lowerNeedle) {
                console.log(arrCount[0]);
                return arrCount[0];
            }
        }

        console.log("NOPE");
        return -1;
    } else {
        return -1;
    }
};