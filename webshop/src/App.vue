<script>
import NavComponent from '@/components/NavComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProductCardComponentCardComponent from '@/components/ProductCardComponent.vue'
// import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  data() {
    return {}

    },
      components: {
        NavComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        // ProductCardComponent
      }
    }
</script>

<template>

    <NavComponent/>
<!--    <HeaderComponent/>-->
<!--    <AboutComponent/>-->
    <router-view>
    </router-view>
    <FooterComponent/>


</template>