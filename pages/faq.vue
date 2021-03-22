<template>
  <div>
    <StaticFaq />
  </div>
</template>

<script>
import config from '~/config/config.js'

const StaticFaq = () =>
  import('~/components/' + config.theme.public + '/static/StaticFaq.vue')

export default {
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['FAQ']),
      meta: []
    }
  },
  components: {
    StaticFaq
  },
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>