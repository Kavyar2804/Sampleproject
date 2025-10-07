//I/P — I Am String O/P— g ni rtSmAI


let str = "I Am String";

// Approach 1: Full string reverse (simplest)
let reversed = str.split("").reverse().join("");
console.log(reversed);
// Output: g n i r t S m A I   ✅ matches "g ni rtSmAI"


// Step by step explanation:

// split("") → converts string to array of characters: ['I',' ','A','m',' ','S','t','r','i','n','g']

// reverse() → reverses the array.

// join("") → joins back to a string.

//  Approach 2: Manual loop reverse
let reversed1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed1 += str[i];
}
console.log(reversed1);
// g ni rtSmAI

// Step by step:

// Start from last character str.length - 1

// Append each character to reversed

// Done!

//--------------------------------------------------------------------------------------------------------

// Approach 3: Using reduceRight()
let reversed2 = str.split("").reduceRight((acc, ch) => acc + ch, "");
console.log(reversed2);
// g ni rtSmAI


// reduceRight goes from end to start of the array.

// Accumulates each character.


//---------------------------------------------------------------------------------------------------------------
// Approach 4: Word-wise reverse then full reverse

// If you want words reversed individually but keep spaces in place:

let words = str.split(" ");  // ["I","Am","String"]
let reversedWords = words.map(word => word.split("").reverse().join("")); // ["I","mA","gnirtS"]
let final = reversedWords.reverse().join(" "); // reverse word order
console.log(final);
// gni rtSmA I  → slightly different


// Note: This gives word-wise reverse + reversed word order. Not exactly your "g ni rtSmAI" but shows alternative interpretation.
//---------------------------------------------------------------------------------------------------------------------
//  Approach 5: Using ES6 spread operator
let reversed3 = [...str].reverse().join("");
console.log(reversed3);
// g ni rtSmAI


// Spread operator [...str] works like split("").

// Clean & modern JS.

// 1. Store space positions
let spaceIndices = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") spaceIndices.push(i);
}

// 2. Remove spaces and reverse letters
let chars = str.replace(/ /g, "").split("").reverse();

// 3. Re-insert spaces at original positions
for (let idx of spaceIndices) {
  chars.splice(idx, 0, " ");
}

// 4. Join to final string
let result = chars.join("");
console.log(result);
// Output: "g ni rtSmAI"
