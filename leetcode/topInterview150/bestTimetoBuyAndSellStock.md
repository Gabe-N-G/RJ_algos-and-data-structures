# Best Time to Buy and Sell Stock

Link: [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

---

### Examples

#### Example 1

```javascript
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

#### Example 2

```javascript
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Setup

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Keep track of the minimum price encountered so far and calculate the profit for each day. </details> <details> <summary>Hint 2</summary> Use a single pass through the array and update the maximum profit dynamically as you iterate. </details>

## Approach

This problem can be solved efficiently using a **single-pass greedy algorithm**.

---

### Key Observations:

1. To maximize profit:
   - Buy at the lowest price encountered so far.
   - Sell at the current day's price.
2. Track the **minimum price** and calculate the **profit** dynamically for each day:
   - `profit = current price - min price so far`
3. Update the maximum profit during each iteration.

---

### Steps:

1. Initialize two variables:
   - `minPrice` to a very large value (e.g., `Infinity`) to store the minimum price encountered so far.
   - `maxProfit` to `0` to store the maximum profit calculated.
2. Traverse the array `prices`:
   - Update `minPrice` if the current price is smaller than `minPrice`.
   - Calculate the profit for the current day (`current price - minPrice`).
   - Update `maxProfit` if the calculated profit is greater than the current `maxProfit`.
3. Return `maxProfit` after the loop.

---

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n)`  
  We traverse the array once, where `n` is the size of the array.

- **Space Complexity:**  
  `O(1)`  
  No additional space is used apart from a few variables.

---

### Why is this Solution Optimal?

1. **Single Pass:**  
   The solution only requires one traversal of the array, ensuring efficiency.

2. **Space Efficiency:**  
   Uses only two variables (`minPrice` and `maxProfit`), keeping the space complexity constant.

3. **Dynamic Updates:**  
   By dynamically tracking the minimum price and profit, the solution avoids unnecessary computations.
