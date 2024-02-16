import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'
import store from '../store'

import Accueil from '@/views/Accueil.vue'
import Apropos from '@/views/Apropos.vue'
import Service from '@/views/Service.vue'
import ServiceDetail from '@/views/ServiceDetail.vue'
import Actualite from '@/views/Actualite.vue'
import ActualiteDetail from '@/views/ActualiteDetail.vue'
import Formation from '@/views/Formation.vue'
import Realisation from '@/views/Realisation.vue'
import Contact from '@/views/Contact.vue'
import Panier from '@/views/Panier.vue'
import Login   from '@/views/Login.vue'
import SignUp  from '@/views/SignUp.vue'

import EspaceAccueil  from '@/views/Espace/accueil.vue'
import Cours  from '@/views/Espace/mesFormations.vue'
import Profil  from '@/views/Espace/profil.vue'
import DetailFormation  from '@/views/Espace/detailFormation.vue'

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
        { path: '/services/:id', name: 'services-detail', component: ServiceDetail , props:true},
        { path: '/actualites', name: 'actualites', component: Actualite},
        { path: '/actualites/:id', name: 'actualites-detail', component: ActualiteDetail , props:true},
        { path: '/formations/:id', name: 'formations', component: Formation , props:true},
        { path: '/nos-realisations', name: 'nos-realisations', component: Realisation},
        { path: '/contact', name: 'contact', component: Contact},
        { path: '/panier', name: 'panier', component: Panier},
        { path: '/connexion', name: 'connexion', component: Login},
        { path: '/inscription', name: 'inscription', component: SignUp},

        { path: '/mon-espace', name: 'mon-espace', component: EspaceAccueil ,  meta: { requiresAuth: true }},
        { path: '/mon-espace/mes-formations', name: 'mes-formations', component: Cours ,  meta: { requiresAuth: true }},
        { path: '/mon-espace/profil', name: 'profil', component: Profil ,  meta: { requiresAuth: true }},
        { path: '/mon-espace/mes-formations/:id', name: 'formation-detail', component: DetailFormation , props:true, meta: { requiresAuth: true }},

      ]
    },
   
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isLoggedIn = store.getters['user/isLoggedIn'];
console.log('isLoggedIn',isLoggedIn);
  if (requiresAuth && !isLoggedIn) {
    // Si la route nécessite une authentification et l'utilisateur n'est pas connecté,
    // redirigez-le vers la page de connexion
    next('/connexion');
  } else if ((to.name === 'inscription' || to.name === 'connexion') && isLoggedIn) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
    next('/mon-espace');
  }
  else {
    next();
  }
});
export default router
