<template>
  <div>
    <StaticRegister />
  </div>
</template>

<script>
import config from '~/config/config.js'
const StaticRegister = () =>
  import('~/components/' + config.theme.public + '/static/StaticRegister.vue')

export default {
  name: 'register',
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Register']),
      meta: []
    }
  },
  components: {
    StaticRegister
  },
  layout(e) {
    return config.theme.public + '/Auth'
  },
  data() {
    return {
      msg: 'register'
    }
  }
}
</script>

<style lang="css" scoped>
</style>