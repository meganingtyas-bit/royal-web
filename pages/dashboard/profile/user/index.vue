<template>
  <div>
    <ShowProfile />
  </div>
</template>
<script>
import config from '~/config/config.js'
const ShowProfile = () =>
  import('~/components/' + config.theme.dashboard + '/profile/ProfileShow.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'User')
    }
  },
  data() {
    return {}
  },
  components: {
    ShowProfile
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>