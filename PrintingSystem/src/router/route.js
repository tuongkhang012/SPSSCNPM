import { createRouter, createWebHistory } from 'vue-router'
import store from './../global/store.js'

// Import Webpages
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'

import StudentHome from '../views/student/StudentHome.vue'
import Print from '../views/student/Print.vue'
import Printers from '../views/student/Printers.vue'
import PrintSettings from '../views/student/PrintSettings.vue'
import PrintFinish from '../views/student/PrintFinish.vue'
import Orders from '../views/student/Orders.vue'
import OrderEx from '../views/student/OrderExample.vue'

import AdminHome from '../views/spso/AdminHome.vue'
import Manage from '../views/spso/Manage.vue'
import ManageEx from '../views/spso/ManageExample.vue'
import Add from '../views/spso/Add.vue'

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

    {
        path: '/account/login',
        component: Login,
        meta: {
            title: 'Đăng nhập - Smart Printing System',
        },
    },

    {
        path: '/printers',
        component: Printers,
        meta: {
            title: 'Máy in - Smart Printing System',
        },
    },

    {
        path: '/orders',
        component: Orders,
        meta: {
            title: 'Đơn in - Smart Printing System',
        },
    },

    {
        path: '/orders/SPS_1000',
        component: OrderEx,
        meta: {
            title: 'Đơn #SPS_1000 - Smart Printing System',
        },
    },

    {
        path: '/manage',
        component: Manage,
        meta: {
            title: 'Quản lý - Smart Printing System',
        },
    },

    {
        path: '/manage/CS1_111112',
        component: ManageEx,
        meta: {
            title: 'Máy in CS1_111112 - Smart Printing System',
        },
    },

    {
        path: '/manage/add',
        component: Add,
        meta: {
            title: 'Thêm máy in - Smart Printing System',
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
    document.title = to.meta?.title ?? 'Smart Printing System'
  
    const studentRoutes = ['/orders', '/contribute', '/student', '/orders/orderExample', '/printers']
    const adminRoutes = ['/manage', '/announcement', '/admin']
    const printPaths = ['/print/upload', '/print/settings', '/print/finish']
    
    if (store.state.isStudent && adminRoutes.includes(to.path)) {
      next('/')
    } else if (store.state.isAdmin && (studentRoutes.includes(to.path) || printPaths.includes(to.path))) {
      next('/')
    } else if (!store.state.isAdmin && !store.state.isStudent && to.path !== '/' && to.path !== '/about' && to.path !== '/account/login') {
      next('/')
    } else if (!store.state.fileUploaded && (to.path === '/print/settings'  || to.path === '/print/finish')) {
      next('/print/upload')
    } else {
      next()
    }
  })

export default router;