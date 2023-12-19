<script>
import {useShoppingCartStore} from '@/stores/shoppingCartStore.js'
import {useProductStore} from '@/stores/productStore.js'
import winkelmandcomponent from "@/components/winkelmandcomponent.vue";


export default {
  data() {
    return {
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

<template>
  <body>
  <div v-if="shoppingCartProducts.cartItems.length === 0" class="cart_tekst">
    <p >Er valt hier nog niks te zien, je hebt nog niks in je winkelmandje zitten.</p>
    <p >Voeg producten toe aan je winkelmandje en kom dan nog eens terug kijken.</p>
    <router-link to="/products">Ga naar de producten pagina</router-link>
  </div>
  <div v-else id="winkelmandje">
    <h2>Winkelmandje</h2>
    <winkelmandcomponent></winkelmandcomponent>
  </div>
  <div class="button_cart">
    <button class="button-detail" @click="viewProducts">Verder winkelen</button>
    <button class="button-detail" @click="viewCheckout">Afrekenen</button>
  </div>
  </body>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

#winkelmandje {
  width: 70%;
  margin: 125px auto;
}

.cart_tekst {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.button_cart{
  text-align: center;
}
</style>
