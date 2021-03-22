<template>
  <div class="menu-header-dashboard">
    <nav
      class="navbar nav-logedin-member navbar-expand-lg navbar-light is-transparent is-fixed-top"
      id="mainNavDashboard"
    >
      <!-- <div class="container"> -->
      <nuxt-link to="/" class="navbar-brand">
        <img src="/assets/themes/lightred/images/logo_color.png" class="img-dashboard" alt />
      </nuxt-link>
      <div
        class="drawer-toggle icon-toggle-nav-logedin"
        role="button"
        v-show="!nav.toggleSidebar"
        @click="$store.dispatch('nav/toggleSidebar')"
      >
        <span class="fa fa-bars"></span>
      </div>
      <div class id="navbarResponsive" style="width:auto;right:0;position:fixed;">
        <MenuContent />
      </div>
      <!-- </div> -->
    </nav>
    <toogle />
  </div>
</template>
<script>
import toogle from '~/components/lightred/dashboard/toogle.vue'
import MenuContent from '~/components/lightred/dashboard/MenuContent'
export default {
  name: 'Header',
  data() {
    return {}
  },
  components: {
    MenuContent,
    toogle
  },
  methods: {},
  props: {},
  computed: {
    nav() {
      return this.$store.state.nav
    }
  }
}
</script>
<style>
</style>