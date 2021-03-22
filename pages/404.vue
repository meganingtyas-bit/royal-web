<template>
  <div>
    <StaticError />
  </div>
</template>
<script>
import config from '~/config/config.js'

const StaticError = () =>
  import('~/components/' + config.theme.public + '/static/StaticError.vue')
export default {
  name: 'error-404',
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Page Not Found']),
      meta: []
    }
  },
  data() {
    return {}
  },
  components: {
    StaticError
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>