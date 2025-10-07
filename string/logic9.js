// I/p : i am selenium O/p :m ui nelesmai

// Approach 1: Using split(), map(), reverse(), join() (inbuilt, cleanest)
let str = "i am selenium";

let result = str
  .split(" ")                  // ["i","am","selenium"]
  .map(word => word.split("").reverse().join("")) // reverse each word
  .join(" ");                  // join words back

console.log(result); // m ui nelesmai

//----------------------------------------------------------------------------------------------------
// Approach 2: Using for loop + manual reverse of each word

let words = str.split(" ");
let resultArr = [];

for (let i = 0; i < words.length; i++) {
  let reversed = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    reversed += words[i][j];
  }
  resultArr.push(reversed);
}

let result1 = resultArr.join(" ");
console.log(result1); // m ui nelesmai
//------------------------------------------------------------------------------------------------------------

// Approach 3: Using for...of loop

let resultArr1 = [];

for (let word of str.split(" ")) {
  let reversed = "";
  for (let ch of word.split("").reverse()) {
    reversed += ch;
  }
  resultArr1.push(reversed);
}

console.log(resultArr1.join(" ")); // m ui nelesmai

// Approach 4: Using reduce()


let result2 = str.split(" ").reduce((acc, word, index, arr) => {
  let rev = word.split("").reverse().join("");
  return acc + (index === 0 ? "" : " ") + rev;
}, "");

console.log(result2); // m ui nelesmai

//-------------------------------------------------------------------------------------------------------

// Approach 5: Manual full approach (without split/join for learning)

let result3 = "";
let word = "";

for (let i = 0; i <= str.length; i++) {
  if (i === str.length || str[i] === " ") {
    // reverse current word
    for (let j = word.length - 1; j >= 0; j--) {
      result3 += word[j];
    }
    if (i !== str.length) result3 += " "; // add space between words
    word = "";
  } else {
    word += str[i];
  }
}

console.log(result3); // m ui nelesmai