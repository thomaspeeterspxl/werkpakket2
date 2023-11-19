import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DetailPaginaView from "@/views/DetailPaginaView.vue";
import WinkelmandView from "@/views/WinkelmandView.vue";

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
        {
            path: '/Products',
            component: ProductsView,
            name: 'Producten'
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
        }
    ]
})

export default router