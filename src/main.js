import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import router from '@/router/index'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount('#app')
