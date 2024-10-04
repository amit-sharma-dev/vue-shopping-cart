import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    loadProducts(state, products) {
      console.log('products', products)
      state.products = products;
    },
    addToCart(state, product) {
      console.log('cart', product)
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      let updateCart = state.cart.filter(item => item.id != productId);
      state.cart = updateCart;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        })
    },
    addToCart ( {commit}, product) {
      commit('addToCart', product);
    },
    removeFromCart({commit}, productId) {
      if(confirm('Are you sure to remove the item from cart ?')) {
        commit('removeFromCart', productId);
      }
    }
  },
  modules: {
  }
})
