<template>
  <div>
    <ArchiveForum />
  </div>
</template>
    
<script>
import config from '~/config/config.js'
const ArchiveForum = () =>
  import('~/components/' + config.theme.public + '/archive/ArchiveForum.vue')
export default {
  name: 'index',
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Forum']),
      meta: []
    }
  },
  data() {
    return {}
  },
  components: { ArchiveForum },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>