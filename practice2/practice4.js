//Q.1 what will be the following print in javascript. console.log("shi"\`length)
let a = "shi\`"
console.log(a.length)

//Q.2 write a program to convert a given string to lower case
let b = "SHIVAM"
console.log(b.toLowerCase())

//Q.3 Extract the amount out of the string " please give rs 10000" 
let str1 = "please give rs 10000"
let amount = Number.parseInt(str1.slice(15))
console.log(amount)
console.log(typeof amount)

//