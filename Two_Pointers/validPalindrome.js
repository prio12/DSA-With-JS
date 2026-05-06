// 125. Valid Palindrome

function isAlphaNumeric(char) {
  if (!((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))) {
    return false;
  } else {
    return true;
  }
}

function validPalindrome(s) {
  const lowerCase = s.toLowerCase();
  let left = 0;
  let right = lowerCase.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(lowerCase[left])) {
      left++;
    } else if (!isAlphaNumeric(lowerCase[right])) {
      right--;
    } else if (lowerCase[left] !== lowerCase[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(validPalindrome('race a car'));
