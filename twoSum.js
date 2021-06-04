/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const ansNums = [];
  for (var i = 0; i < nums.length; i++) {
      for (var c = 0; c < nums.length; c++) {
          if (i != c && nums[i] + nums[c] == target) {
              console.log(i + " " + c)
              ansNums.push(i);
              ansNums.push(c);
              return ansNums;
          } 
      }
  }
  return ansNums;
};