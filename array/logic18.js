// [‘apple’, ‘cherry’, ‘banana’, ‘kiwi’, ‘orange’]
// Sort ascending to descending & vice versa
// Print the fruit which doesn’t have vowels init.

// Approaches
// Part 1: Sorting
// Approach 1: Using sort() (ascending + descending)
let fruits = ['apple', 'cherry', 'banana', 'kiwi', 'orange'];

let ascending = [...fruits].sort();          // ascending
let descending = [...fruits].sort().reverse(); // descending

console.log("Ascending:", ascending);
console.log("Descending:", descending);

//--------------------------------------------------------------------------------------------------------

// Approach 2: Using custom comparator


let ascending1 = [...fruits].sort((a, b) => a.localeCompare(b));
let descending1 = [...fruits].sort((a, b) => b.localeCompare(a));

console.log("Ascending:", ascending1);
console.log("Descending:", descending1);

//-----------------------------------------------------------------------------------------------------

// Approach 3: Manual bubble sort (ascending)

let arr = [...fruits];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log("Ascending (Bubble Sort):", arr);

//----------------------------------------------------------------------------------------------------------------------------------

// 🔹 Part 2: Fruits without vowels
// Approach 1: Regex

let noVowels = fruits.filter(fruit => !/[aeiou]/i.test(fruit));
console.log("Without vowels:", noVowels);

//-----------------------------------------------------------------------------------------------------

// Approach 2: Manual loop

let vowels = "aeiou";
let noVowels1 = [];

for (let fruit of fruits) {
  let hasVowel = false;
  for (let ch of fruit.toLowerCase()) {
    if (vowels.includes(ch)) {
      hasVowel = true;
      break;
    }
  }
  if (!hasVowel) noVowels1.push(fruit);
}

console.log("Without vowels:", noVowels1);

//----------------------------------------------------------------------------------------------------------------------

// Approach 3: every() method

let vowels1 = "aeiou";

let noVowels2 = fruits.filter(fruit =>
  [...fruit.toLowerCase()].every(ch => !vowels1.includes(ch))
);

console.log("Without vowels:", noVowels2);
