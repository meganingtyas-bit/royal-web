<template>
  <div>
    <EventShow />
  </div>
</template>
<script>
import config from '~/config/config.js'
const EventShow = () =>
  import('~/components/' + config.theme.dashboard + '/event/EventShow.vue')
export default {
  middleware: 'auth',
  name: 'index',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'List Event')
    }
  },
  data() {
    return {}
  },
  components: {
    EventShow
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>