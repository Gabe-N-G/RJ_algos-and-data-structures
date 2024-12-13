# Majority Element

Link: [Majority Element](https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given an array `nums` of size `n`, return the majority element.

The **majority element** is the element that appears **more than** ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

---

### Examples

#### Example 1

```javascript
Input: nums = [3, 2, 3];
Output: 3;
```

#### Example 2

```javascript
Input: nums = [2, 2, 1, 1, 1, 2, 2];
Output: 2;
```

### Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // code goes here
};
```

<details> <summary>Hint 1</summary> A straightforward solution would involve using a hash map to count the frequency of each element. </details> <details> <summary>Hint 2</summary> If you are aiming for \( O(1) \) space complexity, consider the **Boyer-Moore Voting Algorithm**. </details>

## Approach

There are two main approaches to solving this problem:

---

### 1. **Hash Map Approach (Possible Solution):**

This approach uses a hash map to count the frequency of each element. The first element to exceed the threshold of \( n / 2 \) occurrences is the majority element.

#### Steps:

1. Initialize an empty hash map (object) `counter`.
2. Iterate through the array, adding each element to the map and incrementing its count.
3. If any element's count exceeds \( n / 2 \), return that element immediately.

#### Time Complexity:

- \( O(n) \)  
  We iterate through the array once to populate the hash map.

#### Space Complexity:

- \( O(n) \)  
  We use a hash map to store the counts of each unique element.

---

### 2. **Boyer-Moore Voting Algorithm (Optimal Solution):**

This approach achieves \( O(n) \) time complexity and \( O(1) \) space complexity. It relies on the idea that the majority element appears more than ⌊n / 2⌋ times, so it will dominate any "vote".

#### Steps:

1. Initialize two variables:
   - `candidate` (to track the potential majority element).
   - `count` (to track the "votes").
2. Iterate through the array:
   - If `count` is 0, set the current element as the `candidate` and reset `count` to 1.
   - If the current element is the same as `candidate`, increment `count`.
   - Otherwise, decrement `count`.
3. Return the `candidate`.

#### Time Complexity:

- \( O(n) \)  
  We traverse the array once.

#### Space Complexity:

- \( O(1) \)  
  We use constant extra space.

---

### Why is the Boyer-Moore Algorithm Optimal?

1. **Efficiency:**  
   It scans the array once, achieving \( O(n) \) time complexity.

2. **Space-saving:**  
   It does not require additional storage, achieving \( O(1) \) space complexity.

3. **Guaranteed Accuracy:**  
   The problem guarantees that a majority element always exists, so this approach is reliable.
