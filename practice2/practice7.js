//Q. Create a navbar and change the color of its first element to red . 
// let nav = document.querySelector("#navbar li")
// nav.style.color = "red"

//Q.2 Create an element with 3 children now change the color of first and last element to green. 
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

// Q.3 write a javaScript code to change background of all <li> tags to cyna .
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.backgroundColor = "red"
})
