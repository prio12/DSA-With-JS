function findMaxAverage(nums, k) {
  let sum = 0;
  let bestSum;

  for (let i = 0; i < k; i++) {
    sum = sum + nums[i];
    bestSum = sum;
  }

  for (let i = k; i < nums.length; i++) {
    let newSum = sum - nums[i - k] + nums[i];
    sum = newSum;
    if (newSum > bestSum) {
      bestSum = newSum;
    }
  }
  return bestSum / k;
}

console.log(findMaxAverage([0, 4, 0, 3, 2], 1));
