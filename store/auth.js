import Lib from '~/system/lib/Lib'
import config from '~/config/config'

export const state = () => ({
    authUser: null,
    logedIn: false
})



export const mutations = {

    SET_USER(state, data) {
        state.authUser = data
        state.logedIn = true
    },

    RESET_USER(state) {
        state.authUser = null
        state.logedIn = false
    }
}

export const actions = {
    async setUserAuth({ commit }, data) {

        commit('SET_USER', data)
    },


    async resetUser({ commit }, data) {

        commit('RESET_USER')
    },
}

