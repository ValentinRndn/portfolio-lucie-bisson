import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import Charrues from './views/projects/Charrues.vue'
import Purina from './views/projects/Purina.vue'
import Bienvoir from './views/projects/Bienvoir.vue'
import Lucie from './views/projects/Lucie.vue'
import Stacklab from './views/projects/Stacklab.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name : "home"
        }, 
        {
            path: '/about',
            component: About
        },
        {
            path : '/contact',
            component: Contact
        },
        {
            path : '/portfolio',
            component: Portfolio    
        },
        {
            path : '/projet/charrues',
            component: Charrues
        },
        {
            path : '/projet/purina',
            component: Purina
        },
        {
            path : '/projet/bienvoir',
            component: Bienvoir
        },
        {
            path : '/projet/lucie',
            component: Lucie
        },
        {
            path : '/projet/stacklab',
            component: Stacklab
        }

    ]
})

createApp(App).use(router).mount('#app')
