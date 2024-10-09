import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'
import Product from '../views/Product.vue'
import Pagination from '../views/Pagination.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
