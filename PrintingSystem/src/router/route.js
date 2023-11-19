import { createRouter, createWebHistory } from 'vue-router'

// Import Webpages
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

import StudentHome from '../views/student/StudentHome.vue'
import AdminHome from '../views/spso/AdminHome.vue'

// Setting up addresses with their associated webpages
const routes = [
    { 
        path: '/',
        component: Home,
        meta: {
            title: 'Smart Printing System',
        }
    },

    { 
        path: '/about',
        component: About,
        meta: {
            title: 'Smart Printing System | About',
        }
    },

    { 
        path: '/student',
        component: StudentHome,
        meta: {
            title: 'Smart Printing System | Student',
        }
    },

    { 
        path: '/admin',
        component: AdminHome,
        meta: {
            title: 'Smart Printing System | SPSO',
        }
    },

    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: '404 Not Found',
            hideNavbar: true,
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

// This is for loading the title of each page before routing to the actual page itself, we load it via the meta tag
router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Blank'
})

export default router;