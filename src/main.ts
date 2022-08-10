import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './app.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)
app.mount('#app')
