let voters = [
{name:'Bob', age: 30, voted: true},
{name:'Jake', age: 32, voted: true},
{name:'Kate', age: 25, voted: false},
{name:'Sam', age: 20, voted: false},
{name:'Phil', age: 21, voted: true},
{name:'Ed', age: 55, voted: true},
{name:'Habis', age: 54, voted: true},
{name:'Ben', age: 31, voted: false},
{name:'Jeff', age: 43, voted: false},
{name:'Zack', age: 41, voted: true},
{name:'Jain', age: 30, voted: true},
{name:'Eric', age: 19, voted: false}
];
// return an array of only candidates who have voted + return an array of just names

// Approach 1: Basic for loop
let votedCandidates = [];
let votedNames = [];

for (let i = 0; i < voters.length; i++) {
  if (voters[i].voted) {
    votedCandidates.push(voters[i]);       // full object
    votedNames.push(voters[i].name);       // just name
  }
}

console.log(votedCandidates);
console.log(votedNames);

//----------------------------------------------------------------------------------------------------------------

//  Approach 2: filter() + map() (cleaner)
let votedCandidates1 = voters.filter(v => v.voted);
let votedNames1 = voters.filter(v => v.voted).map(v => v.name);

console.log(votedCandidates1);
console.log(votedNames1);

//------------------------------------------------------------------------------------------------------------

// Approach 3: reduce() (functional, single pass)
let { votedCandidates2, votedNames2 } = voters.reduce((acc, v) => {
  if (v.voted) {
    acc.votedCandidates2.push(v);
    acc.votedNames2.push(v.name);
  }
  return acc;
}, { votedCandidates2: [], votedNames2: [] });

console.log(votedCandidates2);
console.log(votedNames2);

//------------------------------------------------------------------------------------------------------------------

//  Approach 4: Using for...of loop
let votedCandidates3 = [];
let votedNames3 = [];

for (let voter of voters) {
  if (voter.voted) {
    votedCandidates3.push(voter);
    votedNames3.push(voter.name);
  }
}

console.log(votedCandidates3);
console.log(votedNames3);

//----------------------------------------------------------------------------------------------------------------------------

// Approach 5: Using forEach()
let votedCandidates4 = [];
let votedNames4 = [];

voters.forEach(voter => {
  if (voter.voted) {
    votedCandidates4.push(voter);
    votedNames4.push(voter.name);
  }
});

console.log(votedCandidates4);
console.log(votedNames4);