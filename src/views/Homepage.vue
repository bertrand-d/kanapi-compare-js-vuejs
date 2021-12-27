<template>
    <div>
        <main class="limitedWidthBlockContainer">
            <div class="limitedWidthBlock">
                <div class="titles">
                    <h1>Nos produits</h1>
                    <h2>Une gamme d'articles exclusifs</h2>
                </div>
                <section class="items" id="items">
                    <router-link :to="`/product?id=${sofa._id}`" exact v-for="sofa in sofaList" :key=sofa.id>
                        <article >
                            <img :src="sofa.imageUrl" :alt="sofa.altTxt">
                            <h3 class="productName">{{ sofa.name }}</h3>
                            <p class="productDescription">{{ sofa.description }}</p>
                        </article>
                    </router-link>
                </section>
            </div>
        </main>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Homepage',
  data(){
      return {
          sofaList : []
      }
  },
  mounted(){
      axios
      .get('http://localhost:3000/api/products')
      .then(response => {
          this.sofaList = response.data;
          console.log(this.sofaList)
      })
  },
}
</script>

<style lang="scss">

</style>
