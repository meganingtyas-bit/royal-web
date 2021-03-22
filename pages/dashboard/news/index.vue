<template>
  <div>
    <NewsShow />
  </div>
</template>
<script>
import config from '~/config/config.js'
const NewsShow = () =>
  import('~/components/' + config.theme.dashboard + '/news/NewsShow.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'List Berita')
    }
  },
  data() {
    return {}
  },
  components: {
    NewsShow
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>