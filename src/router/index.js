import { createRouter, createWebHashHistory} from 'vue-router'
import homePage from '../view/HomePage'
import dataManage  from '../view/DataManage'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/dataManage',
        component: dataManage
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
