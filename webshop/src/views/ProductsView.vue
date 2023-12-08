<template>
  <section class="tekst-overzichtspagina">
    <h1>catalogus</h1>
    <p>Hier vind u een overzicht van alle producten die beschikbaar zijn op deze webshop.</p>
    <p>Zijn er producten die u misschien mist, kom dan zeker eens langs in de winkel.</p>
    <div class="filter">
      <label v-for="filterOption in filterOptions" :key="filterOption" class="filter-label">
        <input
            type="checkbox"
            :value="filterOption"
            v-model="selectedFilters"
            @change="filterProducts"
            class="filter-input"
        />
        <span class="filter-text">{{ filterOption }}</span>
      </label>
    </div>
  </section>
  <main class="main">
    <div v-for="(product, index) in paginatedProducts" :key="index" class="main-products">
      <ProductCardComponent :product="product"/>
    </div>
  </main>
  <div class="pagination">
    <span @click="goToPage(page - 1)"><i class='bx bx-chevron-left'></i></span>
    <span>{{ page }} / {{ totalPages }}</span>
    <span @click="goToPage(page + 1)"><i class='bx bx-chevron-right'></i></span>
  </div>
</template>

<script>
import jsonData from '@/assets/products.json';
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  components: {
    ProductCardComponent
  },
  data() {
    return {
      products: jsonData.producten,
      eigenschappen: [],
      selectedFilters: [],
      filterOptions: ["All", "vinyls", "platenspelers & accesiores", "eminem", "game/movie", "ed-sheeran", "naalden", "platenspeler", "hoezen", "rammstein", "boywithuke", "harry-styles"],
      pageSize: 8,
      page: 1,
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedFilters.length === 0 || this.selectedFilters.includes("All")) {
        return this.products;
      } else {
        return this.products.filter((product) => {
          return product.eigenschappen.some(prop => this.selectedFilters.includes(prop));
        });
      }
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.pageSize)
    },
    paginatedProducts() {
      const startIndex = (this.page - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.filteredProducts.slice(startIndex, endIndex)
    }
  },
  methods: {
    filterProducts() {
      this.page = 1; // Reset to the first page when filters change
    },
    goToPage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.page = newPage
      }
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
