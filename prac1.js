let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];

let nonzero = arr.filter(n=>n!==0)
let zero = arr.filter(n=>n==0)
let newar= nonzero.concat(zero)
console.log(newar);

let result =[]
let zcount =0

for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==0)
    {
        result.push(arr[i])
    }
   else
   {
zcount++
   }
    
}
for (let i = 0; i < zcount; i++) {
    result.push(0)
    
    
}
console.log(result);
