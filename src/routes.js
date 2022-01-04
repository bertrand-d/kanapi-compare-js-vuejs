import Vue from 'vue' 
import Router from 'vue-router' 
import Homepage from './views/Homepage'
import Product from './views/Product'
import Cart from './views/Cart'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: Homepage
        },
        {
            path: '/product',
            component: Product
        },
        {
            path: '/cart',
            component: Cart
        }
    ]
})