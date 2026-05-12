function characterReplacement(s, k) {
  let map = {};
  let left = 0;
  let maxWindowSize = 0;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]) {
      map[s[right]]++;
    } else {
      map[s[right]] = 1;
    }

    while (right - left + 1 - Math.max(...Object.values(map)) > k) {
      map[s[left]]--;
      left++;
    }

    maxWindowSize = Math.max(maxWindowSize, right - left + 1);
  }

  return maxWindowSize;
}

console.log(characterReplacement('ABAA', 0));
