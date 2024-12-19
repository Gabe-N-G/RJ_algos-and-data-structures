# Product of Array Except Self

Link: [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150)

Difficulty: Medium

## The Ask

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

### Constraints

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
- You **must not use division**.
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) extra space (excluding the output array).

## Examples

### Example 1

```javascript
Input: nums = [1, 2, 3, 4];
Output: [24, 12, 8, 6];
```

### Example 2

```javascript
Input: nums = [-1, 1, 0, -3, 3];
Output: [0, 0, 9, 0, 0];
```

## Setup

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Code goes here
};
```

<details> <summary>Hint 1</summary> Think about how you can efficiently utilize **prefix** and **suffix products** to calculate the product of all elements except `nums[i]` for each index. Can you pre-compute the prefix and suffix products in linear time to avoid redundant calculations? </details> <details> <summary>Hint 2</summary> To minimize additional space usage, consider how you might reuse the input array or the output array to store intermediate results during the calculation. </details>

## Approach

To solve this problem efficiently without using division, we can use a **two-pass prefix and suffix product approach**:

### Prefix Pass:

- Create an output array where each element at index `i` contains the product of all elements to the left of `i` in the input array.
- The first element will have no elements to the left, so its prefix product is `1`.

### Suffix Pass:

- Use a running variable (`suffix`) to compute the product of all elements to the right of `i`.
- Multiply the suffix product with the current value in the output array, which already contains the prefix product.

### Output:

- By combining prefix and suffix products in this way, we ensure that each element in the output array contains the product of all elements in the input array except itself.

## Steps

### Initialization:

- Create an output array `answer` of size `n` initialized with `1`.

### Prefix Pass:

- Traverse the input array `nums` from left to right.
- Keep a running product (`prefix`) to track the product of all elements to the left of the current index.
- At each index `i`, set `answer[i] = prefix` and update `prefix *= nums[i]`.

### Suffix Pass:

- Traverse the input array `nums` from right to left.
- Keep a running product (`suffix`) to track the product of all elements to the right of the current index.
- At each index `i`, multiply `answer[i]` by `suffix` and update `suffix *= nums[i]`.

### Return the Output Array:

- The `answer` array now contains the desired products.

## Algorithm Complexity

### Time Complexity:

- **O(n)**  
  Two linear traversals of the array are required (one for prefix and one for suffix).

### Space Complexity:

- **O(1)** (excluding the output array)  
  Only a few variables are used to store intermediate results (`prefix` and `suffix`).

## Example Walkthrough

### Input: `nums = [1, 2, 3, 4]`

### Prefix Pass:

1. Initialize `prefix = 1` and `answer = [1, 1, 1, 1]`.
2. Iterate through `nums`:
   - For `i = 0`: `answer[0] = prefix = 1`, then update `prefix = prefix * nums[0] = 1 * 1 = 1`.
   - For `i = 1`: `answer[1] = prefix = 1`, then update `prefix = prefix * nums[1] = 1 * 2 = 2`.
   - For `i = 2`: `answer[2] = prefix = 2`, then update `prefix = prefix * nums[2] = 2 * 3 = 6`.
   - For `i = 3`: `answer[3] = prefix = 6`, then update `prefix = prefix * nums[3] = 6 * 4 = 24`.
3. **Result after prefix pass:** `answer = [1, 1, 2, 6]`.

### Suffix Pass:

1. Initialize `suffix = 1`.
2. Iterate through `nums` in reverse:
   - For `i = 3`: `answer[3] *= suffix = 6 * 1 = 6`, then update `suffix = suffix * nums[3] = 1 * 4 = 4`.
   - For `i = 2`: `answer[2] *= suffix = 2 * 4 = 8`, then update `suffix = suffix * nums[2] = 4 * 3 = 12`.
   - For `i = 1`: `answer[1] *= suffix = 1 * 12 = 12`, then update `suffix = suffix * nums[1] = 12 * 2 = 24`.
   - For `i = 0`: `answer[0] *= suffix = 1 * 24 = 24`, then update `suffix = suffix * nums[0] = 24 * 1 = 24`.
3. **Result after suffix pass:** `answer = [24, 12, 8, 6]`.

### Output: `[24, 12, 8, 6]`

## Follow-Up

To achieve **O(1) extra space complexity**, this solution already uses only a constant amount of extra memory (`prefix` and `suffix` variables), with the `answer` array acting as the output.

## Why is this Solution Optimal?

### Efficient Time Complexity:

- Only requires two linear passes through the array, making it **O(n)**.

### Minimal Space Usage:

- Uses **O(1)** extra space (besides the output array), reusing intermediate results.

### Avoids Division:

- The algorithm avoids division operations, making it suitable for scenarios where division is restricted.
