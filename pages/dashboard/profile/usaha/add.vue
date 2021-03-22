<template>
  <div>
    <UsahaAdd />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const UsahaAdd = () =>
    import('~/components/' + config.theme.dashboard + '/mitra/MitraAdd.vue')

  export default {
    name: 'add',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Tambah Usaha')
      }
    },
    data() {
      return {}
    },
    async fetch ({ store }) {
      await store.dispatch('category/GET_CATEGORY', {
        type_id: 8,
        limit: 20
      })
      await store.dispatch('address/GET_REGIONAL', {
        type_id: 8,
        limit: 20
      })
      await store.dispatch('address/GET_PROVINCE')
    },
    components: {
      UsahaAdd
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>