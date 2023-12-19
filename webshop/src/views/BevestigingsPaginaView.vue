<template>
  <body>
  <div class="confirmation-container">
    <h1>Bevestiging bestelling</h1>
    <p>{{ bevestigingsbericht }}</p>
    <p>{{uitleg}}</p>
   <winkelmandcomponent></winkelmandcomponent>
  </div>
  </body>
</template>

<script>
import {useShoppingCartStore} from '@/stores/shoppingCartStore.js'
import {useProductStore} from '@/stores/productStore.js'
import winkelmandcomponent from "@/components/winkelmandcomponent.vue";

export default {
  data() {
    return {
      bevestigingsbericht: 'Bedankt voor je bestelling',
      uitleg:'De betaling is geslaagd. Je ordernummer is: 2359845',
      products: useProductStore(),
      shoppingCartProducts: useShoppingCartStore(),
    };
  },
  methods: {
    viewCheckout(){
      this.$router.push({name:'checkout'})
    },
    viewProducts(){
      this.$router.push({name:'products'})
    },
  },
  components:{
    winkelmandcomponent
  }
}
</script>

<style scoped>
body {
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin: 20px;
}
.confirmation-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
