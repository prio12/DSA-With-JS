// fibonacci.js

//! Problem (01): Give a number "n", find the first "n" elements of the Fibonacci series

//? Input: 5
//? Output: [0, 1, 1, 2, 3]

// * Explanation:
//* The Fibonacci sequence starts with 0, 1.
//* Each next number = sum of the previous two.

function fibonacci(n) {
  const seq = [0, 1];

  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
}

// * Test cases
// console.log(fibonacci(1)); // [0]
// console.log(fibonacci(2)); // [0, 1]
// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

//* Steps to solve
//* (1) Start with [0,1]
//* (2) Loop from index 2 → n
//* (3) Each new element = previous two elements
//* (4) Return the sequence

// * Time Complexity: O(n)
// * Space Complexity: O(n)

//! Given a number n, return the Nth Fibonacci number (0-indexed).

//? Input: 0
//? Output: 0

function nthFibonacci(n) {
  const seq = [0, 1];

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }

  return seq[n - 1];
}

//* Steps to solve
//* (1) Start with [0,1]
//* (2) directly return if the n is 0, 1
//* (3) otherwise make the seq array first
//* (4) then return seq [n -1]

//? to visualize
// *n = 5
// *seq = [0, 1, 1, 2, 3]
// *Nth Fibonacci = seq[5-1] = 3

// * Time Complexity: O(n)
// * Space Complexity: O(n)
