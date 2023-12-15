<template>
      <h2>{{ product.title}}</h2>
      <img class="main-products-foto" :src= 'product.afbeelding' alt="eminem lp">
      <p class="main-products-tekst">{{ product.omschrijving }}</p>
      <p class="main-products-prijs">Price: € {{ product.prijs }}</p>
        <button class="button-detail" @click="viewProductDetails">lees meer</button>
</template>


<script>
export default {
  props: {
    product: Object,
  },
  methods:{
    viewProductDetails(){
      this.$router.push({name:'details', params:{id: this.product.id}})
    }
  }
};
</script>
<style scoped>

</style>
