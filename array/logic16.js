//input let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]; output [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]

// Approach 1: Using filter() + concat() (Clean & Functional)
let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];

let nonZero = arr.filter(n => n !== 0);
let zeros = arr.filter(n => n === 0);

let result = nonZero.concat(zeros);

console.log(result);
// [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]

//--------------------------------------------------------------------------------------------------------

// Approach 2: Using for loop (Manual Push)

let result1 = [];
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    result1.push(arr[i]);
  } else {
    zeroCount++;
  }
}

while (zeroCount > 0) {
  result1.push(0);
  zeroCount--;
}

console.log(result);
// [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]

//----------------------------------------------------------------------------------------------------------

// Approach 3: In-place (Swap Method, Efficient)
let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[index], arr[i]] = [arr[i], arr[index]]; // swap
    index++;
  }
}

console.log(arr);
// [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]

// Approach 4: Using reduce()


let { nonZero1, zeroCount1 } = arr.reduce((acc, val) => {
  if (val === 0) acc.zeroCount1++;
  else acc.nonZero1.push(val);
  return acc;
}, { nonZero1: [], zeroCount1: 0 });

while (zeroCount1 > 0) {
  nonZero1.push(0);
  zeroCount1--;
}

console.log(nonZero);
// [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]
//----------------------------------------------------------------------------------------------------------
// Approach 5: While loop + splice + push (Less Efficient but Works)

let i = 0;

while (i < arr.length) {
  if (arr[i] === 0) {
    arr.splice(i, 1); // remove 0
    arr.push(0);      // push at end
  } else {
    i++;
  }
}

console.log(arr);
// [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0]