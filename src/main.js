import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import ScrollPage from './pages/ScrollPage.vue'

const routes = [
  { path: '/', 
    name: 'Introduction',
    component: ScrollPage, 
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 } 
      }
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ScrollPage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: ScrollPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ScrollPage
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
