/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const lookup = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (let [value, symbol] of lookup) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
};

console.log(intToRoman(3749)); // "MMMDCCXLIX"
// console.log(intToRoman(58));   // "LVIII"
// console.log(intToRoman(1994)); // "MCMXCIV"
// console.log(intToRoman(1));    // "I"
// console.log(intToRoman(3999)); // "MMMCMXCIX"
