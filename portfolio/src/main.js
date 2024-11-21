import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import Academic from './views/projects/Academic.vue'
import Personal from './views/projects/Personal.vue'
import Professional from './views/projects/Professional.vue'

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
            path : '/portfolio/academic',
            component: Academic
        },
        {
            path : '/portfolio/personnal',
            component: Personal
        },
        {
            path : '/portfolio/professional',
            component: Professional
        },

    ]
})

createApp(App).use(router).mount('#app')
