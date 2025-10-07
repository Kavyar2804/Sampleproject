// Given a string i/p='I am working in Testyantra.' o/p= 'I ma working ni TestYantra.' only even position word should get reversed.

// Approach 1: Using split(), map(), join()
let str = 'I am working in Testyantra.';

let result = str
  .split(' ')
  .map((word, index) => {
    if ((index + 1) % 2 === 0) {
      return word.split('').reverse().join(''); // reverse even-position words
    }
    return word;
  })
  .join(' ');

console.log(result); // I ma working ni TestYantra.

//-------------------------------------------------------------------------------------------------------

// Approach 2: Using for loop

let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
  if ((i + 1) % 2 === 0) {
    let reversed = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }
    words[i] = reversed;
  }
}

console.log(words.join(' ')); // I ma working ni TestYantra.

//-------------------------------------------------------------------------------------------------------

// Approach 3: Using for...of loop + index

let words1 = str.split(' ');
let result1 = [];

let index = 1;
for (let word of words1) {
  if (index % 2 === 0) {
    result.push(word.split('').reverse().join(''));
  } else {
    result1.push(word);
  }
  index++;
}

console.log(result1.join(' ')); // I ma working ni TestYantra.

//--------------------------------------------------------------------------------------------------------------

// Approach 4: Using reduce()


let result2 = str.split(' ').reduce((acc, word, index) => {
  if ((index + 1) % 2 === 0) word = word.split('').reverse().join('');
  return acc + (acc ? ' ' : '') + word;
}, '');

console.log(result2); // I ma working ni TestYantra.

//----------------------------------------------------------------------------------------------------

// Approach 5: Using while loop

let words2 = str.split(' ');
let i = 0;

while (i < words2.length) {
  if ((i + 1) % 2 === 0) {
    words[i] = words[i].split('').reverse().join('');
  }
  i++;
}

console.log(words2.join(' ')); // I ma working ni TestYantra.