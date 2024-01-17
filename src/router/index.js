import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'

import Accueil from '@/views/Accueil.vue'
import Contact from '@/views/Contact.vue'
import Login   from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        { path: '/', name: 'accueil', component: Accueil},
        { path: '/contact', name: 'contact', component: Contact},
        { path: '/connexion', name: 'connexion', component: Login},

      ]
    },
   
  ]
})

export default router
