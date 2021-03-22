<template>
  <div>
    <MitraShow />
  </div>
</template>
<script>
import config from '~/config/config.js'
const MitraShow = () =>
  import('~/components/' + config.theme.dashboard + '/mitra/MitraShow.vue')

export default {
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'List Usaha')
    }
  },
  data() {
    return {}
  },
  components: {
    MitraShow
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>