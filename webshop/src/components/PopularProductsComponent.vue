<!-- PopularProductsComponent.vue -->
<template>
  <div>
    <h2>Populaire producten</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} {{ product.voorraad }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch('path/to/products.json')
        .then(response => response.json())
        .then(data => {
          this.products = data;
          console.log('Productgegevens ingeladen:', this.products);
          this.products.forEach(product => {
            console.log(`Voorraad van ${product.name}:`, product.voorraad);
          });
        })
        .catch(error => {
          console.error('Fout bij het ophalen van productgegevens:', error);
        });
  },
};
</script>

<style scoped>
</style>
