<template>
  <div>
    <ArchiveMitra />
  </div>
</template>

<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const ArchiveMitra = () =>
  import('~/components/' + config.theme.public + '/archive/ArchiveMitra.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, [
        this.$store.state.content.post.title
      ]),
      meta: this.$store.state.content.meta
    }
  },
  // async fetch({ params, store }) {
  //   let param = {
  //     type_id: 8
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
      type_id: 8,
      limit: 20
    })
    await store.dispatch('address/GET_PROVINCE')
  },
  components: {
    ArchiveMitra
  },
  methods: {},
  props: {},
  computed: {}
}
</script>

<style lang="css" scoped>
</style>