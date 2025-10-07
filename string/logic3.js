
// Convert first letter of every word to upper case "my name is amrut"

// 1. Without inbuilt methods (manual loop)
let str = "my name is amrut";
let result = "";
let capitalizeNext = true;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    result += str[i];
    capitalizeNext = true; // next character will be uppercase
  } else if (capitalizeNext) {
    // uppercase first letter of word using ASCII
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
    capitalizeNext = false;
  } else {
    result += str[i];
  }
}

console.log(result); // My Name Is Amrut

//-------------------------------------------------------------------------------------------------

//  2. Using split(), for loop, charAt() & slice()


let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let result2 = words.join(" ");
console.log(result2); // My Name Is Amrut

//------------------------------------------------------------------------------------------------

// 3. Using map()


let result1 = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result1); // My Name Is Amrut

//---------------------------------------------------------------------------------------------------

// 4.Using replace() + regex


let result3 = str.replace(/\b\w/g, ch => ch.toUpperCase());
console.log(result3); // My Name Is Amrut


Explanation:

// \b → word boundary

// \w → any word character

// g → global match

//-----------------------------------------------------------------------------------------------------

// 5. Using reduce()


let result4 = str.split(" ").reduce((acc, word) => {
  return acc + (acc ? " " : "") + word.charAt(0).toUpperCase() + word.slice(1);
}, "");

console.log(result4); // My Name Is Amrut