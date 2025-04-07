// String = String is a  collection of character. String are used to store and manipulated  text string can be create using the following syntex.
// string can be create both single cort and double cort.
// note = String can not be mutable and String can not be changed.

let a = "shivam"
console.log(a.length)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

let b = 'raman'
console.log(b.length)


// Template literals = Tamplete literals use backtricks insted of quotes to difias a string.
// we can insert variable directly in tamplats literal that is called string literal.
let boy1 = "ram"
let boy2 = "mohan"
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)


// Escape Sequence Characters 
// \n for New line
// \t for tab
// \r for carriage return

let fruit = 'bana\`na'
console.log(fruit)
console.log(fruit.length)
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log(fruit[4])
console.log(fruit[5])
console.log(fruit[6])

//String Property and Method .............

let x = "shivam"
console.log(x.length)

console.log(x.toUpperCase())

console.log(x.toLowerCase())

console.log(x.slice(2))

console.log(x.slice(2,4))

console.log(x.replace("shivam","shubham"))

let y = "shubham"
console.log(x.concat(" is a brother of ",y," ok "))

let friend = "              shubham               "
console.log(friend.trim())