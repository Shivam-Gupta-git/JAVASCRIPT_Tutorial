// CONDITIONAL EXPRESSION............
// (Note - only use in brower)
// prompt keyword are use to Asking Anything.
// alert keyword are use to telling Anything.

let a = prompt("Hey whats your age?");
a = Number.parseInt(a);  // Converting the string to a number..
console.log(typeof a);
// If Statement (Condition will be true then Statements are execute and Condition will be not true Statements are not execute)
if(a>0){
    alert("This is valid age");
}
else{
    alert("this is an invaled age");
}

// Nested If Statement.....
let b = prompt("Hey whats your age");
if(b<0){
    alert("This is an invalid age");
}
else if(b<9){
    alert("you are a kid and you cannot even think of driving");
}
else if(b<18 && b>=9){
    alert("you are a kid and you can a think of a drive after 18");
}
else{
    alert("you can now drive as you are above 18");
}
console.log("Done")

// Ternary Operator.............
// Evaluate Condition and Execules a block of code based on the condition 
// (Condition ? exp1 : exp2 )

let c = prompt(" Hey whats your score")
if(c<20){
    alert("Sorry you are not selected");
}
else if(c>=20){
    alert("congrats you are selected");
}
console.log("Yoy can",c>20?"you are selected":"you are not selected")
