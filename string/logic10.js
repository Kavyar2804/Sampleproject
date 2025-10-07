// Let s = 'hello'   //olleh Then  again print  output //olle ,oll,ol,o

// Approach 1: Using split(), reverse(), join() + loop
let s = 'hello';

// Step 1: reverse the string
let reversed = s.split('').reverse().join(''); // 'olleh'

for (let i = reversed.length; i > 0; i--) {
  console.log(reversed.slice(0, i));
}

//---------------------------------------------------------------------------------------------------------
// Approach 2: Using manual for loop (without inbuilt reverse)

let reversed1 = '';

// Reverse manually
for (let i = s.length - 1; i >= 0; i--) {
  reversed1 += s[i];
}

// Print decreasing substrings
for (let i = reversed1.length; i > 0; i--) {
  console.log(reversed1.substring(0, i));
}

//--------------------------------------------------------------------------------------------------------
//  Approach 3: Using for...of + array operations

let arr = [];

for (let ch of s) {
  arr.unshift(ch); // prepend to reverse
}

for (let i = arr.length; i > 0; i--) {
  console.log(arr.slice(0, i).join(''));
}
//----------------------------------------------------------------------------------------------------

// Approach 4: Using reduce() (functional style)


let reversed2 = [...s].reduce((acc, ch) => ch + acc, ''); // reverse string

[...reversed2].forEach((_, i) => {
  console.log(reversed2.slice(0, reversed2.length - i));
});

//------------------------------------------------------------------------------------------------------

// Approach 5: Using while loop

let reversed3 = s.split('').reverse().join('');
let len = reversed3.length;

while (len > 0) {
  console.log(reversed3.slice(0, len));
  len--;
}