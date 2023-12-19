<script>
// import jsonData from '@/assets/products.json';
import { useProductStore } from '@/stores/productStore.js'
import { useShoppingCartStore} from "@/stores/ShoppingCartStore";

export default {

data() {
  return {
    quantity: 1,
    counter: 0,
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
        this.productStore.updateStockQuantity(this.product.id, -this.quantity);

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
      <div class="detail-description">
        <h2 class="detail-description-title">tracklist</h2>
        <article>
          <ol class="detail-description-list">
            <li>Curtains Up (Skit)</li>
            <li>White America</li>
            <li>Business</li>
            <li>Cleaning Out My Closet</li>
            <li>Square Dance</li>
            <li>The Kiss (Skit)</li>
            <li>Soldier</li>
            <li>Say Goodbye Hollywood</li>
            <li>Drips</li>
            <li>Without Me</li>
          </ol>
        </article>
        <article>
          <ol class="detail-description-list">
            <li>Paul Rosenberg (Skit)</li>
            <li>Sing For The Moment</li>
            <li>Superman</li>
            <li>Hailie's Song</li>
            <li>Steve Berman (Skit)</li>
            <li>When The Music Stops</li>
            <li>Say What You Say</li>
            <li>Till I Collapse</li>
            <li>My Dad's Gone Crazy</li>
            <li>Curtains Close (Skit)</li>
          </ol>
        </article>
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
  padding: 1vh 2vw;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 0.3s ease;
  text-align: center;
}
</style>