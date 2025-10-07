// function permute(prefix, str, result) {
//   if (str.length === 0) {
//     result.add(prefix);
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       permute(
//         prefix + str[i],
//         str.slice(0, i) + str.slice(i + 1),
//         result
//       );
//     }
//   }
// }

// function main() {
//   let input = "abc";
//   let perms = new Set();

//   permute("", input, perms);

//   for (let p of perms) {
//     console.log(p);
//   }
// }

// main();



// function permute(prefix, str, result) {
//   if (str.length === 0) {
//     result.add(prefix);
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       permute(prefix + str[i], str.slice(0, i) + str.slice(i + 1), result);
//     }
//   }
// }

// let perms = new Set();
// permute("", "abc", perms);
// console.log(perms);

let str='abc'
let results = [];

//A permutation is just a way of arranging all the characters of a string in every possible order.
// If a string has n characters, the number of permutations = n! (factorial of n).
// Example:

// For "ABC" (3 letters): 3! = 3 × 2 × 1 = 6 permutations.

//For "ABCD" (4 letters): 4! = 24 permutations.
// length 3

// Permutation of a string means shuffling the letters in all possible ways,
//  without repeating the same arrangement.
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < str.length; k++) {
      if (i !== j && j !== k && i !== k) {
        results.push(str[i] + str[j] + str[k]);
      }
    }
  }
}

console.log(results);