# Longest Consecutive Sequence

**Link:** [Leetcode - Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Medium

## The Ask

Given an **unsorted** array of integers `nums`, return the length of the **longest consecutive elements sequence**.

You must write an algorithm that runs in **O(n) time**.

## Examples

### Example 1

**Input**:

```javascript
nums = [100, 4, 200, 1, 3, 2];
// Output: 4
```

**Explanation**: The longest consecutive sequence is `[1, 2, 3, 4]`. Its length is `4`.

### Example 2

**Input**:

```javascript
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9
```

## Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // Code goes here
};
```

<details> <summary>Hint 1: Sorting vs Hashmap</summary> Sorting would give `O(n log n)`, but we need `O(n)`. A **hashset** allows quick lookups. </details> <details> <summary>Hint 2: Finding the Start of a Sequence</summary> Instead of checking all numbers, only check numbers that **are the start** of a sequence (i.e., `num - 1` is not in the set). </details> <details> <summary>Hint 3: Expanding Consecutive Sequences</summary> For each starting number, keep counting forward while `num + 1` exists in the set. Track the max length. </details>

## Approach: Hashmap to Track Sequences

### **Key Observations**

✅ Sorting gives **O(n log n)**, but we need **O(n)**.  
✅ A **hashmap (object)** allows quick lookups **O(1) on average**.  
✅ Instead of checking all numbers, only start counting when the number is the **start of a sequence** (`num - 1` is not in the hashmap).

## **Steps**

1. **Create a Hashmap:** Store all numbers in an object (`numMap`) to allow **O(1) lookups**.
2. **Iterate Over `nums`:**
   - If `num - 1` exists in `numMap`, **skip** (it’s not the start of a sequence).
   - Otherwise, **expand forward** while `num + 1` exists in `numMap`.
   - Track the **max sequence length**.
3. **Return the Longest Length Found.**

## **Algorithm Complexity**

- **Time Complexity:** **O(n)**
  - Each number is processed **at most twice** (once when inserted into the hashmap and once when counting forward).
- **Space Complexity:** **O(n)**
  - We store all numbers in an object (`numMap`), using **O(n) space**.

## Example Walkthrough

**Input**:

```javascript
nums = [100, 4, 200, 1, 3, 2];
// Output: 4
```

### **Processing Table**

| num | num - 1 Exists? | Expand Forward?        | Sequence Found | Max Length |
| --- | --------------- | ---------------------- | -------------- | ---------- |
| 100 | ❌ No           | ✅ No sequence         | N/A            | 1          |
| 4   | ❌ No           | ✅ Yes → 4 → 3 → 2 → 1 | [1,2,3,4]      | 4          |
| 200 | ❌ No           | ✅ No sequence         | N/A            | 4          |
| 1   | ✅ Yes (skip)   | ❌ No                  | -              | 4          |
| 3   | ✅ Yes (skip)   | ❌ No                  | -              | 4          |
| 2   | ✅ Yes (skip)   | ❌ No                  | -              | 4          |

## **Why is This Solution Optimal?**

✅ **O(n) Time Complexity** → No sorting, only **O(1) lookups** in the hashmap.  
✅ **Memory Efficient** → Uses **O(n) space**, but avoids extra sorting or recursion overhead.  
✅ **Handles Edge Cases** → Empty array, single elements, and large numbers.

🚀 **Using a hashmap ensures an efficient O(n) solution!**
