import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'


import App from './components/App.vue'


Vue.use(VueRouter)
Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    components: { App },
    render: h => h(App)
});
