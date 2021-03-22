<template>
  <div>
    <ArchiveArticle />
  </div>
</template>
<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const ArchiveArticle = () =>
  import('~/components/' + config.theme.public + '/archive/ArchiveArticle.vue')

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
      type_id: 10,
      limit: 20
    })
    await store.dispatch('address/GET_PROVINCE')
  },
  components: {
    ArchiveArticle
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>