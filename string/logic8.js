// 	i/p: "Malayalam"  o/p: m:2a:4l:2y:1

// Basic For Loop (manual counting, beginner-friendly)
let str = "Malayalam".toLowerCase();
let counts = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (counts[ch] === undefined) {
    counts[ch] = 1;
  } else {
    counts[ch]++;
  }
}

let result = "";
for (let ch in counts) {
  result += ch + ":" + counts[ch];
}

console.log(result); // m:2a:4l:2y:1

//---------------------------------------------------------------------------------------------------------

// For...of Loop (slightly cleaner)

let counts1 = {};

for (let ch of str) {
  counts1[ch] = (counts1[ch] || 0) + 1;
}

let result1 = "";
for (let key in counts1) {
  result += key + ":" + counts1[key];
}

console.log(result1); // m:2a:4l:2y:1

//------------------------------------------------------------------------------------------------------

// Using reduce() (functional programming)


let counts2 = [...str].reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});

let result2 = Object.entries(counts2)
                   .map(([k, v]) => k + ":" + v)
                   .join("");

console.log(result2); // m:2a:4l:2y:1
//-------------------------------------------------------------------------------------------------------

// Using Map (ES6, modern)

let counts3 = new Map();

for (let ch of str) {
  counts3.set(ch, (counts3.get(ch) || 0) + 1);
}

let result3 = "";
for (let [key, value] of counts3) {
  result += key + ":" + value;
}

console.log(result3); // m:2a:4l:2y:1

//-----------------------------------------------------------------------------------------------------

// Using Regex + replace() trick

let seen = "";
let result4 = "";

str.replace(/./g, ch => {
  if (!seen.includes(ch)) {
    let count = str.split(ch).length - 1;
    result4 += ch + ":" + count;
    seen += ch;
  }
});

console.log(result4); // m:2a:4l:2y:1
//----------------------------------------------------------------------------------------------------

// Using Nested Loops (manual, no inbuilt counting)

let result5 = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (!result.includes(ch + ":")) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === ch) count++;
    }
    result5 += ch + ":" + count;
  }
}

console.log(result5); // m:2a:4l:2y:1