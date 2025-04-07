// Console object method = The console object has sevral methods, log being one of them. same of them are as follows.

// assert() => used to assert a 
// clear() => clear the console 
// log() => output a message to the console
// table() => display a tabular data 
// warn() => used for warning
// error() => used for error 
// info() => used for special information
// for check all type of console object type => console.table(console)

// ALERT, PROMPT AND CONFIRM.............

// alert("Enter the value of a")
// let a = prompt(" Enter a here","223")
// document.write(a)
// note - 223 is a defelt value that can be easily change and re-write.

// Example - 2
alert("Enter the Number of A")
let a = prompt("Enter B here")
a = Number.parseInt(a)
alert("You entered of a type" + (typeof a))
document.write(a)
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}


