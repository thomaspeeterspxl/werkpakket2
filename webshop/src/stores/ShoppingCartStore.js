import {defineStore} from "pinia";
import {useProductStore} from "@/stores/productStore.js";

export const useShoppingCartStore = defineStore('shoppingCart', {
    state: () => ({
        cartItems: [],
        productStore: useProductStore()
    }),
    getters: {
        getCartItems: () => this.cartItems,
    },
    actions: {
        addToCart: function (cartItem) {
            this.productStore.updateVoorraadQuantity(cartItem.product.id, -cartItem.quantity);
            const existingItem = this.cartItems.find(item => item.product.id === cartItem.product.id);

            if (existingItem) {
                existingItem.quantity += cartItem.quantity;
            } else {
                this.cartItems.push(cartItem);
            }
        },
        removeFromCart(index) {
            if (index >= 0 && index < this.cartItems.length) {
                this.cartItems.splice(index, 1);
            }
        },
    },
});
