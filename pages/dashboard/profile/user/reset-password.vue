<template>
  <div>
    <ProfileResetPassword />
  </div>
</template>
<script>
import config from '~/config/config.js'
const ProfileResetPassword = () =>
  import(
    '~/components/' + config.theme.dashboard + '/profile/ProfileResetPassword'
  )

export default {
  name: 'resetpassword',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'Ganti Password')
    }
  },
  data() {
    return {}
  },
  components: {
    ProfileResetPassword
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>