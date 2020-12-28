import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";

Vue.use(VueRouter)

//懒加载
// const Home = () => import('../views/Home')

const routes = [
  {
    path: '/',
    name: 'default',
    //懒加载
    component: () => import('../views/home/Home')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/hotSpot',
    name: 'HotSpot',
    component: () => import('../views/hot/HotSpot')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
