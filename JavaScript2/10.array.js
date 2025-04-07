// Array = Array are variable which can hold more than one value. Array can be used to store different type of variable.  
// note = Array can be mutable and Arrays can be Changed.
// note = Arrays can hold many value under a single name.

let students_marks = [66, 33, 55, 44, false, "not present"]

console.log(students_marks[0])
console.log(students_marks[1])
console.log(students_marks[2])
console.log(students_marks[3])
console.log(students_marks[4])
console.log(students_marks[5])

 students_marks[6] = 34 // Add a new value to the Array
students_marks[0] = 88 // Change the value of an Array 

console.log(students_marks)
console.log(students_marks.length)
console.log(typeof students_marks)

// Array Method...............

// 1. tostring() = Convert an array to a String
let num = [33, 55, 44, 88]
let b = num.toString()
console.log(b)

//2. join() = Join all the array elements using a seperator.
let c = num.join("and")
console.log(c)

//3. pop() = remove last element of an array.
num.pop()
console.log(num)

//4. push = Add a new element at the end of the Array.
num.push(7)
console.log(num)

//5. Shift() = Remove first element and return it
num.shift()
console.log(num)

//6. unshift() = Add element to the beginning return new array lenght.
num.unshift(22)
console.log(num)

//7. delete() = Array elements can be deleted using the delete operator.
delete num[0]
console.log(num)
console.log(num.length)

//8. Concat = Used to join arrays to the given array
let a1 = [2, 4, 6]
let a2 = [1, 3, 5]
let a3 = [9,11,13]
 let newArray = a1.concat(a1, a2, a3)
console.log(newArray)

//9. sort() = sort method is used to sort an array alphabetically. 
let digit = [2, 5, 3, 7, 9, 1, 8]
digit.sort()
console.log(digit)

//10. reverse() = reverse the element in the source array. 
let num1 = [2, 4, 6, 1, 8]
num1.reverse()
console.log(num1)

//11. splice() = splice can be used to add new item to an array.
let num2 = [3, 6, 10, 55, 33, 88]
num2.splice(2, 6, 99, 101, 115, 432)
console.log(num2)

//12. slice() = slice out a piece from an array it create a new array.


// using loops with array ...........

// forEach loop = calls a function, once for each array element.
let num3 = [2, 4, 6, 7, 9]
num3.forEach((element) => {
    console.log(element * element)
})

// Array from = used to creat an array front any other object.
let name1 = "shivam"
let arr = Array.from(name1)
console.log(arr)

let num4 = [2, 5, 7, 9, 11]
// for of loop..
for (let item1 of num4){
    console.log(item1)
}

// for in loop..
for(let item2 in num4){
    console.log(num4[item2])
}


