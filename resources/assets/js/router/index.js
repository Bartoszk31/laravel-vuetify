import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../modules/shared/components/Home.vue'
import StoreTest from '../modules/shared/components/StoreTest.vue'
import NotFound from '../modules/shared/components/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/store_test', component: StoreTest },
        { path: '*', component: NotFound}
    ]
})

