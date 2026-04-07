function intersection(nums1, nums2) {
  let seen = new Set();
  let result = new Set();

  for (let num of nums1) {
    seen.add(num);
  }

  for (let num of nums2) {
    if (seen.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
