<template>
  <div>
    <EventAdd />
  </div>
</template>
<script>
import config from '~/config/config.js'
const EventAdd = () =>
  import('~/components/' + config.theme.dashboard + '/event/EventAdd.vue')

export default {
  name: 'add',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, 'Tambah Event')
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
    EventAdd
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>