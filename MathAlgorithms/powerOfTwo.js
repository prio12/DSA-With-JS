//! (1) Give a positive integer "n", determine if the number is a power of 2 or not

function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

// * Time Complexity: O(log n)
// * Space Complexity: O(1)

console.log(isPowerOfTwo(1));

//*notes
//*keep dividing till the number (n) becomes 1
//* for loop can be used here too but while loop is appropriate for this particular problem
