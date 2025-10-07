// s="145"; sum of element.

// Approach 1: Using for loop (manual way, no inbuilt)
let s = "145";
let sum = 0;

for (let i = 0; i < s.length; i++) {
  sum += Number(s[i]);  // convert char to number
}

console.log(sum); // 10

// Step by step adds each digit.
// Easiest to understand.

//---------------------------------------------------------------------------------------------------------



// Approach 2: Using for...of loop

let sum1 = 0;

for (let ch of s) {
  sum1 += +ch; // unary + converts to number
}

console.log(sum1); // 10


//  Cleaner syntax.

//----------------------------------------------------------------------------------------------------------------

// Approach 3: Using split() + reduce() (functional style)

let sum2 = s.split('').reduce((acc, curr) => acc + Number(curr), 0);

console.log(sum2); // 10


// Short, elegant.

//--------------------------------------------------------------------------------------------------------------------------------------

// Approach 4: Using map() + reduce()

let sum3 = s.split('').map(Number).reduce((a, b) => a + b);

console.log(sum3); // 10


//  Converts to [1,4,5] first → then sum.

//-------------------------------------------------------------------------------------------------------------------

// Approach 5: Using Array.from()

let sum4 = Array.from(s, Number).reduce((a, b) => a + b);

console.log(sum4); // 10


// Array.from(s, Number) → [1, 4, 5].

//---------------------------------------------------------------------------------------------------------

//  Approach 6: Using eval() (⚠ not recommended in real projects)

let sum5 = eval(s.split('').join('+'));

console.log(sum5); // 10


// Converts "145" → "1+4+5" → evaluates.
// Works, but not safe for real input.

//---------------------------------------------------------------------------------------------------------

// Approach 7: While loop + Math.floor

let num = Number(s);
let sum6 = 0;

while (num > 0) {
  sum6 += num % 10;        // get last digit
  num = Math.floor(num / 10); // remove last digit
}

console.log(sum6); // 10


//  Treats it like a number, no string splitting.