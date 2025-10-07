// Input:'Employee123SH78R24' Print only the alphabets

// Without inbuilt methods (looping, ASCII checks)
// 1) for loop + ASCII ranges
const s = "Employee123SH78R24";
let out = "";

for (let i = 0; i < s.length; i++) {
  const c = s[i];
  const code = c.charCodeAt(0);
  const isUpper = code >= 65 && code <= 90;   // A–Z
  const isLower = code >= 97 && code <= 122;  // a–z
  if (isUpper || isLower) out += c;
}
console.log(out); // EmployeeSHR

//-------------------------------------------------------------------------------------------------------

// 2) while loop

let out1 = "";
let j = 0;

while (j < s.length) {
  const code = s.charCodeAt(j);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) out += s[j];
  j++;
}
console.log(out1); // EmployeeSHR

//--------------------------------------------------------------------------------------------------

// 3) do...while loop

let out2 = "";
let k = 0;

do {
  const code = s.charCodeAt(k);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) out += s[k];
  k++;
} while (k < s.length);

console.log(out2); // EmployeeSHR
//------------------------------------------------------------------------------------------------------------------------

// 4) for...of loop (build result)

let out3 = "";

for (const ch of s) {
  const code = ch.charCodeAt(0);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) out3 += ch;
}
console.log(out3); // EmployeeSHR


// (Variation: instead of building a string, you can console.log(ch) inside the if to print letters one by one.)
//------------------------------------------------------------------------------------------

// With inbuilt methods
// 5) Regex remove non-letters (fast & clean)

const out4 = s.replace(/[^A-Za-z]/g, "");
console.log(out4); // EmployeeSHR

//-----------------------------------------------------------------------------------------------------
// Unicode-aware version (keeps letters from any language):

const out5 = s.replace(/[^\p{L}]/gu, "");
console.log(out5); // EmployeeSHR

//------------------------------------------------------------------------------------------------------------

// 6) Regex match letters, then join

const out6 = (s.match(/[A-Za-z]+/g) || []).join("");
console.log(out6); // EmployeeSHR

//--------------------------------------------------------------------------------------------------------

// 7) split + filter + join

const out7 = s
  .split("")
  .filter(ch => /[A-Za-z]/.test(ch))
  .join("");
console.log(out7); // EmployeeSHR

//---------------------------------------------------------------------------------------------------------------
// 8) reduce (functional)

const out8 = [...s].reduce((acc, ch) => {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? acc + ch : acc;
}, "");
console.log(out8); // EmployeeSHR

//------------------------------------------------------------------------------------------------------------------------

// 9) forEach over spread

let out9 = "";
[...s].forEach(ch => {
  const c = ch.charCodeAt(0);
  if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) out9 += ch;
});
console.log(out9); // EmployeeSHR


let only= s.split('').filter(ch=>(ch>='A' && ch<='Z') || (ch>='a' && ch<='z')).join('')
console.log(only);
