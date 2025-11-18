import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'
import { Router } from './router'

export function mount(el: HTMLElement) {
  const app = createApp(App)
  
  app.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
  })
  
  app.use(Router)
  
  app.mount(el)
  
  return app
}

export default { mount }
