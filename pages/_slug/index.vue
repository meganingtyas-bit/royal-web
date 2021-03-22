<template>
  <div>
    <component v-bind:is="currentPage"></component>
  </div>
</template>
<script>
import config from '~/config/config.js'

const Error404 = () =>
  import('~/components/' + config.theme.name + '/errors/Error404.vue')
export default {
  name: 'index',
  layout(e) {
    return config.theme.name + '/Error'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, ['Page Not Found']),
      meta: ''
    }
  },
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {},
  computed: {
    currentPage() {
      return Error404
    }
  }
}
</script>
<style>
</style>