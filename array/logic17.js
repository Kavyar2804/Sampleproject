// Sum of two arrays i/p [1,2,3] , [2,3,4,5] o/p [3,5,7,5]

// Approach 1: Simple for loop (no inbuilt methods)
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let result = [];
let maxLen = arr1.length > arr2.length ? arr1.length : arr2.length;

for (let i = 0; i < maxLen; i++) {
  let val1 = arr1[i] || 0;   // if undefined → 0
  let val2 = arr2[i] || 0;
  result.push(val1 + val2);
}

console.log(result); 
// [3, 5, 7, 5]

//--------------------------------------------------------------------------------------------------------------

// Approach 2: Using map() with Math.max()


let maxLen1 = Math.max(arr1.length, arr2.length);
let result1 = Array.from({ length: maxLen1 }, (_, i) => (arr1[i] || 0) + (arr2[i] || 0));

console.log(result1);
// [3, 5, 7, 5]

//----------------------------------------------------------------------------------------------------------

// Approach 3: Using while loop

let result2 = [];
let i = 0;

while (i < arr1.length || i < arr2.length) {
  let val1 = arr1[i] || 0;
  let val2 = arr2[i] || 0;
  result2.push(val1 + val2);
  i++;
}

console.log(result2);
// [3, 5, 7, 5]

//-------------------------------------------------------------------------------------------------------

//  Approach 4: Using reduce()


let result3 = Array.from({ length: Math.max(arr1.length, arr2.length) })
  .map((_, i) => (arr1[i] || 0) + (arr2[i] || 0));

console.log(result3);
// [3, 5, 7, 5]

//------------------------------------------------------------------------------------------------------------------

// Approach 5: Zipping technique with spread


let result4 = [...Array(Math.max(arr1.length, arr2.length))].map((_, i) => 
  (arr1[i] ?? 0) + (arr2[i] ?? 0)
);

console.log(result4);
// [3, 5, 7, 5]
