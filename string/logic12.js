	// I/p : my name is neyaz O/p : ym eman si zayen

// Approach 1: Using split(), map(), reverse(), join()
let str = "my name is neyaz";

let result = str
  .split(" ")                     // ["my","name","is","neyaz"]
  .map(word => word.split("").reverse().join("")) // reverse each word
  .join(" ");                     // join words back

console.log(result); // ym eman si zayen

//----------------------------------------------------------------------------------------------
// Approach 2: Using for loop + manual reverse

let words = str.split(" ");
let resultt = [];

for (let i = 0; i < words.length; i++) {
  let reversed = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    reversed += words[i][j];
  }
  resultt.push(reversed);
}

console.log(resultt.join(" ")); // ym eman si zayen

//---------------------------------------------------------------------------------------------

// Approach 3: Using for...of loop

let words1 = str.split(" ");
let result1 = [];

for (let word of words1) {
  let rev = word.split("").reverse().join("");
  result1.push(rev);
}

console.log(result1.join(" ")); // ym eman si zayen

//-----------------------------------------------------------------------------------------------------

// Approach 4: Using reduce()


let result2 = str.split(" ").reduce((acc, word, index) => {
  let rev = word.split("").reverse().join("");
  return acc + (index === 0 ? "" : " ") + rev;
}, "");

console.log(2); // ym eman si zayen

//-----------------------------------------------------------------------------------------------------

// Approach 5: Using while loop

let words2 = str.split(" ");
let i = 0;
let result3 = [];

while (i < words2.length) {
  let rev = words2[i].split("").reverse().join("");
  result3.push(rev);
  i++;
}

console.log(result3.join(" ")); // ym eman si zayen
