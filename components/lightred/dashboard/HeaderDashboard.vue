<template>
  <div class="menu-header-dashboard">
    <nav
      class="navbar nav-logedin-member-inside navbar-expand-lg navbar-light is-transparent is-fixed-top"
      id="mainNavDashboard"
    >
      <div class="navlogedin-toggle">
        <a
          href="javascript:;"
          class="toggle-sidebar d-flex justify-content-center py-4 px-4"
          @click="$store.dispatch('nav/toggleLogedinNav')"
        >
          <div class="groundToggle">
            <img src="/assets/themes/lightred/images/dashboard/menu.svg" width="20" alt />
          </div>
        </a>
      </div>

      <!-- <div class="container"> -->
      <!-- <nuxt-link to="/" class="navbar-brand">
        <img src="/assets/themes/lightred/images/logo_color.png" class="img-dashboard" alt />
      </nuxt-link>-->
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
  name: 'HeaderDashboard',
  components: {
    MenuContent,
    toogle
  },
  data() {
    return {}
  },
  async mounted() {
    await this.onDeviceMobile()
  },
  methods: {
    async onDeviceMobile() {
      if (this.isMqTablet || this.isMqMobile) {
        await this.$store.dispatch('nav/toggleLogedinNavMobile', true)
      } else {
        await this.$store.dispatch('nav/toggleLogedinNavMobile', false)
      }
    }
  },
  props: {},
  computed: {
    nav() {
      return this.$store.state.nav
    },
    isMqTablet() {
      return this.$mq === 'tablet' ? true : false
    },
    isMqMobile() {
      return this.$mq === 'mobile' ? true : false
    }
  }
}
</script>
<style></style>
