# H-Index

Link: [H-Index](https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i-th` paper, return the researcher's **h-index**.

### Definition (from Wikipedia):

The **h-index** is defined as the maximum value of `h` such that the given researcher has published **at least h papers** that have each been cited **at least h times**.

## Examples

### Example 1

```javascript
Input: citations = [3,0,6,1,5]
Output: 3
Explanation:
The researcher has 5 papers with citation counts [3, 0, 6, 1, 5].
- 3 papers have at least 3 citations each.
- The remaining 2 papers have no more than 3 citations.
Thus, the h-index is 3.
```

### Example 2

```javascript
Input: citations = [1,3,1]
Output: 1
Explanation:
The researcher has 3 papers with citation counts [1, 3, 1].
- 1 paper has at least 1 citation.
- The remaining papers have fewer than 1 citation.
Thus, the h-index is 1.
```

## Edge Cases

1. **All Citations are 0:**  
   Input: `citations = [0, 0, 0]`  
   Output: `0` (No paper has at least 1 citation).

2. **All Citations are Large:**  
   Input: `citations = [10, 8, 5, 4, 3]`  
   Output: `4` (4 papers have at least 4 citations each).

3. **Single Paper:**  
   Input: `citations = [1]`  
   Output: `1`.

4. **One Paper Without Enough Citations:**  
   Input: `citations = [0]`  
   Output: `0`.

## Setup

```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Code goes here
};
```

## Approach

This problem can be solved using two approaches: **Sorting** or **Counting Sort (Bucket Sort)**. The **sorting-based approach** is simpler and works well for the given constraints.

### Key Observations:

1. For an array of size `n`:
   - The maximum possible h-index is `n` (all papers are highly cited).
   - The minimum h-index is `0` (no paper has at least one citation).
2. By sorting the array in descending order, we can check for each paper whether it contributes to the h-index:
   - If `citations[i] >= i + 1`, the paper contributes to the h-index.
   - Otherwise, the maximum `h` is reached.

### Steps (Sorting Approach):

1. Sort the array `citations` in descending order.
2. Iterate over the sorted array:
   - Check if `citations[i] >= i + 1`:
     - If true, increment the h-index.
     - If false, break the loop (since subsequent papers cannot satisfy the condition).
3. Return the h-index.

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n log n)`  
  Sorting the array dominates the time complexity.

- **Space Complexity:**  
  `O(1)`  
  The sorting operation is in-place, and no extra space is used.

### Optimized Approach (Counting Sort / Bucket Sort):

For cases with large arrays but small citation values, **bucket sort** can optimize the solution. This approach uses an auxiliary array (buckets) to count how many papers have a specific number of citations, up to a maximum of `n`.

#### Steps:

1. Create an array `bucket` of size `n + 1` to store the count of papers with `i` citations (`i` ranges from `0` to `n`).
2. Traverse `citations` and update the bucket:
   - If `citations[i] >= n`, increment `bucket[n]` (these papers all contribute to the h-index of `n`).
   - Otherwise, increment `bucket[citations[i]]`.
3. Iterate over the bucket from right to left (largest citation count to smallest) and calculate the running total of papers.
4. Return the maximum h-index where the running total of papers is greater than or equal to the citation count.

### Complexity:

- **Time Complexity:**  
  `O(n)` for the counting sort.

- **Space Complexity:**  
  `O(n)` for the bucket array.

## Algorithm Complexity Summary:

1. **Sorting Approach:**

   - **Time Complexity:** `O(n log n)`
   - **Space Complexity:** `O(1)`

2. **Counting Sort Approach:**
   - **Time Complexity:** `O(n)`
   - **Space Complexity:** `O(n)`

## Why is this Solution Optimal?

### Sorting Approach:

1. Straightforward and intuitive.
2. Efficient for smaller arrays.

### Counting Sort Approach:

1. Optimized for cases where `n` is large but citation values are small.
2. Reduces the complexity to linear time.
