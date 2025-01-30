# Happy Number

**Link:** [Happy Number - LeetCode](https://leetcode.com/problems/happy-number/)

**Difficulty:** Easy

## **The Ask**

Write an algorithm to determine if a number `n` is happy.

A **happy number** is defined by the following process:

1. Start with any positive integer.
2. Replace the number with the **sum of the squares of its digits**.
3. Repeat the process until the number:
   - Equals `1` (which makes it happy), OR
   - Loops endlessly in a cycle that **does not include** `1` (making it unhappy).
4. Return `true` if `n` is a happy number, otherwise return `false`.

## **Examples**

### **Example 1**

#### **Input:**

```javascript
n = 19;
```

Output: `true`

```
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1 → Happy Number ✅
```

### **Example 2**

#### **Input:**

```javascript
n = 2;
```

Output: `false`

```
2² = 4
4² = 16
1² + 6² = 37
3² + 7² = 58
5² + 8² = 89
8² + 9² = 145
1² + 4² + 5² = 42
4² + 2² = 20
2² + 0² = 4 (Cycle Detected 🔄) → Unhappy Number ❌
```

## Setup

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Try simulating the process by continuously replacing `n` with the sum of the squares of its digits. </details> <details> <summary>Hint 2</summary> If `n` ever becomes `1`, it is a happy number. </details> <details> <summary>Hint 3</summary> If you detect a repeated number (cycle), it means `n` is stuck in an endless loop. </details>

## **Approach: Hashmap to Detect Cycles**

### **Key Observations**

- The process of squaring and summing digits **eventually loops** if `n` is not happy.
- We can detect cycles using a **hashmap (object)** to track visited numbers.
- If we **see the same number again**, a cycle has been found, meaning `n` is unhappy.
- If `n` reaches `1`, it is happy.

## **Steps**

1. **Initialize a hashmap (`seen`)** to track previously encountered numbers.
2. **Loop while `n` is not 1**:
   - Compute the **sum of the squares** of the digits of `n`.
   - If the new `n` is already in `seen`, return `false` (cycle detected).
   - Otherwise, store `n` in `seen` and continue.
3. **Return `true` if `n` reaches `1`**.

## **Algorithm Complexity**

### **Time Complexity:**

- **O(log n)** → The number of digits in `n` is at most `log n`, and we process each digit.
- This ensures an efficient and bounded number of steps.

### **Space Complexity:**

- **O(log n)** → The `seen` hashmap stores previously visited numbers.

## **Example Walkthrough**

### **Input:** `n = 19`

| `n` | Digits Squared     | New `n` | Seen Hashmap (`seen`) |
| --- | ------------------ | ------- | --------------------- |
| 19  | `1² + 9² = 82`     | 82      | `{19: true}`          |
| 82  | `8² + 2² = 68`     | 68      | `{19, 82}`            |
| 68  | `6² + 8² = 100`    | 100     | `{19, 82, 68}`        |
| 100 | `1² + 0² + 0² = 1` | 1       | `{19, 82, 68, 100}`   |

✅ **Reached `1`, so `n = 19` is a Happy Number!**

---

## **Why is This Solution Optimal?**

✅ **Efficient Time Complexity (O(log n))** → The number of digits in `n` is small, ensuring quick computation.  
✅ **Space-Efficient (O(log n))** → We store only a few numbers to detect cycles.  
✅ **Prevents Infinite Loops** → By tracking numbers in a hashmap, we detect cycles early.  
✅ **Handles Edge Cases** → Works for small values, large numbers, and cases where `n = 1`.

🚀 **Using a hashmap prevents infinite loops and ensures an optimal solution!**
