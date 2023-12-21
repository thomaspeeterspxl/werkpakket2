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
