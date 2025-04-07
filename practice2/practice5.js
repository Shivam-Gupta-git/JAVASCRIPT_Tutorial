//Q.1 Create an array of numbers and take input from the user to add numers to the array. 
// let arr1 = [2, 4, 6, 7, 10]
// let a1 = prompt("Enter a number")
// a = Number.parseInt(a1)
// arr1.push(a1)
// alert(arr1)


//Q.2 Keep adding number to the array in 1 until 0 is called to the array..

// let arr2 = [2, 5, 7, 9]
//let a2;
//do{
  //  a2 = prompt("Enter any number")
   // a2 = Number.parseInt(a2)
   // arr2.push(a2)
//}
//while(a2 != 0);
//alert(a2)

//Q.3 filter for number divisible by 10 from a given array..
let arr3 = [20, 44, 10, 50, 80, 99, 110]
let a3 = arr3.filter((x)=>{
    return x%10 == 0
})
console.log(a3)

//Q.4 Create an array of sqyare of given number..
let arr4 = [2, 3, 4, 5, 6]
let a4 = arr4.map((y)=>{
    return y*y
})
console.log(a4)