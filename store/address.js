import axios from 'axios'
import config from '~/config/config.js'

export const state = () => ({
    province: false,
    city: false,
    subdistrict: false,
    village: false,
    regionals: [],
    provinces: [],
    citys: [],
    subdistricts: [],
    villages: []
})

export const mutations = {
    province(state, payload) {
        state.province = payload
    },
    city(state, payload) {
        state.city = payload
    },
    subdistrict(state, payload) {
        state.subdistrict = payload
    },
    village(state, payload) {
        state.village = payload
    },
    SET_REGIONAL (state, regionals) {
        state.regionals = regionals || []
    },
    SET_PROVINCE (state, provinces) {
        state.provinces = provinces || []
    },
    SET_CITY (state, citys) {
        state.citys = citys || []
    },
    SET_SUBDISTRICT (state, subdistricts) {
        state.subdistricts = subdistricts || []
    },
    SET_VILLAGE (state, villages) {
        state.villages = villages || []
    }
}

const actions = {
    async GET_REGIONAL ({ commit }, { type_id, limit }) {
        const { data } = await axios.get(`${config.baseUrlApi}/portal/regional/list`,
        {
            params: {
                type_id,
                limit
            }
        })
        commit('SET_REGIONAL', data.result.data)
    },
    async GET_PROVINCE ({ commit }) {
        const { data } = await axios.get(`${config.baseUrlApi}/address/province`)
        commit('SET_PROVINCE', data.result.data)
    },
    async GET_CITY ({ commit }, { province_id }) {
        const { data } = await axios.get(`${config.baseUrlApi}/address/city`,
        {
            params: {
                province_id
            }
        })
        commit('SET_CITY', data.result.data)
    },
    async GET_SUBDISTRICT ({ commit }, { city_id }) {
        const { data } = await axios.get(`${config.baseUrlApi}/address/subdistrict`,
        {
            params: {
                city_id
            }
        })
        commit('SET_SUBDISTRICT', data.result.data)
    },
    async GET_VILLAGE ({ commit }, { subdistrict_id }) {
        const { data } = await axios.get(`${config.baseUrlApi}/address/village`,
        {
            params: {
                subdistrict_id
            }
        })
        commit('SET_VILLAGE', data.result.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}