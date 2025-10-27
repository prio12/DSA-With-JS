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

// console.log(nthFibonacci(8));

// [0, 1, 1, 2, 3, 5, 8, 13, 21];

function recursiveFib(n) {
  if (n < 2) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

// console.log(recursiveFib(8));

function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
// console.log(factorial(25));

function trailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// console.log(trailingZeros(25));

function sum(n) {
  let factorial = 1;
  let result = 0;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  const stringFactorial = factorial.toString();

  for (let i = 0; i < stringFactorial.length; i++) {
    result += parseInt(stringFactorial[i]);
  }
  return result;
}
// console.log(sum(4));

function countDigits(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial.toString().length;
}

// console.log(countDigits(120));

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

// 1st bar dhuklo  => if condition is false =>  5 *  function re call korlo 4 diye (return = 24) = 5*24 = 120
// 2nd bar dhuklo => if condition is false => 4 * function re call korlo 3 diye (return = 6) => 4 * 6 = 24
// 3rd bar dhuklo => if condition is false => 3 * function re call korlo 2 diye (return = 2) = 3*2 = 6
// 4th bar dhuklo => if condition is false => 2 * function re call korlo 1 diye  (return = 1) = 2 *1 = 2
//5th bar dhuklo => if condition is false => 1 * function re call korlo 0 diye (return = 1) = 1*1 = 1
//6th bar dhuklo => if condition is true  => tai return korbe 1

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(1307));

function findPrimeNumbers(a, b) {
  let numbers = [];
  let primeNumbers = [];
  for (let i = a; i <= b; i++) {
    numbers.push(i);
  }

  // const isPrimeNumber = isPrime(2);
  for (let i = 0; i < numbers.length; i++) {
    const isPrimeNumber = isPrime(numbers[i]);
    if (isPrimeNumber) {
      primeNumbers.push(numbers[i]);
    }
  }

  return primeNumbers;
}

console.log(findPrimeNumbers(2, 50));
