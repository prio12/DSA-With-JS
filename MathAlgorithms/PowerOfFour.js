var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 4 !== 0) {
      console.log('entered why?');
      return false;
    } else {
      n = n / 2;
    }
  }
  return true;
};

console.log(isPowerOfFour(16));
