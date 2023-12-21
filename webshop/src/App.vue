<script>
import NavComponent from '@/components/NavComponent.vue'
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
        FooterComponent,
        AboutComponent,
        // ProductCardComponent
      }
    }
</script>

<template>

    <NavComponent/>
    <router-view>
    </router-view>
    <FooterComponent/>


</template>