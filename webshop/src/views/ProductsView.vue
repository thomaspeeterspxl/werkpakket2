<template>
  <section class="tekst-overzichtspagina">
    <h1>catalogus</h1>
    <p>Hier vind u een overzicht van alle producten die beschikbaar zijn op deze webshop.</p>
    <p>Zijn er producten die u misschien mist, kom dan zeker eens langs in de winkel.</p>
  </section>
  <section id="products">
    <div class="filter">
      <button CLASS="button" v-on:click="toggleSorting">Sort by Price High to Low</button>
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
    <main class="main">
      <div v-for="(product, index) in paginatedProducts" :key="index" class="main-products">
        <ProductCardComponent :product="product"/>
      </div>
    </main>
  </section>
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
      filterOptions: ["All", "vinyls", "eminem", "game/movie", "ed-sheeran", "rammstein", "boywithuke", "harry-styles", "platenspelers & accesiores", "colored", "naalden", "platenspeler", "hoezen" ],
      pageSize: 8,
      page: 1,
      isSorting: false,
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedFilters.length === 0 || this.selectedFilters.includes("All")) {
        return this.products;
      } else {
        return this.products.filter((product) => {
          return this.selectedFilters.every(filter => product.eigenschappen.includes(filter));
        });
      }
    },
    sortedProducts() {
      if (this.isSorting) {
        return [...this.products].sort((a, b) => b.prijs - a.prijs);
      } else {
        return [...this.products]; // Return unsorted products
      }
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.pageSize)
    },
    paginatedProducts() {
      const filtered = this.filteredProducts;

      const sorted = this.isSorting ? [...filtered].sort((a, b) => b.prijs - a.prijs) : filtered;

      const startIndex = (this.page - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      return sorted.slice(startIndex, endIndex);
    }
  },
  methods: {
    toggleSorting() {
      this.isSorting = !this.isSorting;
      console.log('Sorting Toggled. isSorting:', this.isSorting);
    },
    filterProducts() {
      this.page = 1;
      console.log('Filters Applied:', this.selectedFilters);
    },
    goToPage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.page = newPage;
        console.log('Page Changed. New Page:', this.page);
      }
    }
  },
  watch: {
    isSorting: function() {
      // React to changes in isSorting, if needed
      console.log('isSorting changed:', this.isSorting);
    }
  }
};
</script>

<style scoped>

</style>
