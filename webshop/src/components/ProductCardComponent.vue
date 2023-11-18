<template>
  <div v-for="(product, index) in filterProducts()" :key="index" class="main-products">
    <h2>{{ product.titel }}</h2>
    <img class="main-products-foto" :src="`../assets/images/${product.afbeelding}`" alt="eminem lp">
    <p class="main-products-tekst">{{ product.omschrijving }}</p>
    <p class="main-products-prijs">Price: € {{ product.prijs }}</p>
    <button class="button-detail">
      <router-link to="/Products:DetailPagina">lees meer</router-link>
    </button>
  </div>
</template>


<script>
import jsonData from '@/assets/products.json'

export default {
  // data() {
  //   return {}
  // },
  data() {
    return {
      selectedFilter: 'all',
    }
  },
  methods: {
    filterProducts() {
      if (this.selectedFilter === 'all') {
        // Toon alle producten
        return this.products;
      } else {
        // Filter de producten op basis van de geselecteerde eigenschap
        return this.products.filter(product => product.eigenschap === this.selectedFilter);
      }
    }
  },

  // computed: {
  //   products() {
  //     return jsonData.producten
  //   }
  // },
  computed: {
    products() {
      return jsonData.producten
    }
  }
}
</script>

<style scoped>

</style>