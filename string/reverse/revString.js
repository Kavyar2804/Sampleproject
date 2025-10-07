// 1. Without inbuilt methods → simple for loop (backwards)

let str = "HelloWorld";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);


// Output:

// dlroWolleH

//---------------------------------------------------------------------------------------------

// 2. Without inbuilt methods → while loop

let s = "HelloWorld";
let r = "";

let i = s.length - 1;
while (i >= 0) {
    r += s[i];
    i--;
}

console.log(r);
//--------------------------------------------------------------------------------------------

// 3. Without inbuilt methods → for...of loop (prepend trick)

let string = "HelloWorld";
let rev = "";

for (let ch of string) {
    rev = ch + rev;  // prepend instead of append
}

console.log(rev);
//---------------------------------------------------------------------------------------------

// 4. Recursive approach

function reverse(str) {
    if (str === "") return "";
    return reverse(str.substr(1)) + str[0];
}

console.log(reverse("HelloWorld"));
//---------------------------------------------------------------------------------------------

// 5. With inbuilt methods → split(), reverse(), join()

let ss = "HelloWorld";

let rr = ss.split("").reverse().join("");

console.log(rr);
//---------------------------------------------------------------------------------------------

// 6. With inbuilt methods → spread operator

let sss = "HelloWorld";

let rrr = [...sss].reverse().join("");

console.log(rrr);

//--------------------------------------------------------------------------------------------

// 7. With inbuilt methods → reduce()

let stringg = "HelloWorld";

let reversedd = str.split("").reduce((rev, ch) => ch + rev, "");

console.log(reversedd);