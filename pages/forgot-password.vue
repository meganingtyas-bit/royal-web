<template>
  <div>
    <StaticForgotPassword />
  </div>
</template>
<script>
import config from '~/config/config.js'
const StaticForgotPassword = () =>
  import(
    '~/components/' + config.theme.public + '/static/StaticForgotPassword.vue'
  )
export default {
  name: 'forgotPassword',

  components: {
    StaticForgotPassword
  },
  layout(e) {
    return config.theme.public + '/Auth'
  },
  data() {
    return {
      msg: 'forgotPassword'
    }
  }
}
</script>
<style></style>
