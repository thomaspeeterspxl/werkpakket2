<template>
  <section class="tekst-overzichtspagina">
    <h1>catalogus</h1>
    <p>Hier vind u een overzicht van alle producten die beschikbaar zijn op deze webshop.</p>
    <p> Zijn er producten die u misschien mist, kom dan zeker eens langs in de winkel.</p>
    <div class="filter">
      <label for="filter">Filter op eigenschap:</label>
      <select v-model="selectedFilter" id="filter" @change="filterProducts">
        <!-- ... (Je bestaande filteropties) -->
        <option value="all">Alle producten</option>
        <option value="eigenschap1">Eigenschap 1</option>
        <option value="eigenschap2">Eigenschap 2</option>
      </select>
    </div>
  </section>
  <main class="main">
      <div v-for="(product, index) in filteredProducts" :key="index" class="main-products">
        <h2>{{ product.titel }}</h2>
        <img class="main-products-foto" :src="product.afbeelding" alt="eminem lp">
        <p class="main-products-tekst">{{ product.omschrijving }}</p>
        <p class="main-products-prijs">Price: € {{ product.prijs }}</p>
        <button class="button-detail">
          <router-link to="/Products:DetailPagina">lees meer</router-link>
        </button>
      </div>
   </main>
</template>


<script>
import jsonData from '@/assets/products.json'

export default {

  data() {
    return {
      selectedFilter: 'all',
    }
  },
  computed: {
    products() {
      return jsonData.producten
    },
    filteredProducts() {
      if (this.selectedFilter === 'all') {
        return this.products;
      } else {
        return this.products.filter(product => product.eigenschap === this.selectedFilter);
      }
    }
  },
}
</script>

<style scoped>

</style>