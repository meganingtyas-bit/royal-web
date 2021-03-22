<template>
  <div>
    <ArchiveEvent />
  </div>
</template>
<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const ArchiveEvent = () =>
  import('~/components/' + config.theme.public + '/archive/ArchiveEvent.vue')

export default {
  name: 'index',

  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return ''
  },
  // async fetch({ params, store }) {
  //   let param = {
  //     type_id: 9
  //   }
  //   await Lib.ajax
  //     .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
  //     .then(response => {
  //       if (response.ok === 1) {
  //         store.commit('content/postList', response.result.data)
  //       }
  //     })
  //     .catch(e => {})
  // },
  data() {
    return {}
  },
  async fetch ({ store }) {
    await store.dispatch('category/GET_CATEGORY', {
      type_id: 9,
      limit: 20
    })
    await store.dispatch('address/GET_PROVINCE')
  },
  components: {
    ArchiveEvent
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>