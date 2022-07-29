import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from '../views/ProductView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductView
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import ('../views/OverView.vue'),
  },
  {
    path: '/statiscal',
    name: 'statiscal',
    component: () => import ('../views/StatiscalView.vue'),
  },
  {
    path: '/timework',
    name: 'timework',
    component: () => import ('../views/TimeworkView.vue'),
  },
{
    path: '/login',
    name: 'login',
    component: () => import ('../layouts/Login.vue'),
    children: [{
        path: '/',
        name: 'formLogin',
        component: () => import ('../views/LoginForm.vue'),
    }, 
    {
        path: '/forgetpassword',
        name: 'forgetpassword',
        component: () => import ('../views/ForgetPassword.vue'),
    }]
},
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
