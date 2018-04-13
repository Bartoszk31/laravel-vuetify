export default {
    namespaced: true,

    state: {
        loading: false
    },
    
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        }
    },
    
    getters: {
        isLoading: state => state.loading
    },
    
    actions: {
        startLoading ({ commit }) {
            commit('setLoading', true)
        },
        stopLoading ({ commit }) {
            commit('setLoading', false)
        }
    }
}