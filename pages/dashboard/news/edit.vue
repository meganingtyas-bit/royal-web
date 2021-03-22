<template>
  <div>
    <NewsEdit />
  </div>
</template>
<script>
  import config from '~/config/config.js'
  const NewsEdit = () =>
    import('~/components/' + config.theme.dashboard + '/news/NewsEdit.vue')

  export default {
    name: 'edit',
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'Edit Berita')
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
      NewsEdit
    },
    methods: {},
    props: {},
    computed: {}
  }
</script>

