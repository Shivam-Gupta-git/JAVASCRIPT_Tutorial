let display = document.querySelector("#display h1")
let age = document.querySelector("#age").value
let male = document.querySelector("#male").value
let female = document.querySelector("#female").value
let submit = document.querySelector(".submit")


submit.addEventListener("click",()=>{
  if(gender == male){
    display.innerText = "40% Discount"
  }
})
