//find the factorial of an integer

//! Given a number n, find the factorial of it.

//*Explanation

// *Factorial means multiplying a number by all the smaller numbers less than it.

function factorial(n) {
  if (n === 0) return 1;

  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

// * Test cases
// console.log(factorial(0)); //0
// console.log(factorial(1)); //1
// console.log(factorial(2)); //2
// console.log(factorial(3)); //6

// * Time Complexity: O(n)
// * Space Complexity: O(1)
