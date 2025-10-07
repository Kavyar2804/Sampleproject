
// Input: “The OTP for the transaction of Rs. 143.32 is 456732.”
// Extract and validate the OTP.
//Rules: OTP should be numeric and length 6 digits

//  Approach 1: Regex (cleanest, inbuilt method)

const input = "The OTP for the transaction of Rs. 143.32 is 456732.";

const match = input.match(/\b\d{6}\b/); // find exactly 6 digits

if (match) {
  const otp = match[0];
  console.log("Extracted OTP:", otp);

  if (/^\d{6}$/.test(otp)) {
    console.log("Valid OTP");
  } else {
    console.log("Invalid OTP ");
  }
} else {
  console.log("No OTP found");
}


// Output:

// Extracted OTP: 456732
// Valid OTP 

//-------------------------------------------------------------------------------------------------------

//  Approach 2: Extract all numbers → filter 6-digit


const numbers = input.match(/\d+/g); // extract all numeric sequences
const otp = numbers.find(num => num.length === 6);

if (otp) {
  console.log("Extracted OTP:", otp);
  console.log("Valid OTP");
} else {
  console.log("No valid OTP found");
}


//  numbers = ["143", "32", "456732"] → filter → 456732

//------------------------------------------------------------------------------------------------------

// Approach 3: Manual loop (without regex)

let otp1 = "";
let out = [];

for (let i = 0; i < input.length; i++) {
  let ch = input[i];
  if (ch >= "0" && ch <= "9") {
    otp1 += ch; // otp = otp+ch
  } else {
    if (otp1.length > 0) {
      out.push(otp1);
      otp1 = "";
    }
  }
}
console.log(otp1);

if (otp1.length > 0) out.push(otp1); // push last number
console.log(out);


const validOtp = out.find(num => num.length === 6);

if (validOtp) {
  console.log("Extracted OTP:", validOtp);
  console.log("Valid OTP");
} else {
  console.log("No valid OTP found");
}


//  Works without regex, purely string traversal.

//-----------------------------------------------------------------------------------------------------------
// Approach 4: Functional reduce


const numbers1 = [...input].reduce((acc, ch) => {
  if (ch >= "0" && ch <= "9") {
    acc.current += ch;
  } else {
    if (acc.current) acc.all.push(acc.current);
    acc.current = "";
  }
  return acc;
}, { all: [], current: "" });

if (numbers1.current) numbers1.all.push(numbers1.current);

const otp2 = numbers1.all.find(num => num.length === 6);

console.log(otp2 ? `Extracted OTP: ${otp2}, Valid OTP` : "No valid OTP found");
