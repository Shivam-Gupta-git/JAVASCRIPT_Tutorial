//Q.1 Write a program to print the marks of a student in an object using for in loop .
 
let marks = {
    shivam: 33,
    shubham:44,
    raman:22,
    rohit:20
}
for(let a in marks){
    console.log(" the marks of " + a + " are " +marks[a])
}

//Q.2 Write a program to print "try again" until the usre contes the correct number
let cn = 19
let i
while (i != cn){
    console.log("Try again")
    i = prompt("Enter the correct number")
   
}
console.log(" Thankyou You have enterd the correct number")