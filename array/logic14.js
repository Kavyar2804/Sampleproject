// in an array of length 'n' containing multiple 1's and only one  0, fetch the index value of 0 element

// Approach 1: Using for loop (manual check)
let arr = [1, 1, 1, 0, 1, 1];
let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    index = i;
    break;   // stop once found
  }
}

console.log("Index of 0:", index);

//-----------------------------------------------------------------------------------------------------------------

// Approach 2: Using for...of with counter

let index1 = -1;
let k = 0;

for (let num of arr) {
  if (num === 0) {
    index1 = k;
    break;
  }
  k++;
}

console.log("Index of 0:", index1);

//--------------------------------------------------------------------------------------------------------

// Approach 3: Using indexOf() (Inbuilt)

let index2 = arr.indexOf(0);

console.log("Index of 0:", index2);

//------------------------------------------------------------------------------------------------------------

// Approach 4: Using findIndex() (Functional)

let index3 = arr.findIndex(num => num === 0);

console.log("Index of 0:", index3);

//----------------------------------------------------------------------------------------------------------------------------
//  Approach 5: Using while loop

let j = 0;
let index4 = -1;

while (j < arr.length) {
  if (arr[j] === 0) {
    index = j;
    break;
  }
  j++;
}

console.log("Index of 0:", index4);
//------------------------------------------------------------------------------------------------------------------------------

// Approach 6: Using reduce() (Advanced)

let index5 = arr.reduce((acc, val, i) => val === 0 ? i : acc, -1);

console.log("Index of 0:", index5);