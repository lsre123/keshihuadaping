import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import './assets/styles/index.scss'

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.mount('#app') 