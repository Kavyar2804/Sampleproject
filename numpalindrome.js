//Write a program for palindrome number in JS.

// Approach 1: Convert to String (Simple & Direct)
let num = 121;
let str = num.toString();
let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log(num + " is a palindrome");
} else {
  console.log(num + " is not a palindrome");
}
// Output: 121 is a palindrome

//---------------------------------------------------------------------------------------------------------------------------------------

// Approach 2: Without inbuilt methods (Mathematical Reverse)

let original = num;
let reversed1 = 0;

while (num > 0) {
  let digit = num % 10;         // extract last digit
  reversed1 = reversed1 * 10 + digit; 
  num = Math.floor(num / 10);   // remove last digit
}

if (original === reversed1) {
  console.log(original + " is a palindrome");
} else {
  console.log(original + " is not a palindrome");
}
// Output: 121 is a palindrome

//-------------------------------------------------------------------------------------------------------------------------------
// Approach 3: Using for loop on String

let str1 = num.toString();
let palindrome = true;

for (let i = 0; i < Math.floor(str1.length / 2); i++) {
  if (str1[i] !== str1[str1.length - 1 - i]) {
    palindrome = false;
    break;
  }
}

console.log(palindrome ? num + " is a palindrome" : num + " is not a palindrome");
// Output: 12321 is a palindrome

//----------------------------------------------------------------------------------------------------------------
// Approach 4: Using Recursion
function isPalindrome(num) {
  let str2 = num.toString();
  function check(left, right) {
    if (left >= right) return true;
    if (str2[left] !== str2[right]) return false;
    return check(left + 1, right - 1);
  }
  return check(0, str2.length - 1);
}

console.log(isPalindrome(1221)); // true
console.log(isPalindrome(123));  // false

//-----------------------------------------------------------------------------------------------------------
//  Approach 5: Using Array.every() (Functional)

let str3 = num.toString();

let isPal = str3.split("").every((ch, i) => ch === str3[str3.length - 1 - i]);

console.log(isPal ? num + " is a palindrome" : num + " is not a palindrome");

// Output: 1441 is a palindrome