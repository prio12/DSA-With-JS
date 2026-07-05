function findMaxLength(nums) {
  let transformedArr = [];

  for (let num of nums) {
    if (num === 0) {
      transformedArr.push(-1);
    } else {
      transformedArr.push(1);
    }
  }

  let map = new Map();
  map.set(0, -1);
  let max = 0;
  let prefixSum = 0;

  for (let i = 0; i < transformedArr.length; i++) {
    prefixSum += transformedArr[i];

    if (map.has(prefixSum)) {
      max = Math.max(max, i - map.get(prefixSum));
    } else [map.set(prefixSum, i)];
  }
  return max;
}
console.log(findMaxLength([0, 1]));
