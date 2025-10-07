// let str = "javascript"; 

//output
// j
// ja
// jav
// java
// javas
// javasc
// javascr
// javascri
// javascrip
// javascript

//  Approach 1: Simple for loop
let str = "javascript";

for (let i = 1; i <= str.length; i++) {
  console.log(str.substring(0, i));
}


// Explanation:

// substring(0, i) takes first i characters.

// Loop from i = 1 to str.length.

//-----------------------------------------------------------------------------------------------------------------------------

// Approach 2: Using slice()

for (let i = 1; i <= str.length; i++) {
  console.log(str.slice(0, i));
}


// .slice(0, i) works the same as .substring(0, i) for this case.

//----------------------------------------------------------------------------------------------------------------

// Approach 3: Using for...of with counter

let temp = "";

for (let char of str) {
  temp += char;  // add character one by one
  console.log(temp);
}


// temp accumulates characters as we go.

// Prints each growing substring.

//-------------------------------------------------------------------------------------------------------------------

// Approach 4: Using map()

[...str].map((_, i) => console.log(str.substring(0, i + 1)));


// Spread string into array of characters.

// Use map to print substring from 0 to i+1.

//-----------------------------------------------------------------------------------------------------------

// Approach 5: Using reduce()


[...str].reduce((acc, char) => {
  acc += char;
  console.log(acc);
  return acc;
}, "");


// reduce accumulates characters.

// Prints each step.


