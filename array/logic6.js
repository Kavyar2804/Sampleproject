// Remove duplicates from array [10,20,10,20,30,40,50] without inbuilt methods in js ?

// Approach 1: Using inbuilt Set (short & clean)
let arr = [10, 20, 10, 20, 30, 40, 50];
let unique = [...new Set(arr)];
console.log(unique); // [10, 20, 30, 40, 50]

//---------------------------------------------------------------------------------------------------

// Approach 2: Using filter + indexOf

let unique1 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique1); // [10, 20, 30, 40, 50]

// Approach 3: Without inbuilt (manual loop + extra array)

let unique2 = [];

for (let i = 0; i < arr.length; i++) {
  let exists = false;
  for (let j = 0; j < unique2.length; j++) {
    if (arr[i] === unique2[j]) {
      exists = true;
      break;
    }
  }
  if (!exists) {
    unique2.push(arr[i]);
  }
}

console.log(unique); // [10, 20, 30, 40, 50]

//-----------------------------------------------------------------------------------------------------

// Approach 4: Using object (hashmap style)

let obj = {};
let unique3 = [];

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = true;
    unique3.push(arr[i]);
  }
}

console.log(unique3); // [10, 20, 30, 40, 50]
