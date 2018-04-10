export default {
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
        loadingStart ({ commit }) {
            commit('setLoading', true)
        },
        loadingStop ({ commit }) {
            commit('setLoading', false)
        }
    }
}