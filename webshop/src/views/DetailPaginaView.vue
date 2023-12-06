<template>
  <ProductCardComponentV1 v-for="product in products"
                          :key="product.id"
                          :productData="product"
  />

</template>

<script>
import jsonData from '@/assets/products.json';
import ProductCardComponentV1 from '@/components/ProductCardComponentV1.vue'

export default {
  data() {
    return {
      products: jsonData.producten,
    }
  },
  components: {
    ProductCardComponentV1
  }
}
</script>

<style scoped>

</style>
