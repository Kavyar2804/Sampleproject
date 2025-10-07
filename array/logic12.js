//remove duplicate from an array(how many approaches and execute(using set, filter and generic)

// Approach 1: Using Set (ES6, easiest)
let arr = [10, 20, 10, 30, 20, 40, 50];
let unique = [...new Set(arr)];
console.log(unique); // [10, 20, 30, 40, 50]

//----------------------------------------------------------------------------------------------------------

//Approach 2: Using filter() + indexOf()

let unique1 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique1); // [10, 20, 30, 40, 50]


// Keeps first occurrence of each element.

//---------------------------------------------------------------------------------------------------------

//Approach 3: Using reduce()

let unique2 = arr.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item);
  return acc;
}, []);

console.log(unique2); // [10, 20, 30, 40, 50]

//----------------------------------------------------------------------------------------------------

// Approach 4: Using for loop + temporary array

let unique3 = [];

for (let i = 0; i < arr.length; i++) {
  if (!unique3.includes(arr[i])) {
    unique3.push(arr[i]);
  }
}

console.log(unique3); // [10, 20, 30, 40, 50]
//--------------------------------------------------------------------------------------------------------------------
// Approach 5: Using for...of loop

let unique4 = [];

for (let num of arr) {
  if (unique4.indexOf(num) === -1) unique4.push(num);
}

console.log(unique4); // [10, 20, 30, 40, 50]
//--------------------------------------------------------------------------------------------------------

// Approach 6: Using Map

let map = new Map();
let unique5 = [];

for (let num of arr) {
  if (!map.has(num)) {
    map.set(num, true);
    unique5.push(num);
  }
}

console.log(unique5); // [10, 20, 30, 40, 50]

//---------------------------------------------------------------------------------------------------------

// Approach 7: Using Object as frequency map

let obj = {};
let unique6 = [];

for (let num of arr) {
  if (!obj[num]) {
    obj[num] = true;
    unique6.push(num);
  }
}

console.log(unique6); // [10, 20, 30, 40, 50]
