<template>
<!--  <div>-->
<!--    <ul>-->
<!--      <li v-for="product in products">{{ product }}</li>-->
<!--    </ul>-->
<!--  </div>-->
<!--  <div v-for="(product, index) in products" :key="index" class="card">-->
<!--    <div class="card-overlay">-->
<!--      <h1 class="card-overlay-heading">{{ product.titel }}</h1>-->
<!--      <p class="card-overlay-paragraph">Price: € {{ product.prijs }}</p>-->
<!--    </div>-->
<!--    <img :src="product.image" :alt="product.alt" class="card-image">-->
<!--  </div>-->
<body class="body">
<!--  <section class="tekst-overzichtspagina">-->
<!--    <h1>catalogus</h1>-->
<!--    <p>Hier vind u een overzicht van alle producten die beschikbaar zijn op deze webshop.</p>-->
<!--    <p> Zijn er producten die u misschien mist, kom dan zeker eens langs in de winkel.</p>-->
<!--    <div class="filter">-->
<!--      <label for="filter">Filter op eigenschap:</label>-->
<!--      <select v-model="selectedFilter" id="filter" @change="filterProducts">-->
<!--        &lt;!&ndash; ... (Je bestaande filteropties) &ndash;&gt;-->
<!--        <option value="all">Alle producten</option>-->
<!--        <option value="eigenschap1">Eigenschap 1</option>-->
<!--        <option value="eigenschap2">Eigenschap 2</option>-->
<!--      </select>-->
<!--    </div>-->

<!--  </section>-->
  <main class="main">
<!--  <div v-for="(product, index) in products" :key="index" class="main-products">-->
<!--    <div v-for="(product, index) in filterProducts()" :key="index" class="main-products">-->
<!--    <h2>{{ product.titel }}</h2>-->
<!--      <img class="main-products-foto" :src="`../assets/images/${product.afbeelding}`" alt="eminem lp">-->
<!--      <p class="main-products-tekst">{{ product.omschrijving }}</p>-->
<!--    <p class="main-products-prijs">Price: € {{ product.prijs }}</p>-->
<!--    <button class="button-detail"><router-link to="/Products:DetailPagina">lees meer</router-link></button>-->
<!--  </div>-->
    <ProductCardComponent></ProductCardComponent>
    <div class="center">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="#">1</a>
        <a  href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>

  </main>
</body>
    <!--  <section class="gallery">-->
  <!--    <div class="cards-wrapper">-->
  <!--      <ProductCardComponent v-for="product in products"-->
  <!--                            v-bind:key="product.id"-->
  <!--                            v-bind:product="product"-->
  <!--      />-->
  <!--    </div>-->
  <!--  </section>-->
</template>

<script>
// import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
// import DetailPaginaView from "@/views/DetailPaginaView.vue";

import jsonData from '@/assets/products.json'
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  // data() {
  //   return {
  //     selectedFilter: 'all',
  //   }
  // },
  // methods: {
  //   filterProducts() {
  //     if (this.selectedFilter === 'all') {
  //       // Toon alle producten
  //       return this.products;
  //     } else {
  //       // Filter de producten op basis van de geselecteerde eigenschap
  //       return this.products.filter(product => product.eigenschap === this.selectedFilter);
  //     }
  //   }
  // },
  //
  // computed: {
  //   products() {
  //     return jsonData.producten
  //   }
  // },
  components: {
    ProductCardComponent
    }

}
</script>

<style scoped>

</style>


