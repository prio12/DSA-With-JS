//find the factorial of an integer

//! 01 Given a number n, find the factorial of it.

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
// console.log(factorial(10));
// console.log(factorial(1)); //1
// console.log(factorial(2)); //2
// console.log(factorial(3)); //6

// * Time Complexity: O(n)
// * Space Complexity: O(1)

//! 02 Problem: Trailing Zeros in Factorial

//* Explanation:
// *Given a number `n`, find how many trailing zeros are there in `n!`.
// *Trailing zeros are zeros at the end of the factorial number.

//* Example:
// ? Input: 5
// ? Output: 1
// * Explanation: 5! = 120 → 1 trailing zero

// ? Input: 10
// ? Output: 2
// * Explanation: 10! = 3628800 → 2 trailing zeros

// * Task:
// Write a function `trailingZeros(n)` that returns the count of trailing zeros in n!.

function trailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// * Time Complexity: O(n)
// * Space Complexity: O(1)

// console.log(trailingZeros(24), 'trailing');

//! 03 Problem: Sum of Factorial Digits
//*Description: Given a number n, calculate n! (factorial of n) and then find the sum of all its digits.
//?Example:

//?Input: 5 → 5! = 120 → sum of digits = 1 + 2 + 0 = 3

//?Input: 3 → 3! = 6 → sum of digits = 6

function sum(n) {
  let factorial = 1;
  let total = 0;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  const numberString = factorial.toString();

  for (let i = 0; i < numberString.length; i++) {
    total += parseInt(numberString[i]);
  }
  return total;
}

// * Time Complexity: O(n^2)
// * Space Complexity: O(1)

// console.log(sum(10));

//! 04 Problem: Factorial Digit Count
//*Description: Given a number n, calculate n! and return the number of digits in the factorial.

//? Example:

//? Input: 5 → 5! = 120 → number of digits = 3

//? Input: 10 → 10! = 3628800 → number of digits = 7

function count(n) {
  let factorial = 1;

  for (let i = n; i > 0; i--) {
    factorial *= i;
  }

  return factorial.toString().length;
}

// * Time Complexity: O(n)
// * Space Complexity: O(1)

// console.log(count(10));

//!  Given a number n, find the factorial of it.
//*solve it in recursive way

function recursiveFactorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));
