import { defineStore } from "pinia";
import {useToast} from "vue-toastification";
const toast = useToast()

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: []
    }),

    actions: {
        addToCart(data) {
            const index = this.cart.findIndex(item => {
                return item?.sku === data?.sku
            });
            if (index > -1) {
                this.cart[index].quantity++;
                toast.info("Quantity Updated...")
            } else {
                this.cart.push(data);
                toast.info("Added Success...")
            }
        },

        removeFromCart(item) {
            const index = this.cart.indexOf(item);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
            toast.info("Remove Success...")
        },

        decrementQty(id) {
            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === id
            });
            if (this.cart[index].selectSku.selectQty > 1) {
                this.cart[index].selectSku.selectQty--;
            }
            toast.info("Quantity Updated...")
        },

        clearCart(isToast = true) {
            this.cart = [];
            console.log(isToast)
            if(isToast) {
                toast.info("Empty Cart Store...")
            }
        }
    },

    getters: {
        getCartLength() {
            return this.cart.length;
        },
        getCartItems() {
            return this.cart;
        },
        getCartTotalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    },
    persist:true
})

