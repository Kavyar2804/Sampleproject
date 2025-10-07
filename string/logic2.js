	//Input : daimler Output : DaImLeR

    //1. Without inbuilt methods → ASCII logic

    let s = "daimler";
let result = "";

for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);

    if (i % 2 === 0) { 
        // even index → uppercase (a–z → A–Z)
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += s[i]; // keep as is
        }
    } else {
        // odd index → lowercase (A–Z → a–z)
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += s[i];
        }
    }
}

console.log(result);

//Output :

//DaImLeR

//-----------------------------------------------------------------------------------------------

//2. Without inbuilt methods → for...of loop with counter

let resultt = "";
let index = 0;

for (let ch of s) {
    let code = ch.charCodeAt(0);
    if (index % 2 === 0) {
        resultt += String.fromCharCode(code >= 97 ? code - 32 : code);
    } else {
        resultt += String.fromCharCode(code <= 90 ? code + 32 : code);
    }
    index++;
}

console.log(resultt);

//--------------------------------------------------------------------------------------

//  3. With inbuilt methods → toUpperCase() and toLowerCase()

let result3 = "";

for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
        result3 += s[i].toUpperCase();
    } else {
        result3 += s[i].toLowerCase();
    }
}

console.log(result);

//-----------------------------------------------------------------------------------------------

// 4. With inbuilt methods → map() + join()


let result4 = s
    .split("")
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

console.log(result4);
//---------------------------------------------------------------------------------------------
// 5. With inbuilt methods → reduce()

let result5 = s.split("").reduce((acc, ch, i) => 
    acc + (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()), 
"");

console.log(result5);

