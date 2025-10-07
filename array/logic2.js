// Input a= {10, 20, 30, 40, 50, 60};  b= {20, 25, 30, 40, 50, 65, 70}; Output : {10,25,60,65,70}

// Input example:

let a = [10, 20, 30, 40, 50, 60];
let b = [20, 25, 30, 40, 50, 65, 70];

// 1. Without inbuilt methods → Nested loops

let result = [];

// Elements in a but not in b
for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            found = true;
            break;
        }
    }
    if (!found) result.push(a[i]);
}

// Elements in b but not in a
for (let i = 0; i < b.length; i++) {
    let found = false;
    for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
            found = true;
            break;
        }
    }
    if (!found) result.push(b[i]);
}

console.log(result);

// Output:
// [10, 60, 25, 65, 70]

//---------------------------------------------------------------------------------------------

// 2. Without inbuilt → Using includes() (still no filter)



let results = [];

for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
        results.push(a[i]);
    }
}

for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
        results.push(b[i]);
    }
}

console.log(results);

//---------------------------------------------------------------------------------------------

// 3. With inbuilt methods → filter()

let difff = a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));

console.log(difff);

//---------------------------------------------------------------------------------------------

// 4. With inbuilt methods → Using Set

let setA = new Set(a);
let setB = new Set(b);

let diff = [
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
];

console.log(diff);
