let n=[2,5,7,8,6,9]
// let r = n.filter(n=>n%2===0)
// console.log(r);
// let b = n.map(r=>r+10)
// console.log(b);

let evenum= n.filter((ele,ind)=>{return ele%2===0 && ind%2===0})
console.log(evenum);


// let g= n.reduce((a,b)=> {return a+b})
// console.log(g);


// let chocolates = ["dark", "white", "dark", "milk", "dark"];

// let f = chocolates.filter(n=>n==='dark')
// console.log(f);

// let d = chocolates.map(f=>f+'choco')
// console.log(d);

let fruits = ["apple", "banana", "kiwi", "mango"];
let res= fruits.filter(ele=>ele.includes('a'))
console.log(res);

