import { createApp } from 'vue'
import './all.css'
import './input.css'
import App from './App.vue'
import router from './router'
import '@/assets/utils.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
