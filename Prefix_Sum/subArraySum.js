//! 560. Subarray Sum Equals K
// !Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}

console.log(subarraySum([1, -1, 0], 0));
