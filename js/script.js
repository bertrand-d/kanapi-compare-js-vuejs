//create product card
function displayCard(item) {
  let section = document.getElementById('items');

  let card = document.createElement('a');
  card.href = 'product.html?id=' + item._id;
  section.appendChild(card);

  let article = document.createElement('article');
  card.appendChild(article);

  let img = document.createElement('img');
  img.src= item.imageUrl;
  img.alt = item.altTxt;
  article.appendChild(img);

  let title = document.createElement('h3');
  title.classList.add('productName');
  title.innerText = item.name;
  article.appendChild(title);

  let description = document.createElement('p');
  description.classList.add('productDescription');
  description.innerText = item.description;
  article.appendChild(description);
}

//create error
function displayError() {
  let titleContainer = document.getElementsByClassName('titles');

  let ourProduct = document.getElementsByTagName('h1');
  ourProduct['0'].style.display= "none";

  let gamme = document.getElementsByTagName('h2');
  gamme['0'].style.display = 'none';

  let message = document.createElement('p');
  message.innerText = "Site indisponible merci de revenir"

  titleContainer['0'].appendChild(message);
}

//fetch call
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("http://localhost:3000/api/products", requestOptions)
.then(response => response.text())
.then(result => JSON.parse(result).forEach(item => {
  displayCard(item);
}))
.catch(error => {
  displayError();
  console.log('error', error)
  }
);