<template>
  <div id="nav">
    <router-link to="/">Home</router-link> -
    <router-link to="/basket">Shopping Cart ({{ this.cart.length }})</router-link> - 
    <router-link to="/register">Register</router-link>

    <div class="right-nav">
      <router-link to="/" v-if="this.user">Welcome {{ this.user.firstname }}</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    created() {
      this.$store.dispatch('loadProducts');
      this.$store.dispatch('loadCart');
      this.$store.dispatch('loadUser');
    },
    computed: mapState([
      'cart',
      'user'
    ]),
  }
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
