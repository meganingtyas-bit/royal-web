<template>
  <div>
    <HomeSlider />
    <HomeMitra />
    <HomeEvent />
    <HomeArticle />
    <HomeNews />
    <HomeConsultant />
    <HomePartner />
  </div>
</template>

<script>
import config from '~/config/config.js'

import Lib from '~/system/lib/Lib'
const HomeSlider = () =>
  import('~/components/' + config.theme.public + '/home/HomeSlider.vue')
const HomeMitra = () =>
  import('~/components/' + config.theme.public + '/home/HomeMitra.vue')
const HomeEvent = () =>
  import('~/components/' + config.theme.public + '/home/HomeEvent.vue')
const HomeArticle = () =>
  import('~/components/' + config.theme.public + '/home/HomeArticle.vue')

const HomeNews = () =>
  import('~/components/' + config.theme.public + '/home/HomeNews.vue')
const HomeConsultant = () =>
  import('~/components/' + config.theme.public + '/home/HomeConsultant.vue')
const HomePartner = () =>
  import('~/components/' + config.theme.public + '/home/HomePartner.vue')

export default {
  middleware: ['mwPost'],
  components: {
    HomeSlider,
    HomeMitra,
    HomeEvent,
    HomeArticle,
    HomeNews,
    HomeConsultant,
    HomePartner
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this),
      meta: []
    }
  },

  layout(e) {
    return config.theme.public + '/Main'
  },

  // async asyncData({ store, app }) {
  //   let param = {
  //     limit: 3
  //   }
  //   let response = await app.$lib.ajax
  //     .fetch('GET', `${app.$config.baseUrlApi}/content/list/all-type`, param)
  //     .then(response => {
  //       if (response.ok === 1) {
  //         return response.result
  //       }
  //     })
  //     .catch(e => {})

  //   return {
  //     apicontent: response
  //   }
  // },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style>
</style>
