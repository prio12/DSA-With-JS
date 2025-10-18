//! Problem: Given an sorted array of elements and a target element, find the index of the target element in the array.
//! If the target element is not present, return -1.

function binarySearch(arr, target) {
  let left = 0; //! 1st step : 0 //!2nd step : 2 // 3rd step: 3
  let right = arr.length - 1; //!1st step : 3

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); //! 1st step 1 //!2nd step : 2 //3rd step 3
    const middleElement = arr[mid]; //! 3 //!5 //7
    if (target === middleElement) {
      return mid;
    }
    if (target > middleElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([-2, 3, 5, 7], -2));

//! Given a sorted array, find the index of the first occurrence of the target element. If it doesn’t exist, return -1
//* Input: arr = [2, 3, 4, 4, 6,6, 8], target = 4
//* Output: 1

// Return index of the first occurrence of target in a sorted array.
// If not present, return -1.
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      result = mid;
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// quick tests
// console.log(firstOccurrence([2, 4, 4, 4, 6, 8], 4)); // 1
// console.log(firstOccurrence([1, 2, 3, 3, 3, 4, 5], 3)); // 2
// console.log(firstOccurrence([0, 1, 1, 2, 2, 3, 5, 6, 7], 1));

// console.log(firstOccurrence([1, 2, 3, 4, 5], 6)); // -1
// console.log(firstOccurrence([], 5)); // -1
console.log(firstOccurrence([5, 5, 5, 5], 5)); // 0

//initially left = 0, right = 8, mid = 4(2),

//1st loop  => 1st block e dhukbe na = > 2nd block eo dhukbe na => 3rd block e dhukbe => right = 4-1 = 3
//2nd loop => I have (left = 0, right = 3 , result = -1, mid = 1[1] ) => 1st block e dhukbe => result = 1[1] , right = 1 -1 = 0

//3rd loop => I have (left = 0, right = 0, result = 1 , mid = 0+0/2 = 0[0]) => 1st block e dhukbe na => 2nd block e dhukbe  =>  left = 0 + 1 = 1

//4th loop = > I have (left = 1, right = 0, result = -1, ) => since right = 1 is less than left = 2 (so the loop will break)
