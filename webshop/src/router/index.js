import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
// import DetailPaginaView from "@/views/DetailPaginaView.vue";
import WinkelmandView from "@/views/WinkelmandView.vue";
// import productsView from "@/views/ProductsView.vue";
import DetailView from "@/views/DetailView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import BevestigingsPaginaView from "@/views/BevestigingsPaginaView.vue";

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
            path: '/products',
            component: ProductsView,
            name:'products'
        },
        {  path: '/details/:id', name: 'details', component: DetailView, props: true },
        // {
        //     path: '/Products',
        //     component: ProductsView,
        //     name: 'Producten'
        // },
        // {
        //     path: '/products/:page',
        //     name: 'ProductList',
        //     component: productsView,
        //     props: true,
        // },
        // {
        //     path: '/products/:page/:eigenschap?/:artist?',
        //     name: 'ProductList',
        //     component: productsView,
        //     props: true,
        // },

        {
          path:  '/Winkelmand',
          component: WinkelmandView,
          name:'Winkelmand'
        },
        {
            path:  '/checkout',
            component: CheckOutView,
            name:'checkout'
        },
        {
            path:  '/bevestigingspagina',
            component: BevestigingsPaginaView,
            name:'bevestiging'
        },
        // {
        //     path: '/products/:id',
        //     name: 'ProductDetail',
        //     component: DetailPaginaView,
        //     props: true,
        // },

    ]
})

export default router