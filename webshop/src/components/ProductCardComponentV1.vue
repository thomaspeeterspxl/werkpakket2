<template>
  <div class="detail">
    <section class="detail-card">
      <div class="photo">
        <img class="photo-detail" :src="productData.afbeelding" :alt="productData.titel">
      </div>
      <div class="detail-description">
        <h2 class="detail-description-title">{{ productData.title }}</h2>
        <h4 class="detail-description-name">{{ productData.artist }}</h4>
        <h1 class="detail-description-price">€{{ productData.prijs }}</h1>
        <h1 class="detail-description-price">{{ productData.btw_tarief }}% BTW</h1>
        <p class="detail-description-price">{{ productData.voorraad }} stuks in voorraad</p>
        <p class="detail-description-tekst">{{ productData.omschrijving }}</p>
        <div class="quantity-container">
          <button id="decreaseQuantity" class="quantity-button" @click="deleteOne()">-</button>
          <p class="counter_display">{{ counter }}</p>
          <button id="increaseQuantity" class="quantity-button" @click="addOne()">+</button>
        </div>
        <button class="button" @click="addToCart">Add to Cart</button>
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

<script>
// import jsonData from '@/assets/products.json';

export default {
  props:{
    productData: Object
  },
  data() {
    return {
      // product: {},
      counter: 0,
    };
  },
  // created() {
  //   const productId = 1;
  //   this.product = this.getProductById(productId);
  // },

  methods: {
    // getProductById(id) {
    //   return jsonData.producten.find(product => product.id === parseInt(id)) || {};
    // },
    addOne() {
      if (this.counter < this.productData.voorraad) {
        this.counter += 1;
      }
    },
    deleteOne() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
    addToCart() {

    },
  },
};
</script>


<style scoped>

</style>