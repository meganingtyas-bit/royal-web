<template>
  <div>
    <StaticLogin />
  </div>
</template>

<script>
import config from '~/config/config.js'
const StaticLogin = () =>
  import('~/components/' + config.theme.public + '/static/StaticLogin.vue')

export default {
  name: 'login',
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Login']),
      meta: []
    }
  },
  layout(e) {
    return config.theme.public + '/Auth'
  },
  data() {
    return {
      msg: 'login'
    }
  },
  components: {
    StaticLogin
  }
}
</script>

<style lang="css" scoped>
</style>