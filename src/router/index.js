import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Earthquake2 from '../views/Earthquake2.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Earthquake2', name: 'Earthquake2', component: Earthquake2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;