// Loops.................

// FOR LOOPS = That Simple Perform Repeated Operation in the basis of the Condition..
for (let i=0 ; i<5; i++){
     console.log(i)
}
// Q. Program to add first n natural number. 
/*
let sum = 0
let n = prompt("Enter the value of n");
n = Number.parseInt
for(let i=0; i<n; i++){
    sum +=(i+1)
}
alert("sum of first" + n + "natural number is " +sum)
*/

 
let obj = {
    shivam: 66,
    raman:55,
    ravi:77,
    pawan:44,
    saurav:57
}
// FOR IN LOOPS = Loops through the keys of an object
for(let a in obj){
    console.log(" marks of "  + a +  " are " +obj[a])
}

// FOR OF LOOPS = Loops through the value of an object
for(let b of "shivam"){
  console.log(b)
}

// WHILE LOOPS = While Condition are true then code will be execute while statement are false then code will be not execute.
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i = 0;
while(i<n){
    alert(i)
    i++;
}

// DO WHILE LOOPS = Do While Loops is a varient of a while loops. they are execute atlist one time 
let m = prompt("Enter the value of n")
m = Number.parseInt(m)
let j = 0;
do{
    alert(j)
    j++;   
}
while(j<m)
