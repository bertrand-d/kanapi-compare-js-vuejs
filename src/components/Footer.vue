<template>
<footer>
    <div class="limitedWidthBlockContainer footerMain">
      <div class="limitedWidthBlock">
        <div>
          <img class="logo" src="../images/logo.png" alt="Logo de l'entreprise">
        </div>
        <div>
          <p>10 quai de la charente <br>75019 Paris 19</p>
        </div>
        <div>
          <p>Téléphone : 01 23 45 67 89</p>
        </div>
        <div>
          <p>Email : support@name.com</p>
        </div>
      </div>
    </div>
    <div class="limitedWidthBlockContainer footerSecondary">
      <div class="limitedWidthBlock">
        <p>© Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All Rights Reserved | Powered by 3</p>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style lang ="scss">
footer {
	color: var(--footer-text-color);
	display: flex;
	flex-direction: column;
	font-size: 14px;
}
footer .footerMain,
footer .footerSecondary {
	width: 100%;
}

/*footerMain*/
.footerMain {
	background-color: var(--footer-main-color);
	padding: 50px 0;
}
.footerMain .limitedWidthBlock {
	display: flex;
	justify-content: space-between;
}
.footerMain .limitedWidthBlock div {
	display: flex;
	align-items: center;
}

/*footerSecondary*/
.footerSecondary {
	background-color: var(--footer-secondary-color);
	padding: 25px 0;
}
</style>