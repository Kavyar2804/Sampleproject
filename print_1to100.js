//Program to write 1-100 without loop

//  1. Recursion (simple & pure JS)
// function printNumbers(n) {
//     if (n > 100) return;   // base condition
//     console.log(n);
//     printNumbers(n + 1);   // recursive call
// }

// printNumbers(1);

// //------------------------------------------------------------------------------------------------

// //  2. Array.from() (JS inbuilt)
// Array.from({ length: 100 }, (_, i) => console.log(i + 1));

// //----------------------------------------------------------------------------------------------------

// //  3. fill() + forEach()
// Array(100).fill().forEach((_, i) => console.log(i + 1));

// //----------------------------------------------------------------------------------------------------
// // 4. Spread operator + map()
// [...Array(100)].map((_, i) => console.log(i + 1));
// //---------------------------------------------------------------------------------------------

// // 5. setTimeout recursion
// let i = 1;
// function printNum() {
//     if (i <= 100) {
//         console.log(i++);
//         setTimeout(printNum, 0); // keeps calling itself
//     }
// }
// printNum();
// //---------------------------------------------------------------------------------------------

// //  6. Using for loop
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// //---------------------------------------------------------------------------------------------

// // 7. Using while loop
// let k = 1;
// while (k <= 100) {
//     console.log(k);
//     k++;
// }
// //---------------------------------------------------------------------------------------------

// //  8. Using do...while loop (just for completeness)
// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 100);





function g(){
    console.log("thank u ahi");
    
    g()
}
g()