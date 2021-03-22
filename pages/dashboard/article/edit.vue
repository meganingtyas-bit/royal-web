<template>
  <div>
    <ArticleEdit />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const ArticleEdit = () =>
  import('~/components/' + config.theme.dashboard + '/article/ArticleEdit.vue')

  export default {
    name: 'edit',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Edit Artikel')
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
      ArticleEdit
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>

