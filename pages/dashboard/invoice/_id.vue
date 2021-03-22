<template>
  <div>
    <InvoiceConfirmation />
  </div>
</template>
<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  const InvoiceConfirmation = () =>
  import('~/components/' + config.theme.dashboard + '/invoice/InvoiceConfirmation.vue')
  
  export default {
    name: 'detail',
    data() {
      return {
      }
    },
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Konfirmasi Invoice')
      }
    },
    async fetch ({ store }) {
      await store.dispatch('bank/GET_BANK')
      await store.dispatch('bank/GET_DESTINATION')
    },
    props: {},
    components: {
      InvoiceConfirmation
    },
    mounted() {},
    computed: {},
    methods: {},
    created () {},
    destroyed () {}
  }
</script>