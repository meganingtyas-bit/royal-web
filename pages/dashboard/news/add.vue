<template>
  <div>
    <NewsAdd />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const NewsAdd = () =>
    import('~/components/' + config.theme.dashboard + '/news/NewsAdd.vue')

  export default {
    name: 'add',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Tambah Berita')
      }
    },
    data() {
      return {}
    },
    async fetch ({ store }) {
      await store.dispatch('category/GET_CATEGORY', {
        type_id: 12,
        limit: 20
      })
      await store.dispatch('address/GET_REGIONAL', {
        type_id: 12,
        limit: 20
      })
    },
    components: {
      NewsAdd
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>

