<script>
import { useProductStore } from '@/stores/productStore.js'
import { useShoppingCartStore} from "@/stores/ShoppingCartStore";

export default {

data() {
  return {
    quantity: 1,
    showPopup: false,
  }
  },
  computed: {
    productStore() {
      return useProductStore();
    },
    shoppingCartStore() {
      return useShoppingCartStore();
    },
    product() {
      const productId = this.$route.params.id;
      return this.productStore.getProductById(productId)
    },
    isInStock() {
      return this.product.voorraad > 0
    },
  },
  methods: {
    addOne() {
      if (this.quantity < this.product.voorraad) {
        this.quantity += 1;
      }
    },
    deleteOne() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },
    addToCart() {
      if (this.product) {
        const cartItem = {
          product: this.product,
          quantity: this.quantity,
        };
        this.shoppingCartStore.addToCart(cartItem);
        this.productStore.updateVoorraadQuantity(this.product.id, -this.quantity);

        this.showPopup = true;
      }
    },
  }
}
</script>
<template>
  <div class="detail">
    <section class="detail-card">
      <div class="photo">
        <img class="photo-detail" :src="product.afbeelding" :alt="product.titel">
      </div>
      <div class="detail-description">
        <h2 class="detail-description-title">{{ product.title }}</h2>
        <h4 class="detail-description-name">{{ product.artist }}</h4>
        <h1 class="detail-description-price">€{{ product.prijs }}</h1>
        <h1 class="detail-description-price">{{ product.btw_tarief }}% BTW</h1>
        <p class="detail-description-price">{{ product.voorraad }} stuks in voorraad</p>
        <p class="detail-description-price" v-if="isInStock">In Stock</p>
        <p class="detail-description-price" v-else><span>Out of Stock</span></p>
        <p class="detail-description-tekst">{{ product.omschrijving }}</p>
        <div class="quantity-container">
          <button class="quantity-button" @click="deleteOne()">-</button>
          <input class="counter_display" type="number" v-model="quantity" :max="isInStock ? product.voorraad : undefined" min="1">
          <button class="quantity-button" @click="addOne()">+</button>
        </div>
        <button @click="addToCart" class="button" id="button" :disabled="!isInStock || quantity > product.voorraad">Add To Cart</button>
      </div>
      <div v-if="showPopup" class="popup">
        Je item is succesvol toegevoegd aan je winkelmandje!<br>
        <router-link to="/winkelmand">Ga naar je winkelmandje</router-link>
      </div>
    </section>
  </div>
</template>
<style>

.popup {
  position: fixed;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 23px;
  z-index: 1000;
  box-shadow: 0 0 15px #84B5A5;
  text-align: center;
}
.detail-description-price span{
  color: red;
}
</style>