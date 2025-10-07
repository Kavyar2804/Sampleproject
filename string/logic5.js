
// Input = “ Iwilllearnjavascript”  output = “I will learn javascript”

// Approach 1: Using inbuilt method (Regex)
let str = "Iwilllearnjavascript";
let result = str.replace(/([A-Z])/g, " $1").trim();
console.log(result); // I will learn javascript


// ([A-Z]) → matches capital letters.

// " $1" → adds a space before each capital letter.

// .trim() → removes any leading space at the beginning.

//--------------------------------------------------------------------------------------------------
// Approach 2: Without regex (manual loop)

let result1 = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase() && i !== 0) {
    result1 += " "; // add space before capital
  }
  result1 += str[i];
}
console.log(result1); // I will learn javascript

//--------------------------------------------------------------------------------------------------------

// Approach 3: Using split + map

let arr = str.split("");  // convert to array
let result2 = arr.map((ch, i) =>
  ch === ch.toUpperCase() && i !== 0 ? " " + ch : ch
).join("");

console.log(result2); // I will learn javascript

// 🔹 Summary:

// Inbuilt Regex → shortest, cleanest.

// Loop → works without regex, good for beginners.

// Split + Map → uses array methods, more functional style.