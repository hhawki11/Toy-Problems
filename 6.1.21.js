// Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
// Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.

function romanNumeralReduction(str) {
  var total = 0;
  var totalStr = "";
  var nums = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  var num = [1000, 500, 100, 50, 10, 5, 1]
  for (var i = 0; i < str.length; i++) {
    total += nums[str[i]];
  }
  while (total > 0) {
    for (var i = 0; i < num.length; i++) {
      if (total >= num[i]) {
        total -= num[i];
        totalStr = totalStr.concat(nums[num[i]]);
        i = num.length;
      }
    }
  }
  return totalStr;
}

module.exports = romanNumeralReduction;
