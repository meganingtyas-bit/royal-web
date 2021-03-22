<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  name: 'Auth',

  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },

  data() {
    return {}
  },

  methods: {},
  components: {},
  props: {},
  computed: {}
}
</script>
<style>
@import '~/assets/themes/lightred/util.css';
@import '~/assets/themes/lightred/app.css';

@import '~/assets/themes/lightred/public/style.css';
</style>