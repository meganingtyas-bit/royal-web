import axios from 'axios'
import config from '~/config/config.js'

export const state = () => ({
    categories: []
})

export const mutations = {
    SET_CATEGORY (state, categories) {
        state.categories = categories || []
    }
}

const actions = {
    async GET_CATEGORY ({ commit }, { type_id, limit }) {
        const { data } = await axios.get(`${config.baseUrlApi}/content/category/list`,
        {
          params: {
            type_id,
            limit
          }
        })
        commit('SET_CATEGORY', data.result.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}