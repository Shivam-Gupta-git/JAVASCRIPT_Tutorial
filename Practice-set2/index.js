let bag_button = document.querySelector(".bag-button")
let wis_button = document.querySelector(".wish-button")
let bag_button1 = document.querySelector(".bag-button1")
let text1 = document.querySelector("#text1")

let on1 = 0;
bag_button.addEventListener("click",()=>{
 cartQuantity += 1;
 text1.innerHTML = `Your Bag has ${cartQuantity} items`;
//  if(cartQuantity >= 1){
//     bag_button.style.backgroundColor = "red"
//  }else if(cartQuantity < 1){
//     bag_button.style.backgroundColor = "rgb(165, 249, 165)"
//  }
})

wis_button.addEventListener("click",()=>{
    cartQuantity -= 1;
    text1.innerHTML = `Your Bag has ${cartQuantity} items`;
    if(cartQuantity <= 0){
        cartQuantity = 0;
    }
})

bag_button1.addEventListener("click",()=>{
    cartQuantity += 2;
    text1.innerHTML = `Your Bag has ${cartQuantity} items`
})
let cartQuantity = 0;
text1.innerHTML = `Your Bag has ${cartQuantity} items`;