// 1. Without inbuilt methods → Using % and Math.floor

let num = 12345;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;           // get last digit
    reversed = reversed * 10 + digit; // build reversed number
    num = Math.floor(num / 10);     // remove last digit
}

console.log(reversed);


// 👉 Output:

// 54321
//------------------------------------------------------------------------------------------

// 2. With recursion

function reverseNumber(num, rev = 0) {
    if (num === 0) return rev;
    return reverseNumber(Math.floor(num / 10), rev * 10 + (num % 10));
}

console.log(reverseNumber(12345));

//--------------------------------------------------------------------------------------------

// 3. With inbuilt methods (toString, split, reverse, join)

let number = 12345;

let reversedd = Number(num.toString().split("").reverse().join(""));

console.log(reversedd);

//--------------------------------------------------------------------------------------------

// 4. With inbuilt methods (Array.from)

let n = 12345;

let r = Number(Array.from(String(n)).reverse().join(""));

console.log(r);
//--------------------------------------------------------------------------------------------

// 5. Using reduce

let numberr = 12345;

let reverseddd = Number(numberr.toString().split("").reduce((rev, d) => d + rev, ""));

console.log(reverseddd);
