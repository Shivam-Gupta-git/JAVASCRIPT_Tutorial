// Q.1 use logical operator to find whether the age of a person lies between 10 to 20 ?
/*
let age = prompt("What is your age?")
if(age>10 && age<20){
    alert("Your age lies between 10 to 20");
}
else{
  alert("Your age doesnt lies between 10 to 20");
}
*/

//Q.2 Demonstrate the use of switch case statment in javascript ?
/*
let age = prompt("What is your age?")
switch(age){
    case "12":
        alert("your age is 12");
        case "13":
            alert("your age is 13");
            case "14":
                alert("your age is 14");
                case "15":
                    alert("your age is 15")
                    default:
                        alert("your age is not special")
}
*/

// Q.3 Write a javascript programm to find whether a number is divisible by 2 and 3 ?
/*
let num = prompt("What is your number")
num = Number.parseInt(num)

 if(num % 2 == 0 && num % 3 ==0){
    alert("Your number is divisible by  2 and 3");
}
else{
    alert("Your number is not divisible by 2 and 3");
}
*/

// Q.4  Write a javascript programm to find whether a number is divisible by 2 or 3 ?
/*
let num = prompt("What is your number?")
num = Number.parseInt(num)
if(num % 2 == 0){
    alert("Your number is divisible by 2");
}
else if(num % 3 == 0){
    alert("Your number is divisible by 3");
}
 else{
    alert("Your number is not divisible by 2 or 3");
}
*/

//Q.5 Write a program that determines whether a given number is positive or not?

let a = prompt("Enter the any number")
a = Number.parseInt(a)
if(a>=0){
    alert("The number is positive number")
}
else{
    alert("The number is negative number")
}

//Q.6 Write a program that checks if a number is even or odd ?
let b = prompt("Enter the number")
if(b % 2 == 0){
    alert("This is even number ")
}
else{
    alert("This is odd number")
}

// Q.7 Write a program that assigns a letter based on a numerical grade.
let score = prompt("Enter your number");
if(score>=90){
    alert(" You have Assign grade A")
}
else if(score>=80){
    alert(" You have Assign grade B")
}
else if(score>=70){
    alert(" You have Assign grade C")
}
else if(score>=60){
    alert(" You have Assign grade D")
}
else if(score<60){
    alert(" Sorry you dont have Assign any grade")
}

//Q.8 Write a program that calculate the ticket price on age.
let age = prompt("Please enter your valid age")
age = Number.parseInt(age)
if(age<5){
    alert("Your tickt is free ")
}
else if(age >= 5 && age <15){
    alert("Your ticket price is: 5$")
}
else if(age >= 15 && age < 30){
    alert("Your ticket price is: 10$")
}
else if(age >= 30 && age < 50){
    alert("Your ticket price is: 20$")
}
else if(age > 50){
    alert("Your ticket price is: 30$")
}

//Q.9 Write a program that calculate a discount based on the purchase amount.
let amount = prompt("Enter your purchase amount")
let discount;
if(amount>=1000){
    discount = 30;
}
else if(amount>=500 && amount <1000){
    discount = 20
}
else if (amount>=100 && amount <500){
    discount = 10
}
else{
    discount = 0
}
alert("Discount:" + discount + "%")