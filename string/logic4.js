// print vowels in a sentence and print their total count


// 1. Without inbuilt methods → for loop + ASCII
let str = "Hello World, this is JavaScript!";
let vowels = "";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowels += str[i] + " ";
    count++;
  }
}

console.log("Vowels:", vowels.trim());
console.log("Total vowels:", count);

//---------------------------------------------------------------------------------------------------------------

// 2. Using for...of loop

let vowels1 = "";
let count1 = 0;

for (let ch of str) {
  let c = ch.toLowerCase();
  if ("aeiou".includes(c)) {
    vowels1 += ch + " ";
    count1++;
  }
}

console.log("Vowels:", vowels1.trim());
console.log("Total vowels:", count1);

//-----------------------------------------------------------------------------------------------------
// 3. Using while loop

let i = 0, vowels2 = "", count2 = 0;

while (i < str.length) {
  let ch = str[i].toLowerCase();
  if ("aeiou".includes(ch)) {
    vowels2 += str[i] + " ";
    count2++;
  }
  i++;
}

console.log("Vowels:", vowels.trim());
console.log("Total vowels:", count);

//-----------------------------------------------------------------------------------------------------------------
// 4. Using split() + filter()


let vowelArr = str.split("").filter(ch => "aeiouAEIOU".includes(ch));
console.log("Vowels:", vowelArr.join(" "));
console.log("Total vowels:", vowelArr.length);

//------------------------------------------------------------------------------------------------------------------------------
// 5. Using reduce()

let result = [...str].reduce(
  (acc, ch) => {
    if ("aeiouAEIOU".includes(ch)) {
      acc.vowels.push(ch);
      acc.count++;
    }
    return acc;
  },
  { vowels: [], count: 0 }
);

console.log("Vowels:", result.vowels.join(" "));
console.log("Total vowels:", result.count);