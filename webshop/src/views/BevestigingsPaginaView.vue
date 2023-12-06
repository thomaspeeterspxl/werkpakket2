<template>
  <body>
  <div class="confirmation-container">
    <h1>Bevestiging bestelling</h1>
    <p>{{ bevestigingsbericht }}</p>
    <p>{{uitleg}}</p>

    <h2>Your Order Details:</h2>
    <ul class="product-list">
      <li v-for="product in products" class="product-item">
        {{ product.name }} - {{ product.price }} Euro
      </li>
    </ul>

    <p>Total Price: {{ totalPrice }} Euro</p>

    <button @click="goBack">terug</button>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return{
      bevestigingsbericht: 'Bedankt voor je bestelling',
      uitleg:'',
      products: [
        { name: 'Product 1', price: 20 },
        { name: 'Product 2', price: 30 },
      ],
    }
  },
  computed: {
    totalPrice() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.confirmation-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.product-list {
  list-style: none;
  padding: 0;
}
.product-item {
  margin-bottom: 10px;
}
</style>