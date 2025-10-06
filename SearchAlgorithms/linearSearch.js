//! Problem: Given an array of elements and a target element, find the index of the target element in the array.
//! If the target element is not present, return -1.

// * Example:
// ? Input: arr = [10, 20, 30, 40, 50], target = 30
// ? Output: 2

// ? Input: arr = [5, 8, 12, 15], target = 7
// ? Output: -1

// * Explanation:
// * You need to check each element in the array and see if it matches the target.
// * If a match is found, return its index.
// * If no match is found after checking all elements, return -1.

const arr = [10, 20, 30, 40, 50];
const target = 10;

function findElementIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// console.log(findElementIndex(arr, target));

// * Time Complexity: O(n)
// * Space Complexity: O(1)

//! Problem Given an array of integers, find the **index of the first negative number**.
//* Return -1 if there’s no negative number.

const ar = [10, 23, 39, -3, 0];

function findNegative(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] < 0) {
      return i;
    }
  }
  return -1;
}

console.log(findNegative(ar));

// * Time Complexity: O(n)
// * Space Complexity: O(1)
