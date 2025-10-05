// function isPrime(n) {
//   if (n < 2) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function range(n1, n2) {
//   const numbers = [];
//   const output = [];
//   for (let i = n1; i <= n2; i++) {
//     numbers.push(i);
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     const result = isPrime(numbers[i]);
//     if (result) {
//       output.push(numbers[i]);
//     }
//   }

//   return output;
// }

// console.log(range(10, 20));

function isPowerOfTwo(n) {
  if (n < 2) return false;
  while (n >= 2) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));
