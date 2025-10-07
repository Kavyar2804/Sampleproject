// Count the Occurrences of Each Character in a String

// Approach 1: Using reduce() (inbuilt)
let str = "aaabbc";

let counts = str.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});

console.log(counts); // { a: 3, b: 2, c: 1 }

//------------------------------------------------------------------------------------------------------

// Approach 2: Using for...of loop (simpler inbuilt)

let counts1 = {};

for (let ch of str) {
  counts1[ch] = (counts1[ch] || 0) + 1;
}

console.log(counts1); // { a: 3, b: 2, c: 1 }

//---------------------------------------------------------------------------------------------------

// Approach 3: Manual loop without inbuilt methods

let counts2 = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (counts2[ch] === undefined) {
    counts2[ch] = 1;
  } else {
    counts2[ch]++;
  }
}

console.log(counts2); // { a: 3, b: 2, c: 1 }

//-----------------------------------------------------------------------------------------------------

//  Approach 4: Using Map (ES6 feature)

let counts3 = new Map();

for (let ch of str) {
  counts3.set(ch, (counts3.get(ch) || 0) + 1);
}

console.log(Object.fromEntries(counts3)); // { a: 3, b: 2, c: 1 }

//----------------------------------------------------------------------------------------------------------

//  Approach 5: ASCII Array (no objects/maps, low-level)

let freq = new Array(256).fill(0); // assuming ASCII

for (let i = 0; i < str.length; i++) {
  freq[str.charCodeAt(i)]++;
}

for (let i = 0; i < freq.length; i++) {
  if (freq[i] > 0) {
    console.log(String.fromCharCode(i) + " : " + freq[i]);
  }
}
// a : 3, b : 2, c : 1

//-------------------------------------------------------------------------------------------------