//program to find 2nd highest number in array 

// 1. Without inbuilt methods → simple loop

let arr = [10, 5, 20, 8, 15, 30];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
    }
}

console.log("2nd highest:", second);


//  Output:

// 2nd highest: 20

//-------------------------------------------------------------------------------------------------------

//  2. Without inbuilt methods → sort logic (manual)


// bubble sort (descending)
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("2nd highest:", arr[1]);

//-----------------------------------------------------------------------------------------------------

//  3. With inbuilt methods → sort()


let secondHighest1 = arr.sort((a, b) => b - a)[1];

console.log("2nd highest:", secondHighest1);

//----------------------------------------------------------------------------------------------

//  4. With inbuilt methods → Set (remove duplicates)


let unique = [...new Set(arr)].sort((a, b) => b - a);

console.log("2nd highest:", unique[1]);
//------------------------------------------------------------------------------------------

// 5. With inbuilt methods → reduce()


let highest = arr.reduce((a, b) => (a > b ? a : b));
let secondHighest = arr.filter(n => n !== highest)
                       .reduce((a, b) => (a > b ? a : b));

console.log("2nd highest:", secondHighest);


// // Find Second Largest Number in an Array

// // Approach 1: Using inbuilt sort()

// let arr = [10, 40, 20, 90, 60];

// // Sort in descending order
// let sorted = [...arr].sort((a, b) => b - a);

// let secondLargest = sorted[1]; 
// console.log(secondLargest); // 60


// // If duplicates exist (e.g., [90, 90, 60]), you might want the unique second largest. Then:

// // let arr = [10, 40, 20, 90, 60, 90];
// // let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
// // console.log(uniqueSorted[1]); // 60

// // Approach 2: Without sorting (single scan)

// let first = -Infinity, second = -Infinity;

// for (let num of arr) {
//   if (num > first) {
//     second = first;
//     first = num;
//   } else if (num > second && num < first) {
//     second = num;
//   }
// }

// console.log(second); // 60


// //  More efficient (O(n)), avoids sorting.

// //  Approach 3: Using Math.max() repeatedly


// let max1 = Math.max(...arr);
// let arrWithoutMax = arr.filter(num => num !== max1);
// let maxx2 = Math.max(...arrWithoutMax);

// console.log(maxx2); // 60

// // Approach 4: Manual loop (no inbuilt at all)


// let max2 = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max2) {
//     max2 = arr[i];
//   }
// }

// let max3 = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max3 && arr[i] < max2) {
//     max3 = arr[i];
//   }
// }

// console.log(max3); // 60

