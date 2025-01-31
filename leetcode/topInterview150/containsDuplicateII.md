# Contains Duplicate II

### Link: [LeetCode 219 - Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150)

### Difficulty: Easy

## The Ask

Given an integer array `nums` and an integer `k`, return `true` **if there exist two distinct indices** `i` and `j` such that:

1. `nums[i] == nums[j]` (the numbers are the same).
2. `|i - j| <= k` (the indices are at most `k` apart).

Otherwise, return `false`.

## Examples

### Example 1

#### Input:

```javascript
(nums = [1, 2, 3, 1]), (k = 3);
```

Output: `true`

**Explanation**:

- `nums[0] = 1` and `nums[3] = 1` (duplicate found).
- The indices `0` and `3` are exactly 3 apart (`|0 - 3| = 3`).
- Since 3 <= k, return `true`.

### Example 2

#### Input:

```javascript
(nums = [1, 0, 1, 1]), (k = 1);
```

Output: `true`

**Explanation**:

- `nums[2] = 1` and `nums[3] = 1` (duplicate found).
- The indices `2` and `3` are 1 apart (`|2 - 3| = 1`).
- Since `1 <= k`, return `true`.

### Example 3

#### Input:

```javascript
(nums = [1, 2, 3, 1, 2, 3]), (k = 2);
```

Output: `false`

**Explanation**:

- The first `1` appears at index `0` and `3`, but `|0 - 3| = 3`, which is greater than `k = 2`.
- The first `2` appears at index `1` and `4`, but `|1 - 4| = 3`, which is greater than `k = 2`.
- The first `3` appears at index `2` and `5`, but `|2 - 5| = 3`, which is greater than `k = 2`.
- No valid duplicate pairs exist within `k` distance.
- Return `false`.

## Setup

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a **hashmap** to store the last seen index of each number in `nums`. </details> <details> <summary>Hint 2</summary> As you iterate, check if the number was seen before. If it was, compare the indices. </details> <details> <summary>Hint 3</summary> If `|i - j| <= k`, return `true`. Otherwise, update the stored index. </details>

## Approach: Hashmap to Track Indices

### Key Observations

- We need to track where each number was last seen.
- A hashmap (object) helps store the last seen index of each number.
- As we iterate through `nums`, check:
  - If the number exists in the hashmap.
  - If the difference between the current and last seen index is `≤ k`.

### Steps

1. **Initialize a hashmap (`numMap`)** to store the last seen index of each number.
2. **Iterate through `nums` using index `i`**:
   - Calculate `nums[i]`.
   - If `nums[i]` exists in `numMap` and `i - numMap[nums[i]] ≤ k`, return `true`.
   - Otherwise, update `numMap[nums[i]] = i`.
3. **Return `false`** if no valid pair is found.

## Algorithm Complexity

### Time Complexity:

- **O(n)** → We traverse `nums` once, and hashmap lookups are **O(1)** on average.

### Space Complexity:

- **O(n)** → We store at most `n` elements in the hashmap.

## Example Walkthrough

### **Input:** `nums = [1,2,3,1], k = 3`

| `i` | `nums[i]` | Last Seen (`numMap`) | Check Condition | Action        |
| --- | --------- | -------------------- | --------------- | ------------- | ----------- | ------------- |
| 0   | 1         | `{}`                 | No match        | Store `1 → 0` |
| 1   | 2         | `{1: 0}`             | No match        | Store `2 → 1` |
| 2   | 3         | `{1: 0, 2: 1}`       | No match        | Store `3 → 2` |
| 3   | 1         | `{1: 0, 2: 1, 3: 2}` | `               | 3 - 0         | = 3 ≤ 3` ✅ | Return `true` |

✅ **Output:** `true`

## Why is This Solution Optimal?

✅ **Efficient (O(n))** → Uses a hashmap to track indices instead of nested loops.  
✅ **Memory-Efficient (O(n))** → Only stores unique numbers' last seen indices.  
✅ **Handles Edge Cases** → Works for small and large values of `k`, duplicates at different distances.

🚀 **Using a hashmap makes this an efficient O(n) solution!**
