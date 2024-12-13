# Merge Sorted Array

Link: [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

You are given two integer arrays **nums1** and **nums2**, sorted in non-decreasing order, and two integers **m** and **n**, representing the number of elements in **nums1** and **nums2** respectively.

Merge **nums1** and **nums2** into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array **nums1**. To accommodate this, **nums1** has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. **nums2** has a length of n.

#### Example 1

```javascript

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

#### Example 2

```javascript
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

#### Example 3

```javascript
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
```

> Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

### Setup:

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Code goes here
};
```

<details>
<summary>Hint 1</summary>
You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution?
</details>

<details>
<summary>Hint 2</summary>
If you simply consider one element each at a time from the two arrays and make a decision and proceed accordingly, you will arrive at the optimal solution.
</details>

## Approach
To solve this problem efficiently, we need to merge two sorted arrays, **nums1** and **nums2**, into one sorted array. Since the problem specifies that the merged result must fit into **nums1** (in-place), we can utilize its extra space (the trailing zeroes) as a buffer to accommodate elements from **nums2**.

### Key Observations

1. Both arrays are already **sorted**.
2. **nums1** has enough space (**m** + **n**), with the last n elements initialized to 0 as placeholders for the elements from **nums2**.
3. Since the merging must happen in-place, we need to utilize the buffer in **nums1** effectively.

### Approach: Three Pointers from the End
The idea is to merge from the back of the arrays:

- Start from the end of both arrays (nums1's non-zero elements and nums2).
- Compare the largest elements from both arrays and place the larger element at the end of nums1.
- This way, we avoid overwriting elements in nums1 that haven’t been compared yet.

### Steps:

1. **Initialize three pointers:**
   - `p1 = m - 1`: Points to the last valid element in `nums1`.
   - `p2 = n - 1`: Points to the last element in `nums2`.
   - `end = m + n - 1`: Points to the last position in `nums1` (where the merged element should go).

2. Compare `nums1[p1]` and `nums2[p2]`. Place the larger element at `nums1[end]` and decrement the corresponding pointer (`p1` or `p2`).

3. Decrement `end` after placing each element.

4. If `nums2` has remaining elements (and `p2 >= 0`), copy them into `nums1`.

---

### Algorithm Complexity:
- **Time Complexity:** `O(m + n)`  
  We traverse both arrays once.

- **Space Complexity:** `O(1)`  
  No extra space is used; everything is done in-place.
