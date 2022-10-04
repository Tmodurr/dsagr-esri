import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@esri/calcite-components/dist/calcite/calcite.css'
import '@arcgis/core/assets/esri/themes/light/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
