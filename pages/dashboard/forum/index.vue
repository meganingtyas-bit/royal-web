<template>
  <div>
    <ForumShow />
  </div>
</template>
<script>
import config from '~/config/config.js'
const ForumShow = () =>
  import('~/components/' + config.theme.dashboard + '/forum/ForumShow.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'List Forum')
    }
  },
  data() {
    return {}
  },
  components: {
    ForumShow
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>