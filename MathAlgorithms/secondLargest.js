function secondLargest(arr) {
  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== largest) {
      secondLarge = arr[i];
    }
  }

  return secondLarge;
}

console.log(secondLargest([77, 8, 11, 6, 51, 12, 11, 96]));
