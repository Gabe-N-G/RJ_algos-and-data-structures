# Candy

Link: [Candy](https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Hard

## The Ask

There are `n` children standing in a line, each assigned a rating value given in the integer array `ratings`. You are tasked with distributing candies to the children, following these rules:

1. Each child must have at least one candy.
2. Children with a higher rating than their neighbors must receive more candies than their neighbors.

Return the **minimum number of candies** required to satisfy the rules.

## Examples

### Example 1

```javascript
Input: ratings = [1, 0, 2]
Output: 5
Explanation: You can allocate candies as [2, 1, 2].
- The first child gets 2 candies because they have a higher rating than the second child.
- The second child gets 1 candy because they have the lowest rating.
- The third child gets 2 candies because they have a higher rating than the second child.
```

### Example 2

```javascript
Input: ratings = [1, 2, 2]
Output: 4
Explanation: You can allocate candies as [1, 2, 1].
- The first child gets 1 candy because they have the lowest rating.
- The second child gets 2 candies because they have a higher rating than the first child.
- The third child gets 1 candy because their rating is equal to the second child's rating.
```

## Setup

```javascript
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use two passes through the `ratings` array: one from left to right and another from right to left. </details> <details> <summary>Hint 2</summary> Maintain a `candies` array, where `candies[i]` represents the candies allocated to the `i-th` child. </details> <details> <summary>Hint 3</summary> First, ensure children with higher ratings than their left neighbors get more candies in the left-to-right pass. Then, ensure the condition is satisfied for children with higher ratings than their right neighbors in the right-to-left pass. </details>

## Approach

### Key Observations:

1. Each child must have at least 1 candy.
2. The candy distribution must respect the relative ordering of ratings:
   - If `ratings[i] > ratings[i - 1]`, then `candies[i] > candies[i - 1]`.
   - If `ratings[i] > ratings[i + 1]`, then `candies[i] > candies[i + 1]`.
3. We can solve the problem using **two passes**:
   - **Left-to-Right Pass:** Ensure children with higher ratings than their left neighbors get more candies.
   - **Right-to-Left Pass:** Ensure children with higher ratings than their right neighbors get more candies.

### Steps:

#### 1. Initialize a `candies` Array:

- Allocate 1 candy to each child initially.

#### 2. Left-to-Right Pass:

- Traverse the `ratings` array from left to right.
- If `ratings[i] > ratings[i - 1]`, increase `candies[i]` to `candies[i - 1] + 1`.

#### 3. Right-to-Left Pass:

- Traverse the `ratings` array from right to left.
- If `ratings[i] > ratings[i + 1]`, ensure `candies[i]` is at least `candies[i + 1] + 1`.

#### 4. Compute the Result:

- Sum up the values in the `candies` array to get the minimum number of candies required.

## Algorithm Complexity

### Time Complexity:

- **O(n):**
  - Two linear passes through the `ratings` array.
  - Summing the `candies` array takes O(n).

### Space Complexity:

- **O(n):**
  - Additional space for the `candies` array.

## Example Walkthrough

### Input: `ratings = [1, 0, 2]`

#### 1. Initialize Candies:

- `candies = [1, 1, 1]` (each child starts with 1 candy).

#### 2. Left-to-Right Pass:

- At `i = 1`: `ratings[1] < ratings[0]`, no change → `candies = [1, 1, 1]`.
- At `i = 2`: `ratings[2] > ratings[1]`, update `candies[2] = candies[1] + 1` → `candies = [1, 1, 2]`.

#### 3. Right-to-Left Pass:

- At `i = 1`: `ratings[1] > ratings[2]`, no change → `candies = [1, 1, 2]`.
- At `i = 0`: `ratings[0] > ratings[1]`, update `candies[0] = candies[1] + 1` → `candies = [2, 1, 2]`.

#### 4. Sum Up Candies:

- Total candies = `2 + 1 + 2 = 5`.

### Output: `5`

## Why is this Solution Optimal?

### Efficient Time Complexity:

- The solution processes the array in **O(n)** time with two linear passes and one final summation.

### Simplicity:

- The two-pass approach is intuitive and ensures all conditions are satisfied.

### Space Efficiency:

- The use of a single `candies` array ensures the solution uses only **O(n)** additional space.
