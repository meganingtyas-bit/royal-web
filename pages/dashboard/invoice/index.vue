<template>
  <div>
    <InvoiceShow />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const InvoiceShow = () =>
    import('~/components/' + config.theme.dashboard + '/invoice/InvoiceShow.vue')

  export default {
    name: 'index',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Invoice')
      }
    },
    data() {
      return {}
    },
    components: {
      InvoiceShow
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>