# Two Sum

**Link:** [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Easy

## **The Ask**

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

**Constraints:**

- Each input has **exactly one solution**.
- You **cannot use the same element twice**.
- You may return the answer in **any order**.

## **Examples**

### **Example 1**

```javascript
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### **Example 2**

```javascript
Input: (nums = [3, 2, 4]), (target = 6);
Output: [1, 2];
```

### **Example 3**

```javascript
Input: (nums = [3, 3]), (target = 6);
Output: [0, 1];
```

## Setup

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Can you store numbers in a **hashmap** and look up complements in O(1) time? </details> <details> <summary>Hint 2</summary> Instead of checking every pair (O(n²)), try using a **single pass** with a hashmap. </details>

## Approach: Hashmap for O(n) Solution

### **Key Observations:**

- **Brute Force (O(n²))**: Checking all pairs is inefficient.
- **Optimal Approach (O(n))**:
  - Use a **hashmap** to store numbers and their indices.
  - For each number, check if its **complement** (`target - num`) exists in the hashmap.
  - If found, return the indices.

### **Steps**

1. **Initialize a hashmap (`numMap`)** to store numbers and their indices.
2. **Traverse the array (`nums`)**:
   - Calculate the **complement** (`target - num`).
   - If `complement` exists in `numMap`, return **[complement's index, current index]**.
   - Otherwise, store `num` and its index in `numMap`.
3. **Guaranteed solution**: Since only **one valid answer exists**, we can return immediately.

## **Algorithm Complexity**

### **Time Complexity:**

- **O(n)** → Single pass through the array.
- **Each lookup & insertion in hashmap is O(1)** on average.

### **Space Complexity:**

- **O(n)** → Hashmap stores at most `n` elements.

## **Example Walkthrough**

### **Input:** `nums = [2, 7, 11, 15], target = 9`

| Index | Num | Complement (target - num) | Hashmap (`numMap`) | Action                                |
| ----- | --- | ------------------------- | ------------------ | ------------------------------------- |
| 0     | 2   | 7                         | `{}`               | Store `(2 → 0)`                       |
| 1     | 7   | 2                         | `{2 → 0}`          | Found `2` in hashmap → Return `[0,1]` |

### **Output:** `[0,1]`

## **Why is This Solution Optimal?**

✅ **Single Pass (O(n))** → No need to check every pair manually.  
✅ **Space Efficient (O(n))** → Uses only a hashmap of seen numbers.  
✅ **Guaranteed Solution** → We can return immediately upon finding a match.

🚀 **Using a hashmap reduces the brute-force complexity from O(n²) to O(n)!**
