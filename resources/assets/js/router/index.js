import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Contacts from '../components/Contacts.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/contacts', component: Contacts },
    ]
})

