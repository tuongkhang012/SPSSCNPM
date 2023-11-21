import { createRouter, createWebHistory } from 'vue-router'

// Import Webpages
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'

import StudentHome from '../views/student/StudentHome.vue'
import AdminHome from '../views/spso/AdminHome.vue'

// Setting up addresses with their associated webpages
const routes = [
    { 
        path: '/',
        // component: Home,
        component: Login,
        meta: {
            title: 'Smart Printing System',
        }
    },

    { 
        path: '/about',
        component: About,
        meta: {
            title: 'About - Smart Printing System',
        }
    },

    { 
        path: '/student',
        component: StudentHome,
        meta: {
            title: 'Smart Printing System',
        }
    },

    { 
        path: '/admin',
        component: AdminHome,
        meta: {
            title: 'Smart Printing System',
        }
    },

    {
        path: '/account/login',
        component: Login,
        meta: {
            title: 'Account Login - Smart Printing System',
        },
    },

    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        },
    },
]

// Create the router object with active class to highlight link that are currently visiting (client side)
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})


import store from './../global/store.js'

router.beforeEach((to, from, next) => {
    document.title = to.meta?.title ?? 'Blank'
  
    const studentRoutes = ['/print', '/orders', '/contribute', '/student']
    const adminRoutes = ['/manage', '/announcement', '/admin']
  
    if (store.state.isStudent && adminRoutes.includes(to.path)) {
      next('/')
    } else if (store.state.isAdmin && studentRoutes.includes(to.path)) {
      next('/')
    } else if (!store.state.isAdmin && !store.state.isStudent && to.path !== '/' && to.path !== '/about') {
      next('/')
    }
    else {
      next()
    }
  })
export default router;