function canConstruct(ransomeNote, magazine) {
  if (magazine.length < ransomeNote.length) return false;

  let map = {};

  for (let char of magazine) {
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }

  for (let char of ransomeNote) {
    if (map[char] && map[char] > 0) {
      map[char] = map[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(canConstruct('aa', 'ba'));
