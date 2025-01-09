/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  const candies = new Array(ratings.length).fill(1);

  // Left-to-right pass
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right-to-left pass
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sum up the candies
  return candies.reduce((a, b) => a + b, 0);
};

console.log(candy([1, 0, 2])); // Output: 5
// console.log(candy([1, 2, 2])); // Output: 4
// console.log(candy([1, 3, 4, 5, 2])); // Output: 11
// console.log(candy([1])); // Output: 1
// console.log(candy([2, 2, 2])); // Output: 3
