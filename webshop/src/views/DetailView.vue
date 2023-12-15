<script>
import jsonData from '@/assets/products.json';
// import winkelmand from '@/views/WinkelmandView.vue';
export default {

data() {
  return {
    quantity: 1,
    counter: 0,
    cart: [],
  }
  },
  computed: {
    product() {
      const productData = jsonData.producten;
      const productId = this.$route.params.id;
      return productData.find(product => product.id === parseInt(productId));
    },
  },
  methods: {

    addOne() {
      if (this.counter < this.product.voorraad) {
        this.counter += 1;
      }
    },
    deleteOne() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
    addToCart() {
      if (this.counter > 0) {
        const cartItem = {
          name: this.product.title,
          quantity: this.counter,
          price: this.product.prijs,
          image: this.product.afbeelding, // Include image property if needed
          description: this.product.omschrijving, // Include description property if needed
          // Add other properties based on your needs
        };
        this.$router.push({ name: 'Winkelmand', params:{cartItem}});

      }
    },
  },
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
        <p class="detail-description-tekst">{{ product.omschrijving }}</p>
        <div class="quantity-container">
          <button id="decreaseQuantity" class="quantity-button" @click="deleteOne()">-</button>
          <p class="counter_display">{{ counter }}</p>
          <button id="increaseQuantity" class="quantity-button" @click="addOne()">+</button>
        </div>
        <button class="button" @click="addToCart">Add to Cart</button>
        <!-- Example router link in a template -->
        <router-link to="/winkelmand">Go to Shopping Cart</router-link>


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