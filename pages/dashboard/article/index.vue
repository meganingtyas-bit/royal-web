<template>
  <div>
    <ArticleShow />
  </div>
</template>
<script>
import config from '~/config/config.js'
const ArticleShow = () =>
  import('~/components/' + config.theme.dashboard + '/article/ArticleShow.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'List Artikel')
    }
  },
  data() {
    return {}
  },
  components: {
    ArticleShow
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>