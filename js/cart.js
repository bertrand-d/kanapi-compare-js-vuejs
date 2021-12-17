let cart = JSON.parse(localStorage.getItem('cart'));

//item card
function displayCard(item) {
    let section = document.getElementById('cart__items');

    let article = document.createElement('article');
    article.classList.add('cart__item');
    article.dataset.id = item.id;
    article.dataset.color = item.color;
    section.appendChild(article);

    let cartItemImg = document.createElement('div');
    cartItemImg.classList.add('cart__item__img');
    article.appendChild(cartItemImg);

    let img = document.createElement('img');
    img.src = item.imgUrl;
    cartItemImg.appendChild(img);

    let cartItemContent = document.createElement('div');
    cartItemContent.classList.add('cart__item__content');
    article.appendChild(cartItemContent);

    let cartItemDescription = document.createElement('div');
    cartItemDescription.classList.add('cart__item__content__description');
    cartItemContent.appendChild(cartItemDescription);

    let name = document.createElement('h2');
    name.innerText = item.name;
    cartItemDescription.appendChild(name);

    let color = document.createElement('p');
    color.innerText = item.color;
    cartItemDescription.appendChild(color);

    let price = document.createElement('p');
    price.classList.add('price');
    price.innerText = item.price * item.quantity + " €";
    cartItemDescription.appendChild(price);

    let cartSettings = document.createElement('div');
    cartSettings.classList.add('cart__item__content__settings');
    cartItemContent.appendChild(cartSettings);

    let cartSettingsQuantity = document.createElement('div');
    cartSettingsQuantity.classList.add('cart__item__content__settings__quantity');
    cartSettings.appendChild(cartSettingsQuantity);

    let pQuantity = document.createElement('p');
    pQuantity.innerText = 'Qté :';
    cartSettingsQuantity.appendChild(pQuantity);

    let inputQuantity = document.createElement('input');
    inputQuantity.classList.add('itemQuantity');
    inputQuantity.setAttribute('type', 'number');
    inputQuantity.setAttribute('name', 'itemQuantity');
    inputQuantity.setAttribute('min', '1');
    inputQuantity.setAttribute('max', '100');
    inputQuantity.setAttribute('value', item.quantity);
    cartSettingsQuantity.appendChild(inputQuantity);

    let cartItemContentDelete = document.createElement('div');
    cartItemContentDelete.classList.add('cart__item__content__settings__delete');
    cartSettings.appendChild(cartItemContentDelete);

    let deleteBtn = document.createElement('p');
    deleteBtn.classList.add('deleteItem');
    deleteBtn.innerText = 'Supprimer';
    cartItemContentDelete.appendChild(deleteBtn);
}

//display the card
cart.forEach(sofa => {
    displayCard(sofa)
});


//total price and quantity of the cart
function displayTotal(cartContent) {
    let totalPrice = 0;
    let totalQuantity = 0;

    for (let i =0; i < cartContent.length; i++) {
        let allPrices = cartContent[i].price * cartContent[i].quantity;
        let allQuantities = cartContent[i].quantity;
        totalPrice += allPrices;
        totalQuantity += parseInt(allQuantities);
    }

    let subTotal = document.getElementById('totalPrice');
    subTotal.innerText = totalPrice;

    let subQuantity = document.getElementById('totalQuantity');
    subQuantity.innerText = totalQuantity;
}
displayTotal(cart);

//delete card
let deleteBtn = document.getElementsByClassName('deleteItem');

Array.from(deleteBtn).forEach(button => {
    button.addEventListener('click', function() {
        cart = JSON.parse(localStorage.getItem('cart'));
        let id = button.closest('article').getAttribute('data-id');
        let color = button.closest('article').getAttribute('data-color');
        let article = button.closest('article');

        for(let i = 0; i < cart.length; i++){
            if( id === cart[i].id && color === cart[i].color) {
                cart.splice(i, 1);
                article.parentElement.removeChild(article);
                localStorage.setItem('cart', JSON.stringify(cart));
                displayTotal(cart);
                console.log('sofa supprimé', cart);
            }
            if(cart.length === 0) {
                localStorage.clear()
            }
        }
    })
});

//edit quantity
let itemQuantity = document.getElementsByClassName('itemQuantity');

Array.from(itemQuantity).forEach(quantity => {
    quantity.addEventListener('change', function(){
        let inputQuantity = this.value;
        let id = quantity.closest('article').getAttribute('data-id');
        let color = quantity.closest('article').getAttribute('data-color');
        let price = quantity.closest('.cart__item__content').getElementsByTagName('p')[1];

        for(let i = 0; i < cart.length; i++){
            if(id === cart[i].id && color === cart[i].color) {
                cart[i].quantity = inputQuantity;
                let originPrice = cart[i].price;
                localStorage.setItem('cart', JSON.stringify(cart)); 
                displayTotal(cart);
                price.innerText = parseInt(originPrice) * parseInt(inputQuantity) + " €";
            }
        }
    })
})

//form
function checkName(value) {
    let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return regexName.test(value);
}