import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppView from '../views/AppView.vue'
import LoadingScreen from '../views/LoadingScreen.vue'
import Onboarding from '../views/OnboardingView.vue'
import Login from '../views/LoginView.vue'
import Pincode from '../views/PincodeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/app',
    name: 'app',
    component: AppView
  },
  {
    path: '/loading-screen',
    name: 'loading',
    component: LoadingScreen
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: Onboarding
  },
  {
    path: '/pincode',
    name: 'pincode',
    component: Pincode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
