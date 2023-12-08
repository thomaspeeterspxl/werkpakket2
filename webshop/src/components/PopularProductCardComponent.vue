<template>
        <div class="card-overlay">
          <h1 class="card-overlay-heading">{{ product.title }}</h1>
          <p class="card-overlay-paragraph">Price: € {{ product.prijs }}</p>
          <p class="card-overlay-paragraph">Voorraad: {{ product.voorraad }} stuks</p>
        </div>
        <img :src="product.afbeelding" alt="eminem lp" class="card-image">

</template>

<script>
export default {
  props: {
    product: Object,
  },
}
</script>

<style scoped>

</style>