import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'
export const state = () => ({
    counter: 0
})

export const mutations = {
    increment (state) {
        state.counter++
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, { route, redirect, store, req, res }) {

    }
}