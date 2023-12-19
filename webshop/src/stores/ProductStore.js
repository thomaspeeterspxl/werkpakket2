import { defineStore } from "pinia";
import jsonData from '@/assets/products.json';

export const useProductStore = defineStore('products', {

    state: () => ({
        productlijst: jsonData.producten,
    }),

    getters: {
        getProductById: (state) => (productId) => {
            return state.productlijst.find((product) => product.id == productId) || null;
        },
    },

    actions: {
        updateStockQuantity: function (productId, quantity) {
            const product = this.getProductById(productId);

            if (product) {
                product.stock_quantity += quantity;
            }
        },
    },
});