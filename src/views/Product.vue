<template>
    <main class="limitedWidthBlockContainer">
    <div class="limitedWidthBlock">
      <section class="item">
        <article v-if="sofa != null">
          <div class="item__img">
            <img :src="sofa.imageUrl" id="img-product" :alt="sofa.altTxt">
          </div>
          <div class="item__content">

            <div class="item__content__titlePrice">
              <h1 id="title">
                {{ sofa.name }}
              </h1>
              <p>Prix : <span id="price">
                  {{ sofa.price }}
                </span>€</p>
            </div>

            <div class="item__content__description">
              <p class="item__content__description__title">Description :</p>
              <p id="description">
                {{ sofa.description }}
              </p>
            </div>

            <div class="item__content__settings">
              <div class="item__content__settings__color">
                <label for="color-select">Choisir une couleur :</label>
                <select name="color-select" id="colors">
                  <option value="">--SVP, choisissez une couleur --</option>
                  <option :value ="color" v-for="color in sofaColor" :key=color.id >{{color}}</option>
                </select>
              </div>

              <div class="item__content__settings__quantity">
                <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
              </div>
            </div>

            <div class="item__content__addButton">
              <button id="addToCart" v-on:click="addToCart">Ajouter au panier</button>
            </div>

          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data(){
      return {
          sofa : {},
          sofaColor: [],
          cart: [],
          apiError : false
      }
  },
  methods: {
      getProductId: function() {
        const param = window.location.search;
        const id = param.replace('?id=', '');
        return id
      },
      addToCart: function() {
        let color = document.getElementById('colors').value;
        let quantity = document.getElementById('quantity').value;
          
        let product = {
        id : this.getProductId(),
        name : this.sofa.name,
        price: this.sofa.price,
        imageUrl : this.sofa.imageUrl,
        description : this.sofa.description,
        color : color,
        quantity : quantity
        };
            
        let isPresent = false;
        let isNewColor = false;

        if(localStorage.getItem('cart') === null) {
            this.cart.push(product)
            console.log('nouveau sofa local storage vide')
        } 
  
        else {
            this.cart = JSON.parse(localStorage.getItem('cart'));

            for(let i = 0; i < this.cart.length; i++) {
                if (product.id === this.cart[i].id && product.color === this.cart[i].color && isNewColor === false) {
                    isPresent = true;
                    console.log('sofa déjà existant');
                    this.cart[i].quantity = parseInt(quantity) + parseInt(this.cart[i].quantity);
                } 
            }

            if(isPresent === false) {
            this.cart.push(product)
            console.log('nouveau sofa local storage déjà rempli')
            }
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
  },
  mounted(){
      axios
      .get('http://localhost:3000/api/products/' + this.getProductId())
      .then(response => {
          this.sofa = response.data;
          this.sofaColor = response.data.colors;
      })
      .catch(error => {
          this.apiError = true;
          console.log(error)
      })
  },
}
</script>

<style lang="scss">

/*Item Details*/
.item {
	margin: 135px 0;
	display: flex;
	justify-content: center;
}
.item article {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
}
.item__img {
	width: 100%;
}
.item__img img {
	width: 100%;
	border-radius: 15px;
}
.item__content {
	width: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.item__content h1 {
	text-align: left;
	font-size: 48px;
	font-weight: 700;
	margin-top: 30px;
	margin-bottom: 0;
}
.item__content__titlePrice,
.item__content__description,
.item__content__settings {
	border-bottom: 1px solid white;
}
.item__content__titlePrice p {
	margin-top: 4px;
}
.item__content__description {
	display: flex;
	flex-direction: column;
}
.item__content__description__title {
	font-weight: 600;
	font-size: 24px;
	margin-bottom: 0;
}
.item__content__settings {
	padding-top: 24px;
	padding-bottom: 18px;
}
.item__content__settings__color {
	margin-bottom: 10px;
}
.item__content__settings__color select,
.item__content__settings__quantity input {
	color: var(--footer-secondary-color);
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	border-radius: 20px;
	border: 1px solid #767676;
	text-align: center;
	text-align-last: center;
}
.item__content__settings__color select:focus,
.item__content__settings__quantity input:focus {
	outline: none;
}
.item__content__addButton {
	display: flex;
	justify-content: center;
	padding-top: 32px;
}
.item__content__addButton button {
	font-size: 22px;
	border-radius: 40px;
	border: 0;
	background-color: var(--secondary-color);
	color: white;
	padding: 18px 28px;
	cursor: pointer;
}
.item__content__addButton button:hover {
	box-shadow: rgba(42, 18, 206, 0.9) 0 0 22px 6px;
}

/***************/
/*Media queries*/
/***************/

@media (max-width: 991.98px) {
	.item article {
		width: 70%;
	}
	.item__content__settings__color,
	.item__content__settings__quantity {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.item__content__settings__color {
		margin-bottom: 26px;
	}
}

@media (max-width: 575.98px) { 
	.item article {
		width: 90%;
	}
}
</style>