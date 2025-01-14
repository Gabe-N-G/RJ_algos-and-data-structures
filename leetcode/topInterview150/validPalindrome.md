# Valid Palindrome

Link: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Easy

## The Ask

Given a string `s`, determine if it is a **palindrome** after:

1. Converting all uppercase letters into lowercase.
2. Removing all non-alphanumeric characters.

A **palindrome** reads the same forward and backward.

## Examples

### Example 1

```javascript
Input: s = "A man, a plan, a canal: Panama";
Output: true;
```

**Explanation**:
After preprocessing, `s` becomes `"amanaplanacanalpanama"`, which is a palindrome.

### Example 2

```javascript
Input: s = "race a car";
Output: false;
```

**Explanation**:
After preprocessing, `s` becomes `"raceacar"`, which is not a palindrome.

### Example 3

```javascript
Input: s = " ";
Output: true;
```

**Explanation**:
An empty string `""` (after removing non-alphanumeric characters) is considered a palindrome.

## Setup

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Use two pointers to compare characters from both ends of the string. </details> <details> <summary>Hint 2</summary> Ignore non-alphanumeric characters by skipping them using the pointers. </details> <details> <summary>Hint 3</summary> Remember to convert characters to lowercase for case-insensitivity. </details>

## Approach

### Key Observations:

1. The problem can be efficiently solved using a **two-pointer approach**.
2. The left pointer starts at the **beginning** of the string, and the right pointer starts at the **end**.
3. Both pointers move toward the center while skipping non-alphanumeric characters.
4. At each step, check if the characters at the left and right pointers are equal:
   - If they are not, the string is **not** a palindrome.
   - If they are, continue moving the pointers inward.
5. If the pointers cross each other, the string is a palindrome.

### Steps:

#### 1. Initialize Pointers:

- `left` at the start of the string (`0`).
- `right` at the end of the string (`s.length - 1`).

#### 2. Traverse the String:

- While `left` is less than `right`:
  - Skip non-alphanumeric characters for both pointers.
  - Compare the characters at `left` and `right`.
  - If they are not equal, return `false`.
  - Otherwise, move both pointers inward.

#### 3. Return Result:

- If the loop completes without returning `false`, the string is a palindrome.

## Algorithm Complexity

### Time Complexity:

- **O(n):**  
  The two-pointer approach ensures that each character is processed at most once.

### Space Complexity:

- **O(1):**  
  No additional space is used apart from a few variables.

## Example Walkthrough

### Input: `s = "A man, a plan, a canal: Panama"`

#### Step 1: Initialize Pointers

- `left = 0`, `right = 29`.

#### Step 2: Traverse the String

- **Skip non-alphanumeric characters:**
  - `left = 0` → `'A'` (valid).
  - `right = 29` → `'a'` (valid).
- Compare `'A'` and `'a'` → Equal (case-insensitive).
- Move `left = 1`, `right = 28`.

- **Repeat the process for the entire string:**
  - Skip and compare characters at each step.
  - Continue until `left >= right`.

#### Step 3: Return Result

- All characters matched → Return `true`.

## Why is this Solution Optimal?

### Efficiency:

- The two-pointer approach ensures **linear time complexity** with minimal overhead.

### Space Efficiency:

- No additional space is used, as characters are processed **in-place**.

### Handles Edge Cases Gracefully:

- Empty strings or strings with only spaces are considered valid palindromes.
- Non-alphanumeric characters are skipped correctly.

### Simple Implementation:

- The logic is straightforward and easy to understand.
