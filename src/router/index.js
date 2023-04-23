import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Earthquake from '../views/Earthquake.vue';
import Protect from "../views/Protect.vue";
import Disaster from '../views/Disaster.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Earthquake', name: 'Earthquake', component: Earthquake },
  { path: '/Protect', name: 'Protect', component: Protect },
  { path: '/Disaster', name: 'Disaster', component: Disaster }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;