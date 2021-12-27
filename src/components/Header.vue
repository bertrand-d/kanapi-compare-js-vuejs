<template>
    <header>
        <div class="limitedWidthBlockContainer informations">
          <div class="limitedWidthBlock">
              <ul>
                <li><img src="../images/icons/phone.svg" alt="logo de téléphone" class="informations__phone">01 23 45 67 89
                </li>
                <li><img src="../images/icons/mail.svg" alt="logo d'une enveloppe" class="informations__mail">support@name.com
                </li>
                <li><img src="../images/icons/adress.svg" alt="logo d'un point de géolocalisation"
                    class="informations__address">01 23 45 67 89</li>
              </ul>
          </div>
        </div>
        <div class="limitedWidthBlockContainer menu">
        <div class="limitedWidthBlock">
            <router-link to="/" exact>
                <img class="logo" src="../images/logo.png" alt="Logo de l'entreprise">
            </router-link>
            <nav>
            <ul>
                <router-link to="/" exact>
                    <li>Accueil</li>
                </router-link>
                <router-link to="/cart" exact>
                    <li>Panier</li>
                </router-link>>
            </ul>
            </nav>
        </div>
        </div>
        <img class="banniere" src="../images/banniere.png" alt="Baniere">
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang ="scss">
/*informations*/
.informations {
	font-size: 13px;
	background-color: var(--main-color);
}

.informations img {
	height: 17px;
}

.informations ul {
	display: flex;
	padding-left: 0;
}

.informations ul li {
	display: flex;
	list-style: none;
	margin-right: 36px;
}

.informations__phone,
.informations__mail {
	margin-right: 10px;
}

/*menu*/
.menu {
	background-color: white;
}
.menu .limitedWidthBlock {
	display: flex;
	justify-content: space-between;
}
.menu a {
	display: flex;
	align-items: center;
	text-decoration: none;
}
.menu nav {
	display: flex;
}
.menu nav ul {
	display: flex;
	margin: 0;
	line-height: 130px;
}
.menu nav ul li {
	list-style: none;
	margin-left: 50px;
	color: var(--text-color);
}
.menu nav ul li:hover {
	color: #3498db !important;
}

/*banniere*/
.banniere {
	width: 100%;
	height: 550px;
	object-fit: cover;
	display: flex;
}

</style>