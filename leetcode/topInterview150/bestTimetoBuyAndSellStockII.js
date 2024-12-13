// Optimal Solution:

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let maxProfit = 0; // Initialize profit to 0

  // Traverse the prices array
  for (let i = 0; i < prices.length - 1; i++) {
    // If there's a profit opportunity (price goes up the next day)
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i]; // Add the profit
    }
  }

  return maxProfit; // Return the total accumulated profit
};

// Original solution where I did not understand the question clearly,
// and over-thought it:)
// Feel free to uncomment the below if you wanted to review.

// const maxProfit = function (prices) {
//   let maxProfit = 0;
//   let stockPurchased = false;
//   let i = 0;

//   for (let j = 1; j < prices.length; j++) {
//     if (!stockPurchased) {
//       if (prices[i] >= prices[j]) {
//         i++;
//         continue;
//       }
//     }

//     let priceDiff = prices[j] - prices[i];
//     let nextPriceDiff = prices[j + 1] - prices[i];

//     if (nextPriceDiff > priceDiff) {
//       continue;
//     } else {
//       maxProfit += priceDiff;
//       j++;
//       i = j;
//       stockPurchased = false;
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
