function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = {};

  for (let char of str1) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }

  for (let char of str2) {
    if (map[char] && map[char] > 0) {
      map[char] = map[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isValidAnagram('rat', 'cat'));
console.log(isValidAnagram('anagrnm', 'nagaram'));
