// function is a type of black-box to take a input and give the output analyzing that input.
function onePlusAvg(x, y){
    console.log("Done")
/*return 1+(x + y)/2*/
return 1+(x+y)
}

let a = 3;
let b = 5;
let c = 7;

console.log("one plus average of a and b is",onePlusAvg(a,b))
console.log("one plus average of c and b is",onePlusAvg(c,b))
console.log("one plus average of a and c is",onePlusAvg(a,c))

// 2nd method...
const sum = (p,q)=>{
    return p+q
}
let p = 5;
let q = 9;
let r = 4;
console.log("sum of p and q is ",sum(p,q))
console.log("sum of p and r is ",sum(p,r))
console.log("sum of r and q is ",sum(r,q))