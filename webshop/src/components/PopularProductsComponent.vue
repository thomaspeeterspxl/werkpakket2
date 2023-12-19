<template>

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
