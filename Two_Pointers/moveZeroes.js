function moveZeroes(nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left] = nums[i];
      left++;
    }
  }
  //   let zeroes = nums.length - left + 1;
  //   console.log(zeroes);
  let zeroes = nums.length - left;

  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
}

console.log(moveZeroes([0, 1]));

//Time Complexity - O(n)
//Space complexity - O(1) // in place
