/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


 var searchInsert = function(nums, target) {
    return [...nums, target].sort((a,b) => {return a-b}).indexOf(target);
};