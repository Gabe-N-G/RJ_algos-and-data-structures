# 3Sum

Link: [3Sum](https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that:

1. `i != j`, `i != k`, and `j != k`.
2. `nums[i] + nums[j] + nums[k] == 0`.

**Notice:** The solution set must **not** contain duplicate triplets.

## Examples

### Example 1

```javascript
Input: nums = [-1, 0, 1, 2, -1, -4];
Output: [
  [-1, -1, 2],
  [-1, 0, 1],
];
```

**Explanation**:

- Triplets that sum to `0`:
  - `nums[0] + nums[1] + nums[2] = -1 + 0 + 1 = 0`
  - `nums[0] + nums[3] + nums[4] = -1 + 2 + (-1) = 0`
- Distinct triplets: `[-1, -1, 2]` and `[-1, 0, 1]`.

### Example 2

```javascript
Input: nums = [0, 1, 1];
Output: [];
```

**Explanation**:
The only possible triplet does not sum up to `0`.

### Example 3

```javascript
Input: nums = [0, 0, 0];
Output: [[0, 0, 0]];
```

**Explanation**:
The only triplet sums to `0`.

## Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Codes goes here
};
```

<details> <summary>Hint 1</summary> Sort the array and use the two-pointer approach to efficiently find the triplets. </details> <details> <summary>Hint 2</summary> Avoid duplicates by skipping over repeated values during iteration. </details> <details> <summary>Hint 3</summary> Iterate through the array, fixing one element, and use two pointers to find the other two elements that sum to `0`. </details>

## Approach

### Key Observations:

1. **Sorting the Array**:
   - Sorting helps simplify the problem by ensuring that duplicates are adjacent.
   - This also allows for efficient use of the **two-pointer technique**.
2. **Three Pointers**:

   - Iterate through the array, fixing one element (`nums[i]`).
   - Use two pointers (`left` and `right`) to find pairs of numbers such that their sum equals `-nums[i]`.

3. **Avoiding Duplicates**:
   - Skip duplicate elements for the fixed element and during the two-pointer traversal.

### Steps:

#### 1. Sort the Input Array:

- Sort `nums` in non-decreasing order.
- This simplifies the two-pointer logic and helps avoid duplicates.

#### 2. Iterate Through the Array:

- For each `i` from `0` to `nums.length - 3`:
  - If `nums[i]` is the same as the previous number, skip to avoid duplicate triplets.

#### 3. Two-Pointer Approach:

- Set `left = i + 1` and `right = nums.length - 1`.
- While `left < right`:
  - Calculate the sum: `currentSum = nums[i] + nums[left] + nums[right]`.
  - If `currentSum == 0`:
    - Add the triplet `[nums[i], nums[left], nums[right]]` to the result.
    - Move both pointers inward, skipping duplicates.
  - If `currentSum < 0`, increment `left` to increase the sum.
  - If `currentSum > 0`, decrement `right` to decrease the sum.

#### 4. Return Result:

- After iterating through the array, return the list of triplets.

### Algorithm Complexity

#### Time Complexity:

- **O(n^2):**
  - Sorting takes **O(n log n)**.
  - Iterating through the array with a two-pointer approach takes **O(n^2)** in the worst case.

#### Space Complexity:

- **O(1):**
  - Apart from the result list, no additional space is used.

## Example Walkthrough

### Input: `nums = [-1,0,1,2,-1,-4]`

#### Step 1: Sort the Array:

- `nums = [-4, -1, -1, 0, 1, 2]`.

#### Step 2: Iterate Through the Array:

- **For `i = 0` (`nums[i] = -4`):**

  - `left = 1`, `right = 5`.
  - Sum: `-4 + (-1) + 2 = -3` → Increment `left`.
  - Sum: `-4 + 0 + 2 = -2` → Increment `left`.
  - Sum: `-4 + 1 + 2 = -1` → Increment `left`.

- **For `i = 1` (`nums[i] = -1`):**

  - `left = 2`, `right = 5`.
  - Sum: `-1 + (-1) + 2 = 0` → Add `[-1, -1, 2]`.
  - Move pointers inward and skip duplicates.
  - `left = 3`, `right = 4`.
  - Sum: `-1 + 0 + 1 = 0` → Add `[-1, 0, 1]`.

- **For `i = 2` (`nums[i] = -1`):**
  - Skip as it is a duplicate of the previous `nums[i]`.

#### Final Output:

- `[[ -1, -1, 2 ], [ -1, 0, 1 ]]`.

## Why is this Solution Optimal?

### Two-Pointer Approach:

- Sorting the array and using two pointers reduces the complexity from **O(n^3)** (brute force) to **O(n^2)**.

### Avoids Duplicates:

- Skipping duplicates ensures the solution set contains only unique triplets.

### Space Efficiency:

- No additional data structures are used apart from the result list, making the space complexity **O(1)**.
