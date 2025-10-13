import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueIcons from '@kalimahapps/vue-icons'
import { createPinia } from 'pinia'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.css'

import router from './router'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

// Đăng ký tất cả icon toàn cục
for (const [key, component] of Object.entries(VueIcons)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.mount('#app')

// createApp(App).mount('#app')
