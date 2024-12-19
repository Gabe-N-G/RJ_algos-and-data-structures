/**
 * @param {number[]} citations
 * @return {number}
 */
// Approach 1: Sorting Solution
const hIndex = function (citations) {
  // Sort citations in descending order (largest to smallest)
  citations.sort((a, b) => b - a);

  let h = 0;

  // Traverse the sorted array
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h++; // Increment h-index if the condition holds
    } else {
      break; // Stop if the condition is not met
    }
  }

  return h; // Return the final h-index
};

console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3
console.log(hIndex([1, 3, 1])); // Output: 1
console.log(hIndex([0, 0, 0])); // Output: 0
console.log(hIndex([10, 8, 5, 4, 3])); // Output: 4
console.log(hIndex([1])); // Output: 1
console.log(hIndex([0])); // Output: 0

// Approach 2: Bucket Sort Solution
// const hIndex = function (citations) {
//   const n = citations.length;
//   const bucket = Array(n + 1).fill(0);

//   // Fill the bucket
//   for (let citation of citations) {
//     if (citation >= n) {
//       bucket[n]++;
//     } else {
//       bucket[citation]++;
//     }
//   }

//   // Calculate h-index
//   let total = 0;
//   for (let i = n; i >= 0; i--) {
//     total += bucket[i];
//     if (total >= i) {
//       return i; // h-index found
//     }
//   }

//   return 0; // Default case
// };
