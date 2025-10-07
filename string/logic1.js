//Input :- String s="aaabbc"; Output : a3b2c1

//1. Without inbuilt methods → Simple loop

let s = "aaabbc";
let result = "";
let count = 1;

for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
        count++;
    } else {
        result += s[i] + count;  // append character + count
        count = 1; // reset counter
    }
}

console.log(result);

//Output:

//a3b2c1

//---------------------------------------------------------------------------------------------

//2. Without inbuilt → Using while loop


let resultt = "";
let i = 0;

while (i < s.length) {
    let count = 1;
    while (i + 1 < s.length && s[i] === s[i + 1]) {
        count++;
        i++;
    }
    resultt += s[i] + count;
    i++;
}

console.log(resultt)

//---------------------------------------------------------------------------------------------

//3. With inbuilt methods → Regex match


let resulttt = s.match(/(.)\1*/g)       // groups like ["aaa","bb","c"]
              .map(group => group[0] + group.length) 
              .join("");

console.log(resulttt);

//----------------------------------------------------------------------------------

//4. With inbuilt methods → reduce()


let resultttt = s.split("").reduce((acc, ch) => {
    if (acc.length && acc[acc.length - 1][0] === ch) {
        acc[acc.length - 1] += ch; // append same char
    } else {
        acc.push(ch); // new group
    }
    return acc;
}, [])
.map(group => group[0] + group.length)
.join("");

console.log(resultttt);


