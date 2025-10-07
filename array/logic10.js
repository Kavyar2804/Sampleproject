// Program {7,-3,0,2,1,-9}
// Sort Without bubble sorting
// FindFirst 3 Max element
// Product of Max 3 element


// Approach 1: Using sort() (inbuilt, cleanest)
let arr = [7, -3, 0, 2, 1, -9];

// Sort descending
let sorted = [...arr].sort((a, b) => b - a); // [7, 2, 1, 0, -3, -9]

// Get first 3 max elements
let top3 = sorted.slice(0, 3); // [7, 2, 1]

// Product of top 3
let product = top3.reduce((acc, num) => acc * num, 1);

console.log("Sorted:", sorted);
console.log("Top 3 max elements:", top3);
console.log("Product:", product);


// Output:

// Sorted: [7, 2, 1, 0, -3, -9]
// Top 3 max elements: [7, 2, 1]
// Product: 14

//------------------------------------------------------------------------------------------------------------

// Approach 2: Find max elements without sorting
let temp = [...arr];
let maxElements = [];

for (let i = 0; i < 3; i++) {
  let max = Math.max(...temp);
  maxElements.push(max);
  temp.splice(temp.indexOf(max), 1); // remove found max
}

let product1 = maxElements.reduce((acc, num) => acc * num, 1);

console.log("Top 3 max elements:", maxElements);
console.log("Product:", product1);

//----------------------------------------------------------------------------------------------------------

// Approach 3: Manual loop to find top 3 max (without sort/Math.max)

let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

for (let num of arr) {
  if (num > max1) {
    max3 = max2;
    max2 = max1;
    max1 = num;
  } else if (num > max2) {
    max3 = max2;
    max2 = num;
  } else if (num > max3) {
    max3 = num;
  }
}

let product2 = max1 * max2 * max3;
console.log("Top 3 max elements:", [max1, max2, max3]);
console.log("Product:", product2);

// Approach 4: Using reduce() + sort()


let toop3 = arr
  .sort((a, b) => b - a)
  .slice(0, 3);

let product3 = toop3.reduce((acc, num) => acc * num, 1);

console.log("Top 3 max elements:", top3);
console.log("Product:", product3);

//------------------------------------------------------------------------------------------------------

// Approach 5: Using forEach + array update (functional-ish, without sort)

let topp3 = [];

arr.forEach(num => {
  if (topp3.length < 3) {
    topp3.push(num);
    topp3.sort((a,b)=>b-a);
  } else if (num > topp3[2]) {
    topp3[2] = num;
    topp3.sort((a,b)=>b-a);
  }
});

let product4 = top3.reduce((acc, num) => acc * num, 1);

console.log("Top 3 max elements:", top3);
console.log("Product:", product4);
