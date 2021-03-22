<template>
  <div>
    <SingleMitra />
  </div>
</template>
<script>
import config from '~/config/config.js'
import Lib from '~/system/lib/Lib'

const SingleMitra = () =>
  import('~/components/' + config.theme.public + '/single/SingleMitra.vue')

export default {
  name: 'single',

  layout(e) {
    return config.theme.public + '/Secondary'
  },
  head() {
    return {
      title: this.$lib.template.templateTitle(this, [
        this.apiContent.result.title
      ]),
      meta: this.$lib.template.generateMeta(this.apiContent.result.meta)
    }
  },
  async asyncData({ app, params }) {
    let param = {
      type_id: 8,
      id: params.id,
      slug: params.slug
    }
    let response = await app.$lib.ajax
      .fetch('GET', `${app.$config.baseUrlApi}/content/detail`, param)
      .then(response => {
        if (response.ok === 1) {
          return response
        }
      })
      .catch(e => {})
    return {
      apiContent: response
    }
  },
  data() {
    return {}
  },
  components: {
    SingleMitra
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>