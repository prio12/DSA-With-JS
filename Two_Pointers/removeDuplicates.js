function removeDuplicates(nums) {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[left] = nums[right];
    } else {
      left = left + 1;
    }
  }
}

console.log(removeDuplicates([1, 1, 2]));

//Time Complexity - O(n)
//Space complexity - O(1) // in place
