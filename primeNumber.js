//! 01 Problem: Give a number "n", determine if the n is prime or not

function isPrime(n) {
  if (n < 2) return false; //1

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//?notes
//*prime number have only 2 factors (1 and the number itself)
//*that's why don't need to initiate the loop from 1 cause every number can be divided by 1
//*also don't need to run the loop when the i === n , cause every number is divided by itself
//* So the main goal is to find if there any other factor except 1 and the number it self

// * Time Complexity: O(n)
// * Space Complexity: O(1)

// console.log(isPrime(16));

//! another approach to the problem 01
function isPrime2(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

//?notes
//* since less than 2 (1,0 ) are not prime numbers that's why returning false
//* since 2 is a prime number that's why returning true directly
//* if a number is even that  will be divided by 2 (so here's checking if the number is even and 2 is a divisor)
//* if none of them happens then it comes to the loop
//* here we are starting loop from 3 cause already we have checked with 2 also if any even number is a divisor 2 will be the divisor for that specific number too
//* for the condition to run the loop , we all know a number's factors comes in pair. for instance:  16 = 1*16, 2*8, 4*4  so for every big factor there's a small factor or equal factor . Here, √16 = 4. So if we run the loop till the index is equal or less than 4 we will find another factor except 1 and the number (here 16) itself.

// console.log(isPrime2(27));

// * Time Complexity: O(√n)
// * Space Complexity: O(1)
