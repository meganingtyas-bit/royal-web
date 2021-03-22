<template>
  <div>
    <StaticResetPassword />
  </div>
</template>

<script>
import config from '~/config/config.js'
const StaticResetPassword = () =>
  import(
    '~/components/' + config.theme.public + '/static/StaticResetPassword.vue'
  )
export default {
  name: 'resetPassword',
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Reset Password']),
      meta: []
    }
  },
  components: {
    StaticResetPassword
  },
  layout(e) {
    return config.theme.public + '/Auth'
  },
  data() {
    return {
      msg: 'resetPassword'
    }
  },
  async mounted() {
    if (typeof this.$route.query.v == 'undefined') {
      this.$router.replace('/verify/reset-password?v=3')
    }
    await this.$lib.ajax
      .fetch('GET', `${this.$config.baseUrlApi}/forgot-password-reset`, {
        token: this.$route.query.v
      })
      .then(response => {
        console.log(response)

        if (response.ok !== 1) {
          if (response.message === 'expired_token') {
            this.$router.replace('/verify/reset-password?v=2')
          }
          if (response.message === 'invalid_token') {
            this.$router.replace('/verify/reset-password?v=3')
          }
        }
      })
      .catch(e => {})
  }
}
</script>

<style lang="css" scoped></style>
