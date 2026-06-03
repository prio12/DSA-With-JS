// function compareKeys(s1, s2) {
//   const keys1 = Object.keys(s1);
//   const keys2 = Object.keys(s2);

//   if (keys1.length !== keys2.length) return false;

//   for (let key of keys1) {
//     if (s1[key] !== s2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;

//   let map = {};
//   for (let i = 0; i < s1.length; i++) {
//     if (map[s1[i]]) {
//       map[s1[i]]++;
//     } else {
//       map[s1[i]] = 1;
//     }
//   }

//   let left = 0;
//   let newMap = {};

//   for (let right = 0; right < s2.length; right++) {
//     while (right - left + 1 > s1.length) {
//       newMap[s2[left]]--;
//       if (newMap[s2[left]] === 0) {
//         delete newMap[s2[left]];
//       }
//       left++;
//     }

//     if (newMap[s2[right]]) {
//       newMap[s2[right]]++;
//     } else {
//       newMap[s2[right]] = 1;
//     }

//     console.log(newMap);

//     if (compareKeys(map, newMap)) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(checkInclusion("ab", "eidboaooo"));

//optimized solution
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  let need = {};
  let window = {};
  let matched = 0;

  //creating the need
  for (let char of s1) {
    need[char] = (need[char] || 0) + 1;
  }

  let required = Object.keys(need).length;
  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    let rightChar = s2[right];

    //inserting in the window
    window[rightChar] = (window[rightChar] || 0) + 1;

    //updating matchCount
    if (need[rightChar] && need[rightChar] === window[rightChar]) {
      //checking if the char is totally matched
      matched++;
    }

    //checking the window validation
    while (right - left + 1 > s1.length) {
      let leftChar = s2[left];
      //updating the matchCount
      if (need[leftChar] && need[leftChar] === window[leftChar]) {
        matched--;
      }

      //eliminate here
      window[leftChar]--;
      left++;

      if (window[leftChar] === 0) {
        delete window[leftChar];
      }
    }

    if (required === matched) return true;
  }
  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
