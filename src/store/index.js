import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadCart(state, products) {
      state.cart = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      let updateCart = state.cart.filter(item => item.id != productId);
      state.cart = updateCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        })
    },
    loadCart({ commit }) {
      if(localStorage.getItem("cart")) {
        commit('loadCart', JSON.parse(localStorage.getItem("cart")));
      }
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
