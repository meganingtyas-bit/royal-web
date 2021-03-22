<template>
  <div>
    <EventEdit />
  </div>
</template>
<script>
import config from '~/config/config.js'
const EventEdit = () =>
  import('~/components/' + config.theme.dashboard + '/event/EventEdit.vue')

export default {
  name: 'edit',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'Edit Event')
    }
  },
  data() {
    return {}
  },
  async fetch ({ store }) {
    await store.dispatch('category/GET_CATEGORY', {
      type_id: 9,
      limit: 20
    })
    await store.dispatch('address/GET_REGIONAL', {
      type_id: 9,
      limit: 20
    })
    await store.dispatch('address/GET_PROVINCE')
  },
  components: {
    EventEdit
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>

