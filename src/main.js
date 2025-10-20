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
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

// Đăng ký tất cả icon toàn cục
for (const [key, component] of Object.entries(VueIcons)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
})
app.mount('#app')

// createApp(App).mount('#app')
