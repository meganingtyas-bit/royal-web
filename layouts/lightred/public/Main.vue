<template>
  <div>
    <mainHeader v-if="!$store.state.auth.logedIn" />
    <mainHeaderLogedIn v-if="$store.state.auth.logedIn" />
    <nuxt />
    <mainFooter />
  </div>
</template>
<script>
import mainFooter from '~/components/lightred/public/Footer.vue'
import mainHeader from '~/components/lightred/public/Header.vue'
import mainHeaderLogedIn from '~/components/lightred/dashboard/Header.vue'
export default {
  name: 'Main',
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
    mainHeader,
    mainHeaderLogedIn
  },
  props: {},
  computed: {}
}
</script>
<style>
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import '~/assets/themes/lightred/util.css';
@import '~/assets/themes/lightred/app.css';

@import '~/assets/themes/lightred/public/style.css';
</style>