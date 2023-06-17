import { createApp } from 'vue'
import './assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './app.vue'
import router from './router/index.js'


createApp(App).use(bootstrap).use(router).mount('#app')