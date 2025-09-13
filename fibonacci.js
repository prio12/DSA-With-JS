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
