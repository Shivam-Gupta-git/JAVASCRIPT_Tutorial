// HTML Attributes..........................

//(1) elem.getAttribute(name) = method is used to get the value of an attribute.
let container = document.getElementById("container")
let a = container.getAttribute("class")
console.log(a)

//(2) elem.hasAttribute(name) = method to check for existence of an attribute.
console.log(container.hasAttribute("style"))
console.log(container.hasAttribute("class"))

//(3) elem.setAttribute(name, value) = method used to set the value of an attribute.
// container.setAttribute("hidden","true")

//(4) elem.removeAttribute(name) = method used to remove the attribute from elem.
// container.removeAttribute("class")

//(5) elem.attribute = method to get the collection of all attributes.
console.log(container.attributes)

// (6) data-attribute = 
console.log(container.dataset)
console.log(container.dataset.game)
console.log(container.dataset.player)