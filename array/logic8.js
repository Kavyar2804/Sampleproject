// let a=[54,39,100,45] using filter method, remove values above 40 and give a new array


// Approach 1: Using filter()
let a = [54, 39, 100, 45];
let newArr = a.filter(num => num > 40);

console.log(newArr); // [54, 100, 45]

//----------------------------------------------------------------------------------------------------

// Approach 2: Using forEach()

let newArr1 = [];

a.forEach(num => {
  if (num > 40) newArr1.push(num);
});

console.log(newArr1); // [54, 100, 45]

//-----------------------------------------------------------------------------------------------------------

// Approach 3: Using reduce()


let newArr2 = a.reduce((acc, num) => {
  if (num > 40) acc.push(num);
  return acc;
}, []);

console.log(newArr2); // [54, 100, 45]

//---------------------------------------------------------------------------------------------------------

// Approach 4: Using map() + filter(Boolean)

let newArr3 = a
  .map(num => (num > 40 ? num : null))
  .filter(Boolean);

console.log(newArr3); // [54, 100, 45]

//----------------------------------------------------------------------------------------------------------------

// Approach 5: Using while loop

let newArr4 = [];
let i = 0;

while (i < a.length) {
  if (a[i] > 40) newArr4.push(a[i]);
  i++;
}

console.log(newArr4); // [54, 100, 45]

//----------------------------------------------------------------------------------------------------
// Approach 6: Using for loop

let newArr5 = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] > 40) {   // change condition here
    newArr5.push(a[i]);
  }
}

console.log(newArr5); // [54, 100, 45]

