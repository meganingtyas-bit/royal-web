<template>
  <div>
    <ProfilEdit />
  </div>
</template>
<script>
import config from '~/config/config.js'
const ProfilEdit = () =>
  import('~/components/' + config.theme.dashboard + '/profile/ProfileEdit.vue')

export default {
  name: 'edit',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },

  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'Edit User')
    }
  },
  data() {
    return {}
  },
  components: {
    ProfilEdit
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>