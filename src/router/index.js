import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'
import ProductPage from '../views/ProductPage.vue'
import RecapPage from '../views/RecapPage.vue'

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
    path: '/product/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/recap',
    name: 'Recap',
    component: RecapPage
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
