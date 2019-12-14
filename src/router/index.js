import Vue from 'vue'
import VueRouter from 'vue-router'
import Guard from '../services/Guard'

const DASHBOARD = () => import('../components/MainComponent.vue')
const LOGIN = () => import('../components/MainLogin.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LOGIN
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DASHBOARD
  }
]

const router = new VueRouter({
  routes
})

export default router
