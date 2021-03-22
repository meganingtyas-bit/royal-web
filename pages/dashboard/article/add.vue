<template>
  <div>
    <ArticleAdd />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const ArticleAdd = () =>
  import('~/components/' + config.theme.dashboard + '/article/ArticleAdd.vue')

  export default {
    name: 'add',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Tambah Artikel')
      }
    },
    data() {
      return {}
    },
    async fetch ({ store }) {
      await store.dispatch('category/GET_CATEGORY', {
        type_id: 10,
        limit: 20
      })
      await store.dispatch('address/GET_REGIONAL', {
        type_id: 10,
        limit: 20
      })
    },
    components: {
      ArticleAdd
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>

