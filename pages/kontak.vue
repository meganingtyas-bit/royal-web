<template>
  <div>
    <StaticKontak />
  </div>
</template>

<script>
import config from '~/config/config.js'

const StaticKontak = () =>
  import('~/components/' + config.theme.public + '/static/StaticKontak.vue')

export default {
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Kontak Kami']),
      meta: []
    }
  },
  components: {
    StaticKontak
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
