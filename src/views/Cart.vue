<template>
<main class="limitedWidthBlockContainer">
  <div class="limitedWidthBlock" id="limitedWidthBlock">
    <div class="cartAndFormContainer" id="cartAndFormContainer">
      <h1>Votre panier</h1>
      <section class="cart">
        <section id="cart__items">
         <article v-for="item in cart" :key=item.id class="cart__item" :data-id="item.id" :data-color="item.color">
            <div class="cart__item__img">
              <img :src="item.imageUrl" :alt="item.altTxt">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>{{ item.name }}</h2>
                <p>{{ item.color }}</p>
                <p class="price">{{ item.price }} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" :value="item.quantity">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <div class="cart__price">
          <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
        </div>
        <div class="cart__order">
          <form method="get" class="cart__order__form">
            <div class="cart__order__form__question">
              <label for="firstName">Prénom: </label>
              <input type="text" name="firstName" id="firstName" required>
              <p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
            </div>
            <div class="cart__order__form__question">
              <label for="lastName">Nom: </label>
              <input type="text" name="lastName" id="lastName" required>
              <p id="lastNameErrorMsg"></p>
            </div>
            <div class="cart__order__form__question">
              <label for="address">Adresse: </label>
              <input type="text" name="address" id="address" required>
              <p id="addressErrorMsg"></p>
            </div>
            <div class="cart__order__form__question">
              <label for="city">Ville: </label>
              <input type="text" name="city" id="city" required>
              <p id="cityErrorMsg"></p>
            </div>
            <div class="cart__order__form__question">
              <label for="email">Email: </label>
              <input type="email" name="email" id="email" required>
              <p id="emailErrorMsg"></p>
            </div>
            <div class="cart__order__form__submit">
              <input type="submit" value="Commander !" id="order">
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</main>
</template>

<script>
export default {
	name: 'Cart',
	data(){
		return {
			cart: []
		}
	},
	mounted(){
		this.cart = JSON.parse(localStorage.getItem('cart'));
	}
}
</script>

<style lang="scss">
/*********/
/*GENERAL*/
/*********/

main {
	padding-bottom: 90px;
}
h1 {
	margin-bottom: 90px;
}
h2 {
	text-align: start;
}

/************/
/*Cart Items*/
/************/
.cart__item {
	display: flex;
	justify-content: space-around;
	border-top: 1px solid white;
	padding-top: 35px;
	margin-bottom: 30px;
}
.cart__item__img {
	width: 25%;
}
.cart__item__img img {
	width: 100%;
	border-radius: 25px;
}
.cart__item__content {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.cart__item__content__titlePrice {
	display: flex;
	justify-content: space-between;
}
.cart__item__content__titlePrice h2,
.cart__item__content__titlePrice p {
	margin: 0;
}
.cart__item__content__settings p {
	margin: 0;
}
.cart__item__content__settings input {
	color: var(--footer-secondary-color);
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	border-radius: 20px;
	border: 1px solid #767676;
	text-align: center;
	text-align-last: center;
}
.cart__item__content__settings input:focus {
	outline: none;
}
.cart__item__content__settings__quantity {
	display: flex;
}
.cart__item__content__settings__quantity p {
	margin-right: 10px;
	display: flex;
}
.cart__item__content__settings__delete p {
	display: inline;
}
.cart__item__content__settings__delete p:hover {
	cursor: pointer;
	font-weight: 700;
}

/*******/
/*Price*/
/*******/
.cart__price {
	border-top: 1px solid white;
	padding-top: 35px;
}
.cart__price p {
	text-align: end;
	font-size: 22px;
}

/*******/
/*Order*/
/*******/
.cart__order {
	display: flex;
	justify-content: center;
	margin-top: 90px;
}
.cart__order__form {
	width: 50%;
}
.cart__order__form__question {
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
}
.cart__order__form__question input {
	border-radius: 13px;
	border: 0;
	height: 26px;
	margin-top: 4px;
}
.cart__order__form__question input:focus {
	outline: none;
}
.cart__order__form__question p {
	margin: 0;
	color: #fbbcbc;
	font-size: 15px;
	margin-left: 8px;
}
.cart__order__form__submit {
	display: flex;
	justify-content: center;
}
.cart__order__form__submit input {
	font-size: 22px;
	border-radius: 40px;
	border: 0;
	background-color: var(--secondary-color);
	color: white;
	padding: 18px 28px;
	cursor: pointer;
	margin-top: 40px;
    transition: all ease-in-out 0.1s;
}
.cart__order__form__submit input:hover {
	box-shadow: rgb(42 18 206 / 90%) 0 0 22px 6px;
}

/***************/
/*Media queries*/
/***************/

@media (max-width: 991.98px) {
	.cart__item__content__titlePrice {
		flex-direction: column;
	}
}

@media (max-width: 575.98px) { 
	.cart__item {
		flex-direction: column;
		align-items: center;
	}
	.cart__item__img {
		width: 50%;
	}
	.cart__item__content {
		width: 90%;
	}
	.cart__item__content__titlePrice {
		margin-bottom: 20px;
	}
	.cart__price p {
		text-align: center;
	}
	.cart__order {
		justify-content: center;
	}
	.cart__order__form {
		width: 75%;
	}
}

</style>