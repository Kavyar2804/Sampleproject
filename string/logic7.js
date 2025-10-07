// given a string let s="12djfk4$685kh" remove numbers and give a new string


// Approach 1: Using replace() + Regex (inbuilt, cleanest)
let s = "12djfk4$685kh";

let newStr = s.replace(/[0-9]/g, "");
console.log(newStr); // djfk$kh


// [0-9] → matches any digit

// g → global match

// replaces all numbers with empty string

//------------------------------------------------------------------------------------------------------------------

// Approach 2: Using split() + filter()


let newStr1 = s
  .split("")
  .filter(ch => isNaN(parseInt(ch)))
  .join("");

console.log(newStr1); // djfk$kh

//-----------------------------------------------------------------------------------------------------

// Approach 3: Using for loop (manual, without inbuilt filter)

let newStr2 = "";

for (let i = 0; i < s.length; i++) {
  if (s[i] < "0" || s[i] > "9") { // keep non-numeric characters
    newStr2 += s[i];
  }
}

console.log(newStr2); // djfk$kh

//-------------------------------------------------------------------------------------------------------

// Approach 4: Using for...of loop

let newStr3 = "";

for (let ch of s) {
  if (!("0" <= ch && ch <= "9")) {
    3 += ch;
  }
}

console.log(newStr3); // djfk$kh

//--------------------------------------------------------------------------------------------------

// Approach 5: Using reduce()


let newStr4 = [...s].reduce((acc, ch) => {
  if (ch < "0" || ch > "9") acc += ch;
  return acc;
}, "");

console.log(newStr4); // djfk$kh