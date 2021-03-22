<template>
  <div>
    <mainDashboard />
    <!-- <Maintenance /> -->
  </div>
</template>
<script>
import config from '~/config/config.js'
const mainDashboard = () =>
  import(
    '~/components/' + config.theme.dashboard + '/dashboard/DashboardShow.vue'
  )
// const Maintenance = () => import('~/components/utils/Maintenance.vue')
export default {
  name: 'index',
  middleware: 'auth',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this)
    }
  },
  data() {
    return {}
  },
  components: {
    mainDashboard
    // Maintenance
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>