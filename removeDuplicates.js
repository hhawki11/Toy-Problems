/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var prev = nums[0];
    var i = 1;
    while (i < nums.length) {
        if (nums[i] == prev) {
            nums.splice(i, 1);
        } else {
            prev = nums[i];
            i++;
        }
    }
    return nums.length;
};