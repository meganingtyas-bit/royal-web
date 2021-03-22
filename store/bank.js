import axios from 'axios'
import config from '~/config/config.js'

export const state = () => ({
    bank: [],
    destination: []
})

export const mutations = {
    SET_BANK (state, bank) {
      state.bank = bank || []
    },
    SET_DESTINATION (state, destination) {
      state.destination = destination || []
    }
}

const actions = {
  async GET_BANK ({ commit }) {
    const { data } = await axios.get(`${config.baseUrlApi}/bank/list`)
    commit('SET_BANK', data.result.data)
  },
  async GET_DESTINATION ({ commit }) {
    const { data } = await axios.get(`${config.baseUrlApi}/bank/list-destination`)
    commit('SET_DESTINATION', data.result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}