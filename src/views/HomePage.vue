<template>
    <div class="home">
      <div class="products">
  
        <div v-for="(product, index) in this.products" :key="index"
        class="product" :class="{inBag: isInCart(product)}">
          <div class="product-image" :style="{backgroundImage: 'url(' + product.thumbnail + ')'}"></div>
          <h4>{{ product.title }}</h4>
          <p class="price">US$ {{ product.price }}</p>
          <button v-if="!isInCart(product)" @click="addToCart(product)">Add to bag</button>
          <button v-else @click="this.$store.dispatch('removeFromCart', product.id)" class="remove">Remove</button>
        </div>
        
      </div>
    </div>

    <div id="app">
    <pagination
      :totalPages="totalItem"
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import Pagination from '../views/Pagination.vue'
  export default {
    name: 'HomePage',
    components: {
      Pagination
    },
    data() {
      return {
        currentPage: 1,
        totalItem: 10,
        perPage: 6
      }
    },
    computed: mapState([
      'products',
      'cart',
      'totalProduct',
      'user'
    ]),
    methods: {
      addToCart(product) {
        product.quantity = 1;
        this.$store.dispatch('addToCart', product);
      },
      isInCart(product) {
        return this.cart.find(item => item.id == product.id);
      },
      onPageChange(page) {
        this.$store.dispatch('loadProducts', page, this.perPage);
        this.currentPage = page;
        this.totalItem = Math.round(this.totalProduct / this.perPage);
      }
    }
  }
  </script>
  
  <style lang="scss">
  
    .home {
  
      .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
  
  
        .product {
          flex: 0 0 30%;
          box-sizing: border-box;  
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          padding: 16px;
          margin: 8px;
          height: 360px;
  
          @media only screen and (max-width: 769px) {
            flex: 0 0 40%;
          }
  
          @media only screen and (max-width: 640px) {
            flex: 0 0 90%;
          }
  
          &.inBag {
            border: 1px solid #007bff;
          }
          
          .product-image {
            margin: 20px auto;
            width: 160px;
            height: 140px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
          h4 {
            margin: 22px auto;
            font-size: 12px;
            max-width: 60%;
            font-weight: normal;
          }
  
          p.price {
            font-size: 20px;
            font-weight: bold;
          }
  
          button {
            color: #fff;
            background-color: #007bff;
            border: 1px solid #007bff;
            border-radius: 100px;
            font-weight: 400;
            text-align: center;
            padding: 8px 16px;
            cursor: pointer;
  
            &:hover {
              opacity: 0.8;
            }
  
            &.remove {
              background-color: transparent;
              border: none;
              color: black;
              text-decoration: underline;
            }
          }
        }
      }
  
    }
  
  
  </style>
  