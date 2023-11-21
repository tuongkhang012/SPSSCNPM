import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route.js'
import store from './global/store.js';
import './index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')