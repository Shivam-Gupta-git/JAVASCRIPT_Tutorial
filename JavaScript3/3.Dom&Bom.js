//window object = window object represent browser window and provides methods to control it. it is a global object.

// console.log(document.body)

//Document Object Modle (DOM) = Dom represent the page content as HTML 
// document body -> page body as Js object
// Example =  document.body.style.background = "yellow"

// Browser Object Modle (BOM) = Bom represent additional object provide by the browser(host enviroment)for working with everything expect the document. the function alert, confirm, prompt are also a part of Bom

// SEARCHING THE DOM...............

// (1). document.getElementById = This method is used to get the element with a given "Id" attribute.

// (2). document.querrySelectorAll = Returns all element inside an element matching the given css selector.

// (3). document.querrySelector = Return the first element fot the given css selector a efficient version of elem.querrySelectorAll(css)[0]

// (4). document.getElementsByTagName = Returns element with the given tag name.

// (5). document.getElementsByClassName = Return element that have the given css class.

// (6). document.getElementByName = Searches element by the name attribute.

// Main Points of DOM ...............

// (1). Selection of an element
let a = document.querySelector("#container1 .box1 h1")

// (2).Changing HTML
  let b = document.querySelector("#container1 .box2 h1")
  b.innerHTML = "Shivam Gupta"

// (3).Changing CSS 
let c = document.querySelector("#container1  .box3 h1")
c.style.color = "yellow"
c.style.fontSize = "50px"
c.style.backgroundColor = "pink"

// (4).Event lestener
let d = document.querySelector("#container1 .box4")
let on = 0
    d.addEventListener("click",()=>{
        if(on == 0){
            d.style.backgroundColor = "red"
            on = 1
        }
        else{
            d.style.backgroundColor = " gray"
            on = 0
        }
 })

//  Practice 1

let bulb = document.querySelector("#container2 .box1")
let btn = document.querySelector("#container2 .btn1")

let count = 0
btn.addEventListener("click",()=>{
    if(count == 0){
        bulb.style.backgroundColor = "yellow"
        count = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        count = 0
    }   
})