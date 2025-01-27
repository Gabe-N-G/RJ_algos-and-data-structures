# Minimum Window Substring

**Link:** [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150)

**Difficulty:** Hard

## The Ask

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

## Examples

### Example 1

```javascript
Input: (s = "ADOBECODEBANC"), (t = "ABC");
Output: "BANC";
```

**Explanation**:
The substring `"BANC"` includes all characters `'A'`, `'B'`, and `'C'` from `t` with the smallest window.

### Example 2

```javascript
Input: (s = "a"), (t = "a");
Output: "a";
```

**Explanation**:
The entire string `s` is the minimum window.

### Example 3

```javascript
Input: (s = "a"), (t = "aa");
Output: "";
```

**Explanation**:
Both `'a'`s from `t` must be included in the window. Since the largest window of `s` only has one `'a'`, return an empty string.

## Setup

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Code goes here
};
```

<details>
<summary>Hint 1</summary>
Use the **sliding window technique** to dynamically adjust the size of the substring while traversing the string `s`.
</details>

<details>
<summary>Hint 2</summary>
Maintain a frequency map of the characters in `t`. This will help track the required characters in the current window.
</details>

<details>
<summary>Hint 3</summary>
Use two pointers, `left` and `right`, to define the current window. Expand the `right` pointer to include characters, and contract the `left` pointer to minimize the window once it contains all the required characters.
</details>

<details>
<summary>Hint 4</summary>
Keep track of the number of unique characters in `t` that have been completely matched in the current window using a `formed` counter. Only shrink the window when all required characters are matched.
</details>

<details>
<summary>Hint 5</summary>
To find the smallest window, update the result whenever a valid window is found and then continue contracting the window further.
</details>

## Approach: Sliding Window

### Key Observations:

#### Sliding Window Technique:

- Use two pointers (`left` and `right`) to define the current window.
- Expand the `right` pointer to include characters in the window.
- Contract the `left` pointer to minimize the window while maintaining validity.

#### Frequency Count:

- Maintain a frequency map (`tFreq`) for characters in `t`.
- Use a secondary frequency map (`windowFreq`) to count characters in the current window.

#### Valid Window:

- A window is valid if all characters in `tFreq` are covered by `windowFreq` (with the same or greater frequency).

### Steps:

#### Initialize Frequency Maps:

1. Create a `tFreq` map for `t` to store the frequency of each character.
2. Use a `windowFreq` map for the current window in `s`.

#### Sliding Window:

1. Use two pointers, `left` and `right`, starting at the beginning of `s`.
2. Expand the `right` pointer to include characters in the window.
3. Check if the window is valid:
   - If valid, try contracting the window by incrementing `left` to minimize its size.
   - Keep track of the smallest valid window found.

#### Return Result:

- If a valid window was found, return the substring of `s` corresponding to the smallest window.
- Otherwise, return an empty string.

### Algorithm Complexity

#### Time Complexity:

- **O(m + n):**
  - Expanding and contracting the window involves processing each character in `s` at most once.
  - Constructing `tFreq` requires processing each character in `t`.

#### Space Complexity:

- **O(n + u):**
  - **O(n):** For the `tFreq` and `windowFreq` maps (where `n` is the length of `t`).
  - **O(u):** For the unique characters in `s`.

### Example Walkthrough

#### Input: `s = "ADOBECODEBANC"`, `t = "ABC"`

#### Initialize Variables:

- `tFreq = { A: 1, B: 1, C: 1 }`
- `windowFreq = {}`
- `left = 0`, `right = 0`, `formed = 0`, `required = 3`.

#### Sliding Window:

1. Expand the `right` pointer and update `windowFreq`.
2. Once all characters are matched (`formed === required`), contract the `left` pointer to minimize the window.

#### Step-by-Step Execution:

- **`right = 0:`** Add `'A'` → `windowFreq = { A: 1 }`, `formed = 1`.
- **`right = 1:`** Add `'D'` → `windowFreq = { A: 1, D: 1 }`.
- **`right = 2:`** Add `'O'` → `windowFreq = { A: 1, D: 1, O: 1 }`.
- **`right = 3:`** Add `'B'` → `windowFreq = { A: 1, D: 1, O: 1, B: 1 }`, `formed = 2`.
- **`right = 4:`** Add `'E'` → `windowFreq = { A: 1, D: 1, O: 1, B: 1, E: 1 }`.
- **`right = 5:`** Add `'C'` → `windowFreq = { A: 1, D: 1, O: 1, B: 1, E: 1, C: 1 }`, `formed = 3`.
  - Valid window `"ADOBEC"` → Update `result = "ADOBEC"`.
  - Contract the window from `left` to further minimize.
- **Output:** Smallest valid window is `"BANC"`.

### Why is This Solution Optimal?

#### Efficiency:

- The sliding window ensures each character is processed at most twice (once when expanding and once when contracting).

#### Space-Efficient:

- Uses frequency maps and counters without additional data structures.

#### Handles Edge Cases:

- Works for:
  - Single-character strings.
  - Strings shorter than `t`.
  - Strings with duplicates in `t`.
