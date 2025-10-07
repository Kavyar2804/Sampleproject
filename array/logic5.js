
// Find the Missing Number in an Array (1 to N)

// 1. Using Sum Formula (1+2+…+N) → O(n)
let arr = [1, 2, 4, 5, 6];
let N = 6;

let expectedSum = (N * (N + 1)) / 2;
let actualSum = arr.reduce((acc, num) => acc + num, 0);

let missingNumber = expectedSum - actualSum;
console.log("Missing Number:", missingNumber);

//------------------------------------------------------------------------------------------------------

//  2. Using XOR → O(n)


let xor1 = 0; // XOR of all numbers from 1 to N
for (let i = 1; i <= N; i++) xor1 ^= i;

let xor2 = 0; // XOR of all elements in array
for (let num of arr) xor2 ^= num;

let missingNumber1 = xor1 ^ xor2;
console.log("Missing Number:", missingNumber1);


// Explanation: XOR cancels out duplicates; the remaining number is the missing one.

//--------------------------------------------------------------------------------------------------------

//  3. Using a Boolean Array → O(n)

let found = Array(N + 1).fill(false);

for (let num of arr) {
  found[num] = true;
}

for (let i = 1; i <= N; i++) {
  if (!found[i]) {
    console.log("Missing Number:", i);
    break;
  }
}

//---------------------------------------------------------------------------------------------------------

// 4. Without reduce → simple loop sum


let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];

let missingNumber2 = (N * (N + 1)) / 2 - sum;
console.log("Missing Number:", missingNumber2);




// ✅ Case 1: Only one missing number (standard problem)

// Here,
// N=arr.length+1
// function findMissing(arr) {
//   let N = arr.length + 1; // because exactly one number is missing

//   let expectedSum = (N * (N + 1)) / 2;
//   let actualSum = arr.reduce((a, b) => a + b, 0);

//   return expectedSum - actualSum;
// }

// console.log(findMissing([1, 2, 4, 5])); // 3
// console.log(findMissing([1, 3, 4, 5, 6])); // 2

// ✅ Case 2: If we don’t know whether it’s “length+1” or “max element”

// We can choose N as the maximum element in the array OR length+1, whichever is bigger.

// function findMissing(arr) {
//   let N = Math.max(...arr, arr.length + 1);

//   let expectedSum = (N * (N + 1)) / 2;
//   let actualSum = arr.reduce((a, b) => a + b, 0);

//   return expectedSum - actualSum;
// }

// console.log(findMissing([1, 2, 4, 5])); // 3
// console.log(findMissing([2, 3, 4, 5, 6])); // 1

// ✅ Case 3: Multiple missing numbers (extended version)

// If more than one number may be missing, we can’t just do a sum. Instead:

// function findMissing(arr) {
//   let N = Math.max(...arr, arr.length + 1);
//   let all = new Set(arr);
//   let missing = [];

//   for (let i = 1; i <= N; i++) {
//     if (!all.has(i)) missing.push(i);
//   }

//   return missing;
// }

// console.log(findMissing([1, 2, 4, 6])); // [3, 5]
// console.log(findMissing([2, 5, 6]));    // [1, 3, 4]