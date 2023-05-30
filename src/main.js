import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'
import '@/assets/main.scss'
import Countdown from 'vue3-flip-countdown'

createApp(App)
  .use(store)
  .use(router)
  .use(Countdown)
  .mount('#app')
