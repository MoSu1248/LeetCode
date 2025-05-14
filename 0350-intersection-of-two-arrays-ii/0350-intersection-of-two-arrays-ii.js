/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    nums1.sort((a, b) => a - b); 
    nums2.sort((a, b) => a - b); 

    let x = 0; 
    let y = 0; 

    const newArr = []; 

    while (x < nums1.length && y < nums2.length ) {
        
        if (nums1[x] === nums2[y]) {
            newArr.push(nums1[x])
            x++ 
            y++
        }
        else if(nums1[x] < nums2[y]){
            x++
        }
        else{
            y++ 
        }

    }

   return newArr
};