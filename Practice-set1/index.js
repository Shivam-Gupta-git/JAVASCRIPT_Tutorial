let button1 = document.querySelector("#main_container .button")
let on = 0;
button1.addEventListener("click",()=>{
    if(on == 0){
        button1.style.backgroundColor = "red"
        alert("Add to Bag")
        on = 1;
    }
    else{
        button1.style.backgroundColor = "rgba(144, 247, 144, 0.974)"
        on = 0
    }  
})
let button2 = document.querySelector("#main_container #button")
let oon = 0;
button2.addEventListener("click",()=>{
    if(oon == 0){
        button2.style.backgroundColor = "gray"
        alert("Add to WISHLIST")
        oon = 1;
    }
    else{
        button2.style.backgroundColor = "transparent"
        oon = 0
    }  
})