// compare two array  
// comparison means checking if they have the same elements in the same order

// Approach 1: Simple for loop (element by element)
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

if (arr1.length !== arr2.length) {
  console.log("Arrays are not equal");
} else {
  let equal = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
      break;
    }
  }
  console.log(equal ? "Arrays are equal" : "Arrays are not equal");
}

//-------------------------------------------------------------------------------------------------------

// Approach 2: Using every() (functional style)

let equal1 =
  arr1.length === arr2.length &&
  arr1.every((value, index) => value === arr2[index]);

console.log(equal1 ? "Arrays are equal" : "Arrays are not equal");

//---------------------------------------------------------------------------------------------------

//  Approach 3: Using JSON.stringify()


console.log(
  JSON.stringify(arr1) === JSON.stringify(arr2)
    ? "Arrays are equal"
    : "Arrays are not equal"
);


// Simple and clean, but works only for primitive values, not objects inside arrays.

//--------------------------------------------------------------------------------------------------------

//  Approach 4: Using for...of + index

let equal2 = true;

if (arr1.length !== arr2.length) equal = false;
else {
  let i = 0;
  for (let value of arr1) {
    if (value !== arr2[i++]) {
      equal2 = false;
      break;
    }
  }
}

console.log(equal2 ? "Arrays are equal" : "Arrays are not equal");

//-----------------------------------------------------------------------------------------------------
//  Approach 5: Compare ignoring order (unordered comparison)


let equal3 =
  arr1.length === arr2.length &&
  arr1.slice().sort().every((v, i) => v === arr2.slice().sort()[i]);

console.log(equal3 ? "Arrays are equal (ignoring order)" : "Not equal");

//--------------------------------------------------------------------------------------------------------

//  Approach 6: Using Set for unique elements comparison


let set1 = new Set(arr1);
let set2 = new Set(arr2);

let equal4 =
  set1.size === set2.size && [...set1].every(value => set2.has(value));

console.log(equal4 ? "Arrays equal (unique elements)" : "Not equal");
