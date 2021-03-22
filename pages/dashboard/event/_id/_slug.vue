<template>
  <div>
    <EventDetail />
  </div>
</template>
<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  const EventDetail = () =>
  import('~/components/' + config.theme.dashboard + '/event/EventDetail.vue')
  
  export default {
    name: 'detail',
    data() {
      return {
      }
    },
    layout(e) {
      return config.theme.dashboard + '/Main'
    },
    head() {
      return {
        title: this.$lib.template.templateTitle(this, 'List Event')
      }
    },
    async asyncData({ app, params }) {
      let response = await app.$lib.ajax
        .fetch('GET', `${app.$config.baseUrlApi}/content/detail`, {
          type_id: 9,
          id: params.id,
          slug: params.slug
        })
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
    props: {},
    components: {
      EventDetail
    },
    mounted() {},
    computed: {},
    methods: {},
    created () {},
    destroyed () {}
  }
</script>