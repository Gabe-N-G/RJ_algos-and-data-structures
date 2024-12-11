# Remove Element

Link: [Remove Element](https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are **not equal to `val`**.

---

### Requirements:

1. Change the array `nums` such that the first `k` elements of `nums` contain the elements which are **not equal to `val`**.
2. The remaining elements of `nums` are not important and can be ignored.
3. Return `k`, where `k` is the number of elements in `nums` that are **not equal to `val`**.

---

### Examples

#### Example 1

```javascript
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation:
Your function should return `k = 2`, with the first two elements of `nums` being `2`.
It does not matter what you leave beyond the returned `k` (hence they are underscores).
```

#### Example 2

```javascript
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation:
Your function should return `k = 5`, with the first five elements of `nums` containing `0, 0, 1, 3, 4`.
Note that the order of these elements can be arbitrary.
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // code goes here
};
```

<details> <summary>Hint 1</summary> The problem statement clearly asks us to modify the array in-place and it also says that the element beyond the new length of the array can be anything. Given an element, we need to remove all the occurrences of it from the array. We don't technically need to remove that element per se, right? </details> <details> <summary>Hint 2</summary> We can move all the occurrences of this element to the end of the array. Use two pointers! </details> <details> <summary>Hint 3</summary> Yet another direction of thought is to consider the elements to be removed as non-existent. In a single pass, if we keep copying the visible elements in-place, that should also solve this problem for us. </details>

## Approach

We need to modify the array in-place, removing all occurrences of `val` while keeping the rest of the elements in the front of the array. We can solve this efficiently using the **two-pointer technique**.

### Key Observations:

1. We don't need to "delete" elements. Instead, we can overwrite the unwanted elements (`val`) with elements that are **not equal** to `val`.
2. By maintaining a "slow pointer", we can keep track of where to place the next valid element.

---

### Steps:

1. Initialize a pointer `slow` to track the position where the next valid (non-`val`) element should be placed.
2. Traverse the array `nums` with a pointer `fast`:
   - If `nums[fast]` is **not equal** to `val`, copy `nums[fast]` to `nums[slow]` and increment `slow`.
   - Otherwise, skip that element.
3. Once the traversal is complete, the value of `slow` will represent the count of elements that are **not equal** to `val`.
4. Return `slow`.

---

### Algorithm Complexity:

- **Time Complexity:** \( O(n) \)  
  We traverse the array once, where \( n \) is the size of the array.

- **Space Complexity:** \( O(1) \)  
  We use constant extra space, modifying the array in-place.
