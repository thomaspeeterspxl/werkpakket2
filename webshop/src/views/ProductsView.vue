<template>
  <ProductCardComponent></ProductCardComponent>
</template>

<!--<script>-->
<!--import ProductCardComponent from "@/components/ProductCardComponent.vue";-->
<!--import jsonData from '@/assets/products.json'-->
<!--export default {-->
<!--  components: {-->
<!--    ProductCardComponent,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      yourDataArray: jsonData.producten,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
<script>
import jsonData from '@/assets/products.json';
import ProductCardComponent from "@/components/ProductCardComponent.vue";


export default {
  components: {
   ProductCardComponent
  }
//   props: ['page'],
//
//   computed: {
//     itemsPerPage() {
//       return 8; // Aantal items per pagina
//     },
//     pageCount() {
//       return Math.ceil(this.items.length / this.itemsPerPage);
//     },
//     paginatedItems() {
//       const startIndex = (this.page - 1) * this.itemsPerPage;
//       const endIndex = startIndex + this.itemsPerPage;
//       return this.items.slice(startIndex, endIndex);
//     },
//   },
//
//   methods: {
//     getRoute(page) {
//       return { name: 'ProductList', params: { page } };
//     },
//   },
//
//   data() {
//     return {
//       items: jsonData.producten,
//     };
//   },
};
</script>