// 1. Without inbuilt methods (basic for loop)

let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
//Output:

// 2
// 4
// 6
// 8
// 10
//-----------------------------------------------------------------------------------------

// 2. Without array at all (just loop 1–10)

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Output:

// 2
// 4
// 6
// 8
// 10
//----------------------------------------------------------------------------------------

// 3. Using while loop

let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

//--------------------------------------------------------------------------------------------

// 4. Using for...of loop

let numberss = [1,2,3,4,5,6,7,8,9,10];

for (let num of numberss) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
//-------------------------------------------------------------------------------------------

// 5. With inbuilt methods → filter()

let number = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = number.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Output:
// [ 2, 4, 6, 8, 10 ]

//--------------------------------------------------------------------------------------------

// 6. With inbuilt methods → forEach()

let n = [1,2,3,4,5,6,7,8,9,10];

n.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});
//------------------------------------------------------------------------------------------

// 7. With inbuilt methods → map() + filter logic
let numbersss = [1,2,3,4,5,6,7,8,9,10];

numbersss.map(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});