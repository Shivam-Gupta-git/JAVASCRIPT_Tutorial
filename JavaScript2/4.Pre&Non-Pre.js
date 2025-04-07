// Premitive and Non-Premitive Data type...
// Premitive have 7 Types.
// 1.Null, 2.Number, 3.String, 4.Symbol, 5.Boolean, 6.BigInt, 7.undefine (NN BB SS U)

let a = null;
let b = 225;
let c = true;
let d = BigInt("557")+BigInt("5");
let e = "shivam"
let f = Symbol("I am Good symbol");
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof e)

// objects in java (objects is a type of non-premitive data type)
const item = {
    "shivam": true,
    "raman": false,
    "ravi": 67,
    "shubham": undefined
}
console.log(item["ravi"])
