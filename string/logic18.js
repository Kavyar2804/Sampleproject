// I/p “I_Love_INDIA” o/p “A_IDNI_evoLI

// Approach 1: Split by _, reverse each part, then join with _
let s = "I_Love_INDIA";

let result = s
  .split("_")                 // ["I","Love","INDIA"]
  .map(word => word.split("").reverse().join("")) // ["I","evoL","AIDNI"]
  .reverse()                  // ["AIDNI","evoL","I"]
  .join("_");                  // "AIDNI_evoL_I"

console.log(result); 
// A_IDNI_evoLI

//----------------------------------------------------------------------------------------------------------

//  Approach 2: Manual loop (no reverse())

let words = s.split("_");
let final = [];

for (let i = words.length - 1; i >= 0; i--) {
  let rev = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    rev += words[i][j];
  }
  final.push(rev);
}

console.log(final.join("_"));
// A_IDNI_evoLI

//-------------------------------------------------------------------------------------------------------
//  Approach 3: Using reduceRight()


let result1 = s
  .split("_")
  .reduceRight((acc, word) => {
    let rev = word.split("").reverse().join("");
    return acc.length ? acc + "_" + rev : rev;
  }, "");

console.log(result1);
// A_IDNI_evoLI

//-------------------------------------------------------------------------------------------------------------------
// Approach 4: Functional map + helper function
function reverseStr(str) {
  return str.split("").reverse().join("");
}

let result2 = s.split("_").map(reverseStr).reverse().join("_");

console.log(result2);
// A_IDNI_evoLI

// Approach 5: Regex-based split


let result3 = s.split(/_/).map(w => [...w].reverse().join("")).reverse().join("_");

console.log(result3);
// A_IDNI_evoLI