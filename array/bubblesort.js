// Bubble sort - Java/js program Sorting an array
//  1. Basic Bubble Sort (without inbuilt methods)
let arr = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("Sorted Array:", arr);


//  Output:

// Sorted Array: [11, 12, 22, 25, 34, 64, 90]

//--------------------------------------------------------------------------------------------------------

// 2. Optimized Bubble Sort (with early break)

// If no swaps occur in an iteration, the array is already sorted → stop early.


for (let i = 0; i < arr.length - 1; i++) {
  let swapped = false;
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 swap
      swapped = true;
    }
  }
  if (!swapped) break; // stop if already sorted
}

console.log("Sorted Array:", arr);

//--------------------------------------------------------------------------------------------------

//  3. While Loop Implementation

let n = arr.length;
let swapped;

do {
  swapped = false;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapped = true;
    }
  }
  n--; // largest element is at the end
} while (swapped);

console.log("Sorted Array:", arr);

//-------------------------------------------------------------------------------------------------

// 4. Using Inbuilt sort() (for comparison only)

arr.sort((a, b) => a - b);
console.log("Sorted Array:", arr);
