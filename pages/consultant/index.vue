<template>
  <div>
    <ArchiveConsultant />
  </div>
</template>
<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const ArchiveConsultant = () =>
  import(
    '~/components/' + config.theme.public + '/archive/ArchiveConsultant.vue'
  )

export default {
  name: 'index',
  async fetch({ params, store }) {},
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Konsultan']),
      meta: []
    }
  },
  data() {
    return {}
  },
  components: {
    ArchiveConsultant
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>