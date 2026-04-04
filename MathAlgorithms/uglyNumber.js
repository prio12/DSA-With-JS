function isUgly(n) {
  let ugly;
  if (n === 1) return true;
  while (n > 1) {
    if (n % 2 === 0) {
      ugly = true;
      n = n / 2;
    } else if (n % 3 === 0) {
      ugly = true;
      n = n / 3;
    } else if (n % 5 === 0) {
      ugly = true;
      n = n / 5;
    } else {
      ugly = false;
      n = n / n;
    }
  }
  return ugly;
}

console.log(isUgly(14));
