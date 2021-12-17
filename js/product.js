//get id product
function getId() {
    const param = window.location.search;
    const id = param.replace('?id=', '');
    return id
}

//create product
function displayProduct(item) {
  let imgContainer = document.getElementsByClassName('item__img');

  let img = document.createElement('img');
  img.setAttribute('id', 'img-product');
  img.src = item.imageUrl;
  img.alt = item.altTxt;
  imgContainer['0'].appendChild(img);

  let title = document.getElementById('title');
  title.innerText = item.name;

  let price = document.getElementById('price');
  price.innerText = item.price;

  let description = document.getElementById('description');
  description.innerText = item.description;
  
  item.colors.forEach(element => {
    let colorContainer = document.getElementById('colors');
    let colorOption = document.createElement('option');
    colorOption.value = element ;
    colorOption.innerText = element;
    colorContainer.appendChild(colorOption);
  });
}

//cart
let cart = [];
let addButton = document.getElementById('addToCart');

addButton.addEventListener('click', e => {
  let id = getId();
  let name = document.getElementById('title').textContent;
  let price = document.getElementById('price').textContent;
  let imgUrl = document.getElementById('img-product').getAttribute('src');
  let description = document.getElementById('description').textContent;
  let color = document.getElementById('colors').value;
  let quantity = document.getElementById('quantity').value;

  let sofa = {
    id : id,
    name : name,
    price: price,
    imgUrl : imgUrl,
    description : description,
    color : color,
    quantity : quantity
  }

  let isPresent = false;
  let isNewColor = false;

  if(localStorage.getItem('cart') === null) {
    cart.push(sofa)
    console.log('nouveau sofa local storage vide')
  } 
  
  else {
    cart = JSON.parse(localStorage.getItem('cart'));

    for(let i = 0; i < cart.length; i++) {
      if (sofa.id === cart[i].id && sofa.color === cart[i].color && isNewColor === false) {
        isPresent = true;
        console.log('sofa déjà existant');
        cart[i].quantity = parseInt(quantity) + parseInt(cart[i].quantity);
      } 

      if (sofa.id === cart[i].id && sofa.color != cart[i].color && isNewColor === true) {
        isNewColor = true;
        isPresent = true;
        cart.push(sofa)
        console.log('sofa avec couleur différente')
      }
    }

    if(isPresent === false) {
      cart.push(sofa)
      console.log('nouveau sofa local storage déjà rempli')
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  setTimeout(function(){ 
    window.location.replace("cart.html");
  }, 1000);
});

//fetch call
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://localhost:3000/api/products/" + getId(), requestOptions)
.then(response => response.text())
.then(result =>  {
  let sofa = JSON.parse(result)
  displayProduct(sofa)
  })
.catch(error => console.log('error', error));