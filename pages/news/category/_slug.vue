<template>
  <div>
    <ArchiveNews />
  </div>
</template>
<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const ArchiveNews = () =>
  import('~/components/' + config.theme.public + '/archive/ArchiveNews.vue')

export default {
  name: 'index',
  async fetch({ params, store }) {},
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return ''
  },
  data() {
    return {}
  },
  async fetch ({ store }) {
    await store.dispatch('category/GET_CATEGORY', {
      type_id: 12,
      limit: 20
    })
    await store.dispatch('address/GET_PROVINCE')
  },
  components: {
    ArchiveNews
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>