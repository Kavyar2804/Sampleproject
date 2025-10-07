// programe to find sum of first three minimum elements of array {7, -6, 11, 9, 0, 4}

// Approach 1: Using sort() (inbuilt, cleanest)
let arr = [7, -6, 11, 9, 0, 4];

let sorted = [...arr].sort((a, b) => a - b); // ascending order
let sum = sorted[0] + sorted[1] + sorted[2];

console.log(sum); // -2

//-------------------------------------------------------------------------------------------

//  Approach 2: Using Math.min() repeatedly

let temp = [...arr];
let sum1 = 0;

for (let i = 0; i < 3; i++) {
  let min = Math.min(...temp);
  sum1 += min;
  temp.splice(temp.indexOf(min), 1); // remove the found minimum
}

console.log(sum1); // -2
//------------------------------------------------------------------------------------------------

// Approach 3: Without inbuilt sorting (manual loop)

let min1 = Infinity, min2 = Infinity, min3 = Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num < min1) {
    min3 = min2;
    min2 = min1;
    min1 = num;
  } else if (num < min2) {
    min3 = min2;
    min2 = num;
  } else if (num < min3) {
    min3 = num;
  }
}

let sum2 = min1 + min2 + min3;
console.log(sum2); // -2

// Approach 4: Using reduce() + sort (functional style)


let sum3 = arr
  .sort((a, b) => a - b)
  .slice(0, 3)
  .reduce((acc, num) => acc + num, 0);

console.log(sum3); // -2