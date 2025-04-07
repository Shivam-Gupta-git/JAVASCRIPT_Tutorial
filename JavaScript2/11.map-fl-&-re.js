// Map, Filter and Reduce Method...

// forEach loop = calls a function, once for each array element.
let num3 = [2, 4, 6, 7, 9]
num3.forEach((element) => {
    console.log(element * element)
})

// Array Map() Method = Create a new array by performing some operation on each array element .
let arr = [11, 16, 19, 22]
let a = arr.map((value, )=>{
    console.log(value)
    return value + 1
})
console.log(a)

// another Example..
let arr1 = [11, 16, 19, 22]
let a1 = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + 1
})
console.log(a1)

// Array Filter() Method =  filters an array with value that passes a test and create a new array.
let arr2 = [2, 5, 7, 11, 14, 18, 20]
let a2 = arr2.filter((a)=>{
    return a < 10
})
console.log(a2)

// Array Reduce() method = reduce an array to a single value. 
let arr3 = [3, 5, 2, 1, 6, 8]
let a3 = arr3.reduce((a, b)=>{
    return a + b
}) 
console.log(a3)