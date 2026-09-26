function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  let seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    console.log(seen);
    maxLength = Math.max(seen.size, maxLength);
    console.log(maxLength);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
