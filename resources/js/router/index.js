import { createRouter, createWebHashHistory } from "vue-router"

import productIndex from "../components/products/index.vue"
import notFound from '../components/notFound.vue'

const routes = [
    {
        path: '/products',
        component: productIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHashHistory( process.env.BASE_URL ),
    routes
})

export default router
