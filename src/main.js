import { createApp } from 'vue'
import App from './app.vue'
import i18n from './i18n'
import router from './router'
import store from './store'

import 'element-plus/lib/theme-chalk/index.css'

import './permission'
import './utils/msw'

createApp(App).use(i18n).use(store).use(router).mount('#app')
