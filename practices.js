//! Problem (01): Give a number "n", find the first "n" elements of the Fibonacci series

// function fibonacci(n) {
//   let seq = [0, 1];

//   for (let i = 2; i < n; i++) {
//     seq[i] = seq[i - 1] + seq[i - 2];
//   }

//   return seq;
// }

// function fibonacci(n) {
//   let seq = [0, 1];
//   for (let i = 2; i < n; i++) {
//     seq[i] = seq[i - 1] + seq[i - 2];
//   }
//   return seq;
// }

// console.log(fibonacci(5));

//! Given a number n, return the Nth Fibonacci number (0-indexed).

function nthFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq[n];
}

console.log(nthFibonacci(8));

[0, 1, 1, 2, 3, 5, 8, 13, 21];
