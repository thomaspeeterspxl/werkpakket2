<template>
  <section class="tekst-overzichtspagina">
    <h1>catalogus</h1>
    <p>Hier vind u een overzicht van alle producten die beschikbaar zijn op deze webshop.</p>
    <p> Zijn er producten die u misschien mist, kom dan zeker eens langs in de winkel.</p>
    <div class="filter">
      <label for="filter">Filter op eigenschap:</label>
      <select v-model="selectedFilter" id="filter" @change="filterProducts">
        <option value="all">Alle producten</option>
        <option value="eigenschap1">vinyl platen</option>
        <option value="eigenschap2">platenspelers & naalden</option>
      </select>
<!--      <select v-model="selectedFilter" id="filter" @change="filterProducts">-->
<!--        <option value="eigenschap1">Alle artiesten</option>-->
<!--        <option value="eigenschap1, eminem">eminem</option>-->
<!--        <option value="ed sheeran">ed sheeran</option>-->
<!--      </select>-->
    </div>
  </section>
  <main class="main">
    <div v-for="(product, index) in paginatedItems" :key="index" class="main-products">
      <h2>{{ product.title}}</h2>
      <img class="main-products-foto" :src= 'product.afbeelding' alt="eminem lp">
      <p class="main-products-tekst">{{ product.omschrijving }}</p>
      <p class="main-products-prijs">Price: € {{ product.prijs }}</p>
      <router-link :to="{ name: 'ProductDetail', params: {id: product.id }}">
        <button class="button-detail">lees meer</button>
      </router-link>

    </div>

  </main>
  <div class="pagination">
    <router-link v-for="pageNumber in pageCount" :to="getRoute(pageNumber)" :key="pageNumber">
      {{ pageNumber }}
    </router-link>
  </div>
</template>


<script>
import jsonData from '@/assets/products.json'

export default {

  props: ['page'],

  computed: {
    itemsPerPage() {
      return 8;
    },
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },

  },

  methods: {
    getRoute(page) {
      return { name: 'ProductList', params: { page } };
    },
    filterProducts() {
      if (this.selectedFilter === 'all') {
        this.items = jsonData.producten;
      } else {
        this.items = jsonData.producten.filter(product => product.eigenschap === this.selectedFilter);
      }
    },
  },
  data() {
    return {
      items: jsonData.producten,
      selectedFilter: 'all',
    };
  },
};
</script>
<style scoped>

</style>
