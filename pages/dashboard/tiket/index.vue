<template>
  <div>
    <TiketShow />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const TiketShow = () =>
  import('~/components/' + config.theme.dashboard + '/tiketEvent/TiketShow.vue')

  export default {
    name: 'index',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Tiket Event')
      }
    },
    data() {
      return {}
    },
    components: {
      TiketShow
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>