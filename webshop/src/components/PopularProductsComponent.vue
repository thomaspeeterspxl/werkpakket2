<template>
<!--  <div>-->
<!--    <h2>Top 5 Products</h2>-->
<!--    <ul>-->
<!--      <li v-for="product in top5Products" :key="product.id">-->
<!--        {{ product.titel }} - In Stock: {{ product.voorraad }}-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--  <section class="gallery">-->
<!--    <h1 class="gallery-title">Moet je gezien hebben</h1>-->
<!--    <div  class="cards-wrapper">-->
<!--      <div v-for="product in top5Products" :key="product.id" class="card">-->
<!--        <div class="card-overlay">-->
<!--          <h1 class="card-overlay-heading">{{ product.title }}</h1>-->
<!--          <p class="card-overlay-paragraph">Price: € {{ product.prijs }}</p>-->
<!--          <p class="card-overlay-paragraph">Voorraad: {{ product.voorraad }} stuks</p>-->
<!--        </div>-->
<!--        <img :src="product.afbeelding" alt="eminem lp" class="card-image">-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
  <section class="gallery">
    <h1 class="gallery-title">Moet je gezien hebben</h1>
    <div  class="cards-wrapper">
      <div v-for="(product, id) in highestQuantityProducts" :key="id" class="card">
     <PopularProductCardComponent :product="product"/>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from '@/assets/products.json';
import PopularProductCardComponent from "@/components/PopularProductCardComponent.vue";
export default {
  // computed: {
  //   top5Products() {
  //     return this.getTop5Products();
  //   },
  // },
  // methods: {
  //   getTop5Products() {
  //
  //     const sortedProducts = jsonData.producten
  //     sortedProducts.sort((a, b) => b.voorraad - a.voorraad);
  //
  //
  //     const top5Products = sortedProducts.slice(0, 5);
  //
  //     return top5Products;
  //   },
  // },
  data() {
    return {
      jsonData: [],
    }
  },
  components: {
    PopularProductCardComponent
  },
  computed: {
    highestQuantityProducts() {
      const sortedProducts = [...jsonData.producten].sort((a, b) => b.voorraad - a.voorraad);
      return sortedProducts.slice(0, 5);
    },
  },
};
</script>

<style scoped>
</style>
