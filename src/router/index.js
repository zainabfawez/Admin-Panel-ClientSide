import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import CustomerPage from '../components/CustomerPage.vue'
import AdminPanel from '../components/AdminPanel.vue'

  const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    component: AdminPanel
  },
  {
    path: '/customer-page',
    name: 'customer-page',
    component: CustomerPage
  }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router