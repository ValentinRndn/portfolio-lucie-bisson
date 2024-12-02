import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Charrues from './views/projects/Charrues.vue';
import Purina from './views/projects/Purina.vue';
import Bienvoir from './views/projects/Bienvoir.vue';
import Lucie from './views/projects/Lucie.vue';
import Stacklab from './views/projects/Stacklab.vue';

// Définition des routes
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/projet/charrues',
    component: Charrues,
  },
  {
    path: '/projet/purina',
    component: Purina,
  },
  {
    path: '/projet/bienvoir',
    component: Bienvoir,
  },
  {
    path: '/projet/lucie',
    component: Lucie,
  },
  {
    path: '/projet/stacklab',
    component: Stacklab,
  },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Optionnel, pour un défilement fluide
      };
    }
    return { top: 0 }; // Position par défaut
  },
});

// Création et montage de l'application
createApp(App).use(router).mount('#app');
