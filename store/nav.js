

export const state = () => ({

    toggleSidebar: false,
    toggleLogedinNav: false,
    toggleTopUserList: false,

})

export const mutations = {

    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    },
    TOGGLE_SIDEBAR_RESET(state) {
        state.toggleSidebar = false
    },
    toggleLogedinNav(state) {
        state.toggleLogedinNav = !state.toggleLogedinNav
    },
    toggleLogedinNavMobile(state, status = true) {
        state.toggleLogedinNav = status
    },
    toggleTopUserList(state, status = true) {
        state.toggleTopUserList = status
    },

}

export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    toggleSidebarReset({ commit }) {
        commit('TOGGLE_SIDEBAR_RESET')
    },
    toggleLogedinNav({ commit }) {
        commit('toggleLogedinNav')
    },
    toggleLogedinNavMobile({ commit }, status = true) {
        commit('toggleLogedinNavMobile', status)
    },
    toggleTopUserList({ commit }, status = true) {
        commit('toggleTopUserList', status)
    }

}

export const getters = {

    toggleSidebar: state => state.toggleSidebar,

}