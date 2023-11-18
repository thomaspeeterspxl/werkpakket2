<template>
  <div class="detail">
    <section class="detail-card">
      <div class="photo">
        <img class="photo-detail" src="../assets/images/eminem-lp.png" alt="eminem">
      </div>
      <div  class="detail-description">
        <h2 class="detail-description-title">The Eminem Show (2 LP)</h2>
        <h4 class="detail-description-name">Eminem</h4>
        <h1 class="detail-description-price">€44</h1>
        <p class="detail-description-tekst"></p>
        <div class="quantity-container">
          <button id="decreaseQuantity" class="quantity-button" @click="deleteOne()">-</button>
<!--          <input type="number" name="number" id="quantity" >-->
          <p class="counter_display">{{ counter }}</p>
          <button id="increaseQuantity" class="quantity-button" @click="addOne()">+</button>
        </div>
        <button class="button"><a class="link" href="#"> Add to Cart</a></button>
        The Eminem Show is een album van Eminem uit 2016
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
import jsonData from '@/assets/products.json'
export default {
  data(){
    return{
      counter: 0,
    }
  },
  methods:{
    addOne() {
      this.counter += 1
    },
    deleteOne() {
      this.counter -= 1
    },
  },
  computed: {
    products() {
      return jsonData.producten
    }
  },
}
</script>

<style scoped>

</style>