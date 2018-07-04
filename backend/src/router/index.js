import Vue from 'vue'
import Router from 'vue-router'
import shopList from '@/pages/shopList'
import userList from '@/pages/userList'
import foodList from '@/pages/foodList'
import managerList from '@/pages/managerList'
import orderList from '@/pages/orderList'
import AddSinger from '@/pages/AddSinger'
import addShop from '@/pages/AddShop'
import index from '@/pages/index'
import shopActive from '@/pages/ShopActive'

// import pcommon from '@/pages/Pcommon'

Vue.use(Router)

export default new Router({
    routes: [{
            name: 'index',
            path: '/',
            component: index
        },
        {
            name: 'shoplist',
            path: '/index/:id',
            component: shopList
        },
        {
            name: 'userlist',
            path: '/index/:id',
            component: userList
        },
        {
            name: 'foodlist',
            path: '/index/:id',
            component: foodList
        },
        {
            name: 'managerlist',
            path: '/index/:id',
            component: managerList
        },
        {
            name: 'orderlist',
            path: '/index/:id',
            component: orderList
        },
        {
            name: 'addsinger',
            path: '/addsinger/:id',
            component: AddSinger
        },
        {
            name: 'addshop',
            path: '/addshop/:id',
            component: addShop
        },
        {
            name: 'shopactive',
            path: '/shopactive',
            component: shopActive
        },
    ]
})