// input: arr = {1,6,8};  print missed number between 1 to 10; output:  2 3 4 5 7 9 10

// Approach 1: Simple for loop + includes()
let arr = [1, 6, 8];

for (let i = 1; i <= 10; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
//  Approach 2: Using for loop + manual search (No inbuilt includes)


for (let i = 1; i <= 10; i++) {
  let found = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === i) {
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(i);
  }
}
//------------------------------------------------------------------------------------------------------------

// Approach 3: Using filter()


let missing = Array.from({ length: 10 }, (_, i) => i + 1)  // [1..10]
  .filter(num => !arr.includes(num));

console.log(missing); // [2, 3, 4, 5, 7, 9, 10]

//---------------------------------------------------------------------------------------------------------

//  Approach 4: Using Set for faster lookup

let set = new Set(arr);
let missing1 = [];

for (let i = 1; i <= 10; i++) {
  if (!set.has(i)) {
    missing1.push(i);
  }
}

console.log(missing1); // [2,3,4,5,7,9,10]

//--------------------------------------------------------------------------------------------------------

//  Approach 5: Using while loop
;
let i = 1;

while (i <= 10) {
  if (!arr.includes(i)) {
    console.log(i);
  }
  i++;
}
//------------------------------------------------------------------------------------------------------------------

//  Approach 6: Using reduce()


let missing2 = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, num) => {
  if (!arr.includes(num)) acc.push(num);
  return acc;
}, []);

console.log(missing2); // [2,3,4,5,7,9,10]