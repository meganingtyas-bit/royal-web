<template>
  <div>
    <HeaderSecondary v-if="!$store.state.auth.logedIn" />
    <mainHeaderLogedIn v-if="$store.state.auth.logedIn" />
    <nuxt />
    <mainFooter />
  </div>
</template>
<script>
import mainFooter from '~/components/lightred/public/Footer.vue'
import HeaderSecondary from '~/components/lightred/public/HeaderSecondary.vue'
import mainHeaderLogedIn from '~/components/lightred/dashboard/Header.vue'

export default {
  name: 'Secondary',

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
  components: {
    mainFooter,
    HeaderSecondary,
    mainHeaderLogedIn
  },
  props: {},
  computed: {}
}
</script>
<style>
@import '~/assets/themes/lightred/util.css';
@import '~/assets/themes/lightred/app.css';
@import '~/assets/themes/lightred/public/style.css';
</style>