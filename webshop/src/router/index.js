import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
import DetailPaginaView from "@/views/DetailPaginaView.vue";
import WinkelmandView from "@/views/WinkelmandView.vue";
import productsView from "@/views/ProductsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: HomeView,
            name: 'Home'
        },
        {
            path: '/LogIn',
            component: LogInView,
            name: 'Login'
        },
        {
            path: '/:Contact',
            component: HomeView,
            name: 'Contact'
        },
        // {
        //     path: '/Products',
        //     component: ProductsView,
        //     name: 'Producten'
        // },
        {
            path: '/products/:page',
            name: 'ProductList',
            component: productsView,
            props: true,
        },

        {
          path:  '/Winkelmand',
          component: WinkelmandView,
          name:'Winkelmand'
        },
        {
            path: '/Products:DetailPagina',
            component: DetailPaginaView,
            name: 'DetailPagina'
        },

    ]
})

export default router