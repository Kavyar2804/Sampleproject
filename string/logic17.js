// Wap-'I love my country' O/p-'country my love I'

// Approach 1: Using split, reverse, join (Most Simple)
let s = "I love my country";
let result = s.split(" ").reverse().join(" ");
console.log(result); 
// country my love I

//-----------------------------------------------------------------------------------------------------------------------

// Approach 2: Manual for loop (No reverse())

let words = s.split(" ");
let reversed = "";

for (let i = words.length - 1; i >= 0; i--) {
  reversed += words[i] + " ";
}

console.log(reversed.trim()); 
// country my love I

//  Approach 3: Using reduceRight()
let result1 = s.split(" ").reduceRight((acc, word) => acc + " " + word);
console.log(result1.trim()); 
// country my love I

// Approach 4: Using stack idea (push + pop)
let words1 = s.split(" ");
let stack = [];
let result2 = "";

for (let word of words1) stack.push(word);  // push all

while (stack.length) {
  result2 += stack.pop() + " "; // pop gives reverse order
}

console.log(result2.trim());
// country my love I

//----------------------------------------------------------------------------------------------------------------
//  Approach 5: Recursive Function
function reverseWords(str) {
  let words2 = str.split(" ");
  if (words2.length === 1) return words2[0];
  return reverseWords(words2.slice(1).join(" ")) + " " + words2[0];
}

console.log(reverseWords(s));
// country my love I




// Summary

// Approach 1 → Shortest & clean (best choice).

// Approach 2/4 → Good if you want to avoid .reverse().

// Approach 3 → Functional style.

// Approach 5 → Recursive approach.