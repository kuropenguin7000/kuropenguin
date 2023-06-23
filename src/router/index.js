import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const LoginPage = () => import('@/pages/LoginPage.vue')
const SchedulePage = () => import('@/pages/SchedulePage.vue')

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: SchedulePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
