//  input: "aabbbaccds" get all possible substring of length 2 & remove duplicate from result of above program.

// Approach 1: for loop + Set (Clean & Efficient)
let str = "aabbbaccds";

// Step 1: Get all substrings (with duplicates)
let substrings = [];
for (let i = 0; i < str.length - 1; i++) {
  substrings.push(str.substring(i, i + 2));
}
console.log("All substrings:", substrings);

// Step 2: Remove duplicates using Set
let unique = [...new Set(substrings)];
console.log("Unique substrings:", unique);

//---------------------------------------------------------------------------------------------------------------------------------------------

//  Approach 2: for loop + manual duplicate check

let substrings1 = [];
let unique1 = [];

// Step 1: Generate substrings
for (let i = 0; i < str.length - 1; i++) {
  let sub = str.substring(i, i+2);
  substrings1.push(sub);

  // Step 2: Add only if not duplicate
  if (!unique1.includes(sub)) {
    unique1.push(sub);
  }
}

console.log("All substrings:", substrings1);
console.log("Unique substrings:", unique1);

//-----------------------------------------------------------------------------------------------------------

// Approach 3: Using map() + filter()


// Step 1: Generate all substrings
let substrings2 = [...str].map((_, i) => str.substring(i, i + 2)).slice(0, -1);
console.log("All substrings:", substrings2);

// Step 2: Remove duplicates
let unique2 = substrings2.filter((sub, idx) => substrings2.indexOf(sub) === idx);
console.log("Unique substrings:", unique2);

//  Approach 4: Using reduce()


// Step 1 + Step 2 in one reduce
let { substrings3, unique3 } = [...str].reduce((acc, _, i) => {
  if (i < str.length - 1) {
    let sub = str.substring(i, i + 2);
    acc.substrings3.push(sub);
    if (!acc.unique3.includes(sub)) {
      acc.unique3.push(sub);
    }
  }
  return acc;
}, { substrings3: [], unique3: [] });

console.log("All substrings:", substrings3);
console.log("Unique substrings:", unique3);

//-----------------------------------------------------------------------------------------------------------
// Approach 5: While loop + Set

let substrings4 = [];
let result = new Set();

let i = 0;
while (i < str.length - 1) {
  let sub = str.substring(i, i + 2);
  substrings4.push(sub);
  result.add(sub);
  i++;
}

console.log("All substrings:", substrings4);
console.log("Unique substrings:", [...result]);

//------------------------------------------------------------------
//  Approach 6: Regex + Match (Trickier Way)


// Step 1: Match all 2-char substrings using regex lookahead
let substrings5 = [...str.matchAll(/(?=(..))/g)].map(m => m[1]);
console.log("All substrings:", substrings5);

// Step 2: Remove duplicates using Set
let unique4 = [...new Set(substrings)];
console.log("Unique substrings:", unique4);
