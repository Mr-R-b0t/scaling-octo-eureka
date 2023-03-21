import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import store from 'Vuex'

createApp(App).use(router).use(store).mount('#app')
