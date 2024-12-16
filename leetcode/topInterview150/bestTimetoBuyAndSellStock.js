/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = Infinity; // Track the minimum price encountered so far
  let maxProfit = 0; // Track the maximum profit

  // Traverse the array of prices
  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price; // Update minPrice if current price is lower
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice); // Update maxProfit
    }
  });

  return maxProfit; // Return the maximum profit found
};
