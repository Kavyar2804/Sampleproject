//Array program wrt merging 2 arrays - Emp Names and salary, check if a particular name exists, if yes - increment salary by 30%, else keep it as it is.


let empNames = ["John", "Alice", "Bob", "Eve"];
let empSalaries = [30000, 40000, 25000, 50000];
let targetName = "Bob";

// Approach 1: Basic for loop (manual merge)
let result = [];


for (let i = 0; i < empNames.length; i++) {
  if (empNames[i] === targetName) {
    result.push({ name: empNames[i], salary: empSalaries[i] * 1.3 });
  } else {
    result.push({ name: empNames[i], salary: empSalaries[i] });
  }
}

console.log(result);
/*
[
  { name: 'John', salary: 30000 },
  { name: 'Alice', salary: 40000 },
  { name: 'Bob', salary: 32500 },   ✅ incremented
  { name: 'Eve', salary: 50000 }
]
*/

//--------------------------------------------------------------------------------------------------------

// Approach 2: Using map() (cleaner)
let merged = empNames.map((name, i) => {
  return {
    name,
    salary: name === targetName ? empSalaries[i] * 1.3 : empSalaries[i]
  };
});

console.log(merged);

//------------------------------------------------------------------------------------------------------
//Approach 3: Using reduce() (functional)
let updated = empNames.reduce((acc, name, i) => {
  let salary = name === targetName ? empSalaries[i] * 1.3 : empSalaries[i];
  acc.push({ name, salary });
  return acc;
}, []);

console.log(updated);

//--------------------------------------------------------------------------------------------------------

// Approach 4: Convert to Map (for faster lookup if large dataset)
let salaryMap = new Map();
empNames.forEach((name, i) => salaryMap.set(name, empSalaries[i]));

if (salaryMap.has(targetName)) {
  salaryMap.set(targetName, salaryMap.get(targetName) * 1.3);
}

console.log([...salaryMap]); 
// [['John', 30000], ['Alice', 40000], ['Bob', 32500], ['Eve', 50000]]

//--------------------------------------------------------------------------------------------------------

// Approach 5: Object-based merging
let empObj = {};
empNames.forEach((name, i) => empObj[name] = empSalaries[i]);

if (empObj[targetName]) {
  empObj[targetName] *= 1.3;
}

console.log(empObj);
// { John: 30000, Alice: 40000, Bob: 32500, Eve: 50000 }