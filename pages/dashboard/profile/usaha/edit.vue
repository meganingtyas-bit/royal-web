<template>
  <div>
    <UsahaEdit />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const UsahaEdit = () =>
    import('~/components/' + config.theme.dashboard + '/mitra/MitraEdit.vue')

  export default {
    name: 'edit',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Ubah Usaha')
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
      UsahaEdit
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>