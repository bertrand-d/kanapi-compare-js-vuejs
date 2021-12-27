<template>
    <div>
        <main class="limitedWidthBlockContainer">
            <div class="limitedWidthBlock">
                <div class="titles">
                    <h1 v-if="apiError">Une erreur est survenue, merci de revenir plus tard</h1>
                    <template v-else>
                        <h1>Nos produits</h1>
                        <h2>Une gamme d'articles exclusifs</h2>
                    </template>
                </div>
                <section class="items" id="items">
                    <router-link :to="`/product?id=${sofa._id}`" exact v-for="sofa in sofaList" :key=sofa.id>
                        <article >
                            <img :src="sofa.imageUrl" :alt="sofa.altTxt">
                            <h3>{{ sofa.name }}</h3>
                            <p>{{ sofa.description }}</p>
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
          sofaList : [],
          apiError : false
      }
  },
  mounted(){
      axios
      .get('http://localhost:3000/api/products')
      .then(response => {
          this.sofaList = response.data;
          console.log(this.sofaList)
      })
      .catch(error => {
          this.apiError = true;
          console.log(error)
      })
  },
}
</script>

<style lang="scss">
</style>
