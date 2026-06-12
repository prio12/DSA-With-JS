function subarraySum(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let s = i; s <= j; s++) {
        sum = sum + arr[s];
      }
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(subarraySum([1, 1, 1], 2));
