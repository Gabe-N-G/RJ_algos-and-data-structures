# Best Time to Buy and Sell Stock II

Link: [Best Time to Buy and Sell Stock II](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/)

Difficulty: Easy

## The Ask

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it and then immediately sell it on the same day.

Find and return the **maximum profit** you can achieve.

---

### Example 1

```javascript
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: 
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3.
Total profit is 4 + 3 = 7.
```

### Example 2

```javascript
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: 
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4.
Total profit is 4.
```

### Example 3

```javascript
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: 
There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```

### Setup

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // code goes here
};
```

## Approach

To solve this problem, we need to simulate a sequence of stock trades where we "buy low and sell high" repeatedly.

### Key Observations:
1. We can achieve maximum profit by **adding all the positive differences** between consecutive days. If `prices[i] < prices[i+1]`, then buying on day `i` and selling on day `i+1` will contribute to the profit.
2. If `prices[i] >= prices[i+1]`, we do nothing (no profit can be gained).
3. The problem does not require us to explicitly track buy/sell operations, so we can compute the result in a single pass.

---

### Steps:
1. Initialize a variable `maxProfit` to store the accumulated profit.
2. Traverse the array `prices`:
   - If `prices[i] < prices[i+1]`, add the difference `prices[i+1] - prices[i]` to `maxProfit`.
   - Otherwise, do nothing (skip that pair of days).
3. Return the total value of `maxProfit`.

---

### Algorithm Complexity:
- **Time Complexity:** \( O(n) \)  
  We traverse the array once.

- **Space Complexity:** \( O(1) \)  
  No additional space is used; all operations are done in-place.