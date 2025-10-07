
// Wap-'I love my country. I love my parents' O/p-'country my love I. parents my love I'
//  Approach 1: Split by . then reverse words with split/reverse/join
let s = "I love my country. I love my parents";

let result = s
  .split(".")                           // ["I love my country", " I love my parents"]
  .map(sentence =>
    sentence.trim().split(" ").reverse().join(" ")
  )
  .join(". ");

console.log(result);

// country my love I. parents my love I


// Very clean and uses built-in methods.

// Approach 2: Manual Loop (No reverse())

let sentences = s.split(".");
let finalResult = [];

for (let sen of sentences) {
  let words = sen.trim().split(" ");
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }
  finalResult.push(reversed.trim());
}

console.log(finalResult.join(". "));
// country my love I. parents my love I


// Works without .reverse().

//-------------------------------------------------------------------------------------------------------

//  Approach 3: Using reduceRight


let resultt = s
  .split(".")
  .map(sentence =>
    sentence.trim().split(" ").reduceRight((acc, word) => acc + " " + word)
  )
  .join(". ");

console.log(resultt);
// country my love I. parents my love I

// Functional style with reduceRight.

//---------------------------------------------------------------------------------------------------------

// Approach 4: Regex for splitting by punctuation + reverse


let result1 = s.split(/(?<=\.)/).map(sentence => {
  let clean = sentence.replace(".", "").trim();
  return clean.split(" ").reverse().join(" ") + (sentence.includes(".") ? "." : "");
}).join(" ");

console.log(result1);
// country my love I. parents my love I


// Regex handles punctuation properly.

//---------------------------------------------------------------------------------------------------------------

// Approach 5: Using map() with helper function
function reverseWords(sentence) {
  let words = sentence.trim().split(" ");
  return words.reverse().join(" ");
}


let result2 = s.split(".").map(reverseWords).join(". ");

console.log(result2);
// country my love I. parents my love I


// Cleaner, reusable function.