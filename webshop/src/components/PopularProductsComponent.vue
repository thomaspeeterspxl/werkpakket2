<template>
<!--  <div>-->
<!--    <h2>Top 5 Products</h2>-->
<!--    <ul>-->
<!--      <li v-for="product in top5Products" :key="product.id">-->
<!--        {{ product.titel }} - In Stock: {{ product.voorraad }}-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
  <section class="gallery">
    <h1 class="gallery-title">Moet je gezien hebben</h1>
    <div  class="cards-wrapper">
      <div v-for="product in top5Products" :key="product.id" class="card">
        <div class="card-overlay">
          <h1 class="card-overlay-heading">{{ product.titel }}</h1>
          <p class="card-overlay-paragraph">Price: € {{ product.prijs }}</p>
          <p class="card-overlay-paragraph">Voorraad: {{ product.voorraad }} stuks</p>
        </div>
        <img :src="product.afbeelding" alt="eminem lp" class="card-image">
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from '@/assets/products.json';

export default {
  computed: {
    top5Products() {
      // Call the method to get the top 5 products
      return this.getTop5Products();
    },
  },
  methods: {
    getTop5Products() {
      // Sort a copy of the products based on "voorraad" in descending order
      const sortedProducts = [...jsonData.producten].sort((a, b) => b.voorraad - a.voorraad);

      // Get the top 5 products
      const top5Products = sortedProducts.slice(0, 5);

      return top5Products;
    },
  },
};
</script>

<style scoped>
</style>
