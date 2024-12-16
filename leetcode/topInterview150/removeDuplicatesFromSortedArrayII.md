# Remove Duplicates from Sorted Array II

Link: [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an integer array `nums` sorted in non-decreasing order, remove some duplicates **in-place** such that each unique element appears at most **twice**. The relative order of the elements should be kept the same.

- You must modify the array in-place with `O(1)` extra memory.
- Return `k` after placing the final result in the first `k` slots of `nums`.

---

### Examples

#### Example 1

```javascript
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation:
Your function should return k = 5, with the first five elements of nums being [1, 1, 2, 2, 3]. It does not matter what you leave beyond the returned k (hence they are underscores).
```

#### Example 2

```javascript
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation:
Your function should return k = 7, with the first seven elements of nums being [0, 0, 1, 1, 2, 3, 3]. It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use a two-pointer approach. One pointer to iterate through the array and another to keep track of the position to overwrite. </details> <details> <summary>Hint 2</summary> Track how many times a particular number has been added to the array. If it's less than 2, copy it to the next valid position. </details>

## Approach

This problem can be solved efficiently using the **two-pointer technique**.

---

### Key Observations:

1. The array is sorted, so duplicates are grouped together.
2. We need to allow each unique element to appear at most **twice**.
3. Use two pointers:
   - `i` (slow pointer) to build the result array in place.
   - `j` (fast pointer) to iterate through the input array.

---

### Steps:

1. Initialize `i = 0` to point to the position where the next valid element will be written.
2. Iterate through the array with `j`:
   - If `j < 2`, always copy the element at `j` to `i` (since the first two elements are always allowed).
   - For elements beyond the first two:
     - If `nums[j]` is not equal to `nums[i - 2]`, copy `nums[j]` to `nums[i]` and increment `i`.
3. After the loop, `i` will represent the length of the modified array.
4. Return `i`.

---

### Algorithm Complexity:

- **Time Complexity:**  
  `O(n)` — We traverse the array once with the two-pointer technique.

- **Space Complexity:**  
  `O(1)` — No extra space is used apart from variables.

---

### Why is this Solution Efficient?

1. **In-Place:**  
   The solution modifies the array directly without using extra space.

2. **Two-Pointer Technique:**  
   Efficiently skips redundant duplicates while maintaining the relative order.

3. **Linear Time Complexity:**  
   Only a single traversal of the array is needed.
