import Vue from 'vue' 
import Router from 'vue-router' 
import Homepage from './views/Homepage'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: Homepage
        },
        {
            path: '/product'
        }
    ]
})