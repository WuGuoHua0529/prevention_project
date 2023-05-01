import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import { Row, Col, Menu, Submenu, MenuGroup, MenuItem } from 'view-ui-plus';

const app = createApp(App);

app.use(router)
app.use(store)
app.component('Row', Row)
app.component('Col', Col)
app.component('Menu', Menu)
app.component('Submenu', Submenu)
app.component('MenuGroup', MenuGroup)
app.component('MenuItem', MenuItem)
app.mount('#app')
