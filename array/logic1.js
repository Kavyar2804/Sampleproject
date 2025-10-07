    // Input: ["r","a","c","e","c","a","r"] Output: Print the non-repeated character
    
// 1. Without inbuilt methods → Nested loops

let arr = ["r","a","c","e","c","a","r"];
let nonRepeated = null;

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count === 1) {
        nonRepeated = arr[i];
        break; // first non-repeated character
    }
}

console.log(nonRepeated);


// ✅ Output:
// e

//----------------------------------------------------------------------------------------

// 2. Without inbuilt → Using object (frequency map)
let array = ["r","a","c","e","c","a","r"];
let freq = {};

// Count occurrences
for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]]++;
    } else {
        freq[arr[i]] = 1;
    }
}

// Find first non-repeated
for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
        console.log(arr[i]);
        break;
    }
}
//-------------------------------------------------------------------------------------------

// 3. With inbuilt methods → indexOf & lastIndexOf

let a = ["r","a","c","e","c","a","r"];

let nonRep = a.find(ch => a.indexOf(ch) === a.lastIndexOf(ch));

console.log(nonRep);
//-------------------------------------------------------------------------------------------

// 4. With inbuilt methods → reduce + Object

let arrr = ["r","a","c","e","c","a","r"];

let freqq = arrr.reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
}, {});

let nonRepeatedd = arrr.find(ch => freqq[ch] === 1);

console.log(nonRepeatedd);
