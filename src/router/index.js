import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'

import Accueil from '@/views/Accueil.vue'
import Apropos from '@/views/Apropos.vue'
import Service from '@/views/Service.vue'
import Formation from '@/views/Formation.vue'
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
        { path: '/apropos', name: 'apropos', component: Apropos},
        { path: '/services', name: 'services', component: Service},
        { path: '/formations', name: 'formations', component: Formation},
        { path: '/contact', name: 'contact', component: Contact},
        { path: '/connexion', name: 'connexion', component: Login},

      ]
    },
   
  ]
})

export default router
