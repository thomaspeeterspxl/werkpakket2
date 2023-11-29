<template>

<body class="body">

  <main class="main">

    <ProductCardComponent></ProductCardComponent>
    <div class="center">
<!--      <div class="pagination">-->
<!--        <a href="#">&laquo;</a>-->
<!--        <a class="active" href="#">1</a>-->
<!--        <a  href="#">2</a>-->
<!--        <a href="#">3</a>-->
<!--        <a href="#">4</a>-->
<!--        <a href="#">5</a>-->
<!--        <a href="#">6</a>-->
<!--        <a href="#">&raquo;</a>-->
<!--      </div>-->
    </div>

  </main>

</body>

</template>

<script>
// import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
// import DetailPaginaView from "@/views/DetailPaginaView.vue";

import jsonData from '@/assets/products.json'
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {

  components: {
    ProductCardComponent
    }

}
</script>

<style scoped>

</style>


