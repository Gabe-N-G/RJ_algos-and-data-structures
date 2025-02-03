/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  console.log(numSet);
  let maxLength = 0;

  for (let num of numSet) {
    // Only start counting if num is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Expand the sequence forward
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
