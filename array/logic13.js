// Take array store strings and print if a string having 'a' in it

// Approach 1: Using for loop + includes()
let arr = ["hello", "apple", "sky", "banana", "test"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes("a")) {
    console.log(arr[i]);
  }
}

//-----------------------------------------------------------------------------------------------------------
// Approach 2: Using for...of loop + indexOf()


for (let word of arr) {
  if (word.indexOf("a") !== -1) {
    console.log(word);
  }
}

//------------------------------------------------------------------------------------------------------------------------
// Approach 3: Using filter() (Functional)


let result = arr.filter(word => word.includes("a"));
console.log(result); // ["apple","banana"]

//----------------------------------------------------------------------------------------------------------------------------------------

// Approach 4: Using forEach()


arr.forEach(word => {
  if (word.includes("a")) {
    console.log(word);
  }
});

//--------------------------------------------------------------------------------------------------------------------------------

// Approach 5: Without inbuilt (charAt)

for (let i = 0; i < arr.length; i++) {
  let word = arr[i];
  let found = false;
  for (let j = 0; j < word.length; j++) {
    if (word.charAt(j) === "a") {
      found = true;
      break;
    }
  }
  if (found) console.log(word);
}

//--------------------------------------------------------------------------------------------------------------
// Approach 6: Regex Approach

let result1 = arr.filter(word => /a/.test(word));
console.log(result1); // ["apple","banana"]