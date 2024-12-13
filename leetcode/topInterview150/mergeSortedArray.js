/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function (nums1, m, nums2, n) {
  // Pointers (3 total)
  let p1 = m - 1; // Pointer for the last valid element in nums1 (non-zero values)
  let p2 = n - 1; // Pointer for the last element in nums2
  let end = m + n - 1; // Pointer for the last position in nums1

  // Merge nums1 and nums2 - injection starts at end of nums1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[end] = nums1[p1];
      p1--;
    } else {
      nums1[end] = nums2[p2];
      p2--;
    }

    end--;
  }

  // If there are any remaining elements in nums2, place them in order
  while (p2 >= 0) {
    nums1[end] = nums2[p2];
    p2--;
    end--;
  }
};
