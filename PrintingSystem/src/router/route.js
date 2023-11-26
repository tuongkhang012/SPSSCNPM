import { createRouter, createWebHistory } from 'vue-router'
import store from './../global/store.js'

// Import Webpages
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Printers from '../views/Printers.vue'

import StudentHome from '../views/student/StudentHome.vue'
import Print from '../views/student/Print.vue'
import PrintSettings from '../views/student/PrintSettings.vue'
import PrintFinish from '../views/student/PrintFinish.vue'

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
            title: 'Giới thiệu - Smart Printing System',
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

    // {
    //     path: '/account/login',
    //     component: Login,
    //     meta: {
    //         title: 'Account Login - Smart Printing System',
    //     },
    // },

    {
        path: '/printers',
        component: Printers,
        meta: {
            title: 'Máy in - Smart Printing System',
        },
    },

    {
        path: '/print/upload',
        component: Print,
        meta: {
            title: 'In tài liệu - Smart Printing System',
        },
        beforeEnter: (to, from, next) => {
            store.commit('setFileUploaded', false)
            localStorage.removeItem('fileUploaded')
            next()
        }
    },

    {
        path: '/print/settings',
        component: PrintSettings,
        meta: {
            title: 'In tài liệu - Smart Printing System',
        },
    },

    {
        path: '/print/finish',
        component: PrintFinish,
        meta: {
            title: 'In tài liệu - Smart Printing System',
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

router.beforeEach((to, from, next) => {
    document.title = to.meta?.title ?? 'Blank'
  
    const studentRoutes = ['/orders', '/contribute', '/student']
    const adminRoutes = ['/manage', '/announcement', '/admin']
    const printPaths = ['/print/upload', '/print/settings', '/print/finish']
    
    if (store.state.isStudent && adminRoutes.includes(to.path)) {
      next('/')
    } else if (store.state.isAdmin && (studentRoutes.includes(to.path) || printPaths.includes(to.path))) {
      next('/')
    } else if (!store.state.isAdmin && !store.state.isStudent && to.path !== '/' && to.path !== '/about') {
      next('/')
    } else if (!store.state.fileUploaded && (to.path === '/print/settings'  || to.path === '/print/finish')) {
      next('/404')
    } else {
      next()
    }
  })

export default router;