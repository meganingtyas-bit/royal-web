<template>
  <div>
    <StaticSoon />
  </div>
</template>

<script>
import config from '~/config/config.js'

const StaticSoon = () =>
  import('~/components/' + config.theme.public + '/static/StaticSoon.vue')

export default {
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Comming Soon']),
      meta: []
    }
  },
  components: {
    StaticSoon
  },
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  data() {
    return {
      title: 'Coming Soon'
    }
  },
  methods: {}
}
</script>

<style>
</style>