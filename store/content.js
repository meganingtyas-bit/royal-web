export const state = () => ({
    post: false,
    meta: false,

    // HOME

    homeEvent: false,
    homeMitra: false,
    homeArticle: false,
    homeNews: false,
    homePartner: false,

    // POST
    postDetail: false,
    postList: false,
    allType: false,

    //query
    query: ''



})

export const mutations = {
    post(state, payload) {
        state.post = payload
    },

    meta(state, payload) {
        state.meta = payload
    },

    query(state, payload) {
        state.query = payload
    },



    // HOME
    homeEvent(state, payload) {
        state.homeEvent = payload
    },
    homeMitra(state, payload) {
        state.homeMitra = payload
    },
    homeArticle(state, payload) {
        state.homeArticle = payload
    },
    homeNews(state, payload) {
        state.homeNews = payload
    },
    homePartner(state, payload) {
        state.homePartner = payload
    },

    // POST

    postDetail(state, payload) {
        state.postDetail = payload
    },
    postList(state, payload) {
        state.postList = payload
    },
    allType(state, payload) {
        state.allType = payload
    }
}


export const actions = {
    async post({ commit }, data) {
        commit('post', data)
    },
    async meta({ commit }, data) {
        commit('meta', data)
    },
    async query({ commit }, data) {
        commit('query', data)
    },

    async postDetail({ commit }, data) {
        commit('postDetail', data)
    },
    async postList({ commit }, data) {
        commit('postList', data)
    },
    async allType({ commit }, data) {
        commit('allType', data)
    }

}
