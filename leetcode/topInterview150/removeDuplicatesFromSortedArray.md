# Remove Duplicates from Sorted Array

Link: [Remove Duplicates From Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

### Requirements

1. Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially.
2. The remaining elements of `nums` beyond `k` are not important.
3. Return `k` (the number of unique elements).

### Custom Judge

The judge will test the solution with the following code:

```java
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

#### Example 1

```javascript
Input:
nums = [1, 1, 2]
Output:
k = 2, nums = [1, 2, _]
Explanation:
Your function should return k = 2, with the first two elements of nums being [1, 2]. It does not matter what you leave beyond the returned k (hence they are underscores).
```

#### Example 2

```javascript
Input:
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output:
k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
Explanation:
Your function should return k = 5, with the first five elements of nums being [0, 1, 2, 3, 4]. It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // code goes here
};
```

<details>
<summary>Hint 1</summary>

In this problem, the key point to focus on is the input array being sorted. As far as duplicate elements are concerned, what is their positioning in the array when the given array is sorted? If we know the position of one of the elements, do we also know the positioning of all the duplicate elements?
</details>

<details>
<summary>Hint 2</summary>

We need to modify the array in-place and the size of the final array would potentially be smaller than the size of the input array. So, we ought to use a two-pointer approach here. One pointer would keep track of the current element in the original array and another pointer for just the unique elements.
</details>

<details>
<summary>Hint 3</summary>

Essentially, once an element is encountered, you simply need to bypass its duplicates and move on to the next unique element.
</details>

## Approach

### Understanding the Problem:

- The array is sorted, so all duplicate elements are grouped together.
- We need to retain only the unique elements, starting from the beginning of the array.
- We don't need to worry about the elements beyond the position `k`, which are ignored.

### Two Pointers:

- Use one pointer (`i`) to track the current unique element's position.
- Use another pointer (`j`) to iterate through the array.
- Start both pointers at the beginning. Increment the `j` pointer as you scan the array, and when you find a new unique element, move it to the next position indicated by `i`.

### Algorithm:

1. Initialize `i = 0` to keep track of the last unique position.
2. Traverse the array with `j` (starting from index 1).
3. Whenever `nums[j]` is different from `nums[i]`, increment `i` and update `nums[i] = nums[j]`.
4. At the end, `i + 1` will give you the number of unique elements (since the array is zero-indexed).

### Time Complexity:

- Traversing the array once: \( O(n) \).
- Space complexity is \( O(1) \), as we're modifying the array in-place.