<template>
    <div>
        <Header/>
        <main class="limitedWidthBlockContainer">
            <div class="limitedWidthBlock">
                <div class="titles">
                    <h1>Nos produits</h1>
                    <h2>Une gamme d'articles exclusifs</h2>
                </div>
                <section class="items" id="items">
                    <!--           <a href="./product.html?id=42">
                        <article>
                        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
                        <h3 class="productName">Kanap name1</h3>
                        <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
                        </article>
                    </a> -->
                </section>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Homepage',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
