function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  let temp;

  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left = left + 1;
    right = right - 1;
  }
  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

function removeDuplicates(nums) {}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
