import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'

import Accueil from '@/views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        { path: '/', name: 'accueil', component: Accueil},

      ]
    },
   
  ]
})

export default router
