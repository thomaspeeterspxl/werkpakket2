<template>

</template>

<script>
import jsonData from '@/assets/products.json'

export default {
  data() {
    return {};
  },
  computed: {
    products(){
      return jsonData.producten
    }
  }
}
</script>

<style scoped>
</style>
