import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Earthquake from '../views/Earthquake.vue';
import Protect from "../views/Protect.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Earthquake', name: 'Earthquake', component: Earthquake },
  { path: '/Protect', name: 'Protect', component: Protect }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;