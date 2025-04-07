let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
// let currentDisplay = '';
// document.querySelector("#display")
let Computer_display = document.querySelector(".display .computer")
let user_display = document.querySelector(".display .user")
let result = document.querySelector(".display .result")


btn1.addEventListener("click",()=>{
    user_display.innerHTML = "User: Bat"
    let randomNumber = Math.random() * 3;
    // display.innerText = (randomNumber); 
    if(randomNumber > 0 && randomNumber <= 1){
        Computer_display.innerText = "Computer: Bat"
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        Computer_display.innerText = "Computer: Ball"
    }
    else{
        Computer_display.innerText = "Computer: Stump"
    }

    if(Computer_display.innerText === "Computer: Ball"){
      result.innerText = "= User Won"
    }
    else if(Computer_display.innerText === "Computer: Bat"){
        result.innerText = "= It's a tie"
    }
    else{
        result.innerText = "= Computer Won"
    }
    
})



btn2.addEventListener("click",()=>{
    user_display.innerHTML = "User: Ball"
    let randomNumber = Math.random() * 3;
    // display.innerText = (randomNumber); 
    if(randomNumber > 0 && randomNumber <= 1){
        Computer_display.innerText = "Computer: Bat"
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        Computer_display.innerText = "Computer: Ball"
    }
    else{
        Computer_display.innerText = "Computer: Stump"
    }

    if(Computer_display.innerText === "Computer: Ball"){
      result.innerText = "= It's a tie"
    }
    else if(Computer_display.innerText === "Computer: Bat"){
        result.innerText = "= Computer Won"
    }
    else{
        result.innerText = "= User Won"
    }
    
})

btn3.addEventListener("click",()=>{
    user_display.innerHTML = "User: Stump"
    let randomNumber = Math.random() * 3;
    // display.innerText = (randomNumber); 
    if(randomNumber > 0 && randomNumber <= 1){
        Computer_display.innerText = "Computer: Bat"
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        Computer_display.innerText = "Computer: Ball"
    }
    else{
        Computer_display.innerText = "Computer: Stump"
    }

    if(Computer_display.innerText === "Computer: Ball"){
      result.innerText = "= Computer Won"
    }
    else if(Computer_display.innerText === "Computer: Bat"){
        result.innerText = "= User Won"
    }
    else{
        result.innerText = "= It's a tie"
    }
    
})


 