import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Video from '@/views/Video.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/video/:id',
      name: 'Video',
      component: Video
    }
  ]
})

export default router

