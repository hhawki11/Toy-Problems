// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

function kaprekarsConstant(num) {
  return findConstant(num, 0);

  function findConstant(num, count) {
    var newNum = arrange(num, false) - arrange(num, true);
    count++;
    if (newNum == 6174) {
      return count;
    }
    else {
      return findConstant(newNum, count);
    }
  }

  function arrange(num, asc) {
    var nums = [];
    //converts integer to array of digits
    for (var i = 0; i < 4; i++) {
      var last = num % 10;
      num = parseInt(num / 10);
      nums.push(last);
    }
    var final = 0;
    for (var k = 0; k < 4; k++) {
      var lowest = nums[0];
      //finds the lowest or highest number in the integer
      for (var i = 1; i < nums.length; i++) {
        if (lowest < nums[i] && !asc) {
          lowest = nums[i];
        }
        if (lowest > nums[i] && asc) {
          lowest = nums[i];
        }
      }
      //adds number to front
      final = final * 10;
      final = final + lowest;
      //removes used digit
      for (var i = 0; i < nums.length; i++) {
        if (nums[i] == lowest) {
          nums.splice(i, 1);
          i = nums.length;
        }
      }
    }
    return final;
  }
}

module.exports = kaprekarsConstant;
