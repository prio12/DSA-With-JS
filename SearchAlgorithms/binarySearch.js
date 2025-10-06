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

console.log(binarySearch([-2, 3, 5, 7], -2));
