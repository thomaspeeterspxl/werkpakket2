import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue";
import ProductsView from "@/views/ProductsView.vue";
// import DetailPaginaView from "@/views/DetailPaginaView.vue";
import WinkelmandView from "@/views/WinkelmandView.vue";
// import productsView from "@/views/ProductsView.vue";
import bevestigingsPaginaView from "@/views/BevestigingsPaginaView.vue";
import DetailView from "@/views/DetailView.vue";

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
        // {
        //     path: '/products/:id',
        //     name: 'ProductDetail',
        //     component: DetailPaginaView,
        //     props: true,
        // },
        {
            path: '/bevestigingspagina',
            component: bevestigingsPaginaView,
        },

    ]
})

export default router