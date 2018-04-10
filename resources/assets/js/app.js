import Vue from 'vue'
import store from './store'
import router from './router'

import Vuetify from 'vuetify'

import App from './modules/shared/components/App.vue'

Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    render: h => h(App)
});
