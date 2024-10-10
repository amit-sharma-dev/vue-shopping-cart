import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
    totalProduct: 6,
    user: {}
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products.products;
      state.totalProduct = products.total;
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
    },
    loadUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    loadProducts({ commit }, page = 1, perPage = 6) {
      axios.get('https://dummyjson.com/products?limit='+ perPage + '&skip=' + page * perPage )
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
    },
    loadUser({ commit }, user) {
      let userDetails = user ?? JSON.parse(localStorage.getItem("user"));
      commit('loadUser', userDetails);
    }
  },
  modules: {
  }
})
