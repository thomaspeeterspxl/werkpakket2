<template>
  <table>
    <thead>
    <tr>
      <th>Foto</th>
      <th>Product</th>
      <th>Omschrijving</th>
      <th>Prijs</th>
      <th>Aantal</th>
      <th>Subtotaal (+ BTW)</th>
    </tr>
    </thead>
    <tbody v-for="(product, index) in shoppingCartProducts.cartItems" :key="index">
    <tr>
      <td><img :src=" product.product.afbeelding" :alt="product.title"/></td>
      <td>{{ product.product.title }}</td>
      <td>{{ product.product.omschrijving }}</td>
      <td>{{ '€' + product.product.prijs }} </td>
      <td>
        <button class="quantity-button" @click="incrementQuantity(index)">+</button>
        <span class="quantity">{{ product.quantity }}</span>
        <button class="quantity-button" @click="decrementQuantity(index)">-</button>
        <button  class="quantity-button" @click="removeProduct(index)">Remove</button>
      </td>
      <td>
        {{ '€' + product.product.prijs * product.quantity}} (+ {{ '€' + (((product.product.prijs * product.quantity)/100)*21).toFixed(2) }})
      </td>

    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Totaal zonder btw:</td>
      <td><span>€{{ calculateTotalWithoutVAT() }}</span></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>btw: </td>
      <td>{{ '€' + calculateTotalVAT() }}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Totaal: </td>
      <td>{{ '€' + calculateTotalWithVAT() }}</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import {useShoppingCartStore} from '@/stores/shoppingCartStore.js'
import {useProductStore} from '@/stores/productStore.js'

export default {
  data() {
    return {
      products: useProductStore(),
      shoppingCartProducts: useShoppingCartStore(),
    };
  },
  methods: {
    incrementQuantity(index) {
      const product = this.shoppingCartProducts.cartItems[index];
      if (product) {
        this.shoppingCartProducts.addToCart({product: product.product, quantity: 1});
      }
    },
    decrementQuantity(index) {
      const product = this.shoppingCartProducts.cartItems[index];
      if (product && product.quantity > 1) {
        this.shoppingCartProducts.addToCart({product: product.product, quantity: -1});
      }
    },
    removeProduct(index) {
      this.shoppingCartProducts.removeFromCart(index);
    },
    calculatePriceVAT(product) {
      return (product.prijs * (product.btw_tarief / 100)).toFixed(2);
    },
    calculatePriceWithVAT(product) {
      return (product.prijs * (1 + product.btw_tarief / 100)).toFixed(2);
    },
    calculatePriceWithoutVAT(product) {
      return product.prijs.toFixed(2);
    },
    calculateTotalWithVAT() {
      return this.shoppingCartProducts.cartItems.reduce(
          (total, product) => total + product.quantity * this.calculatePriceWithVAT(product.product),
          0).toFixed(2);
    },
    calculateTotalVAT() {
      return this.shoppingCartProducts.cartItems.reduce(
          (total, product) => total + product.quantity * this.calculatePriceVAT(product.product),
          0).toFixed(2);
    },
    calculateTotalWithoutVAT() {
      return this.shoppingCartProducts.cartItems.reduce(
          (total, product) => total + product.quantity * this.calculatePriceWithoutVAT(product.product),
          0).toFixed(2);
    },
  },
}
</script>

<style scoped>
.quantity-button{
  background-color: #84B5A5;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #BEA888;
  color: #fff;
  font-family: "Open Sans";
}

img {
  max-width: 200px;
  max-height: 200px;
}
</style>