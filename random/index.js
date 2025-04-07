let bagItems = [];
onLoad();

function onLoad(){
    let bagItemsStr = bagItems = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemOnHomePage();
    displayBagIcon()

}



function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerText = bagItems.length;
    if(bagItems.length > 0){
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function addToBag(itemId){
    bagItems.push(itemId);
    displayBagIcon();
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
}

function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container')
    if(!itemsContainerElement){
        return;
    }

    let innerHTML = '';
    items.forEach(item=>{

        innerHTML += `<div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="">
        <div class="rating">
            ${item.rating}⭐️ || 100
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="original-price">MRP RS ${item.original_price}</span>
            <span class="current-price">RS ${item.current_price}</span>
            <span class="discount">(${item.discount}% OFF!)</span>
        </div>
        <button class="btn-add-bag" onclick=" addToBag(${item.id})">Add to Bag</button>
        </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
}
