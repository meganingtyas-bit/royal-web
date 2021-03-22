<template>
  <div class="menu-header">
    <nav
      class="navbar navbar-expand-lg navbar-light is-transparent is-fixed-top"
      id="mainNav"
      ref="mainNav"
    >
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">
          <img src="/assets/themes/lightred/images/logo.png" class="img-logo" alt />
          <img src="/assets/themes/lightred/images/logo_color.png" class="dsp size-img" alt />
        </nuxt-link>
        <div class="drawer-toggle" 
          role="button" 
          v-show="!nav.toggleSidebar"
          @click="$store.dispatch('nav/toggleSidebar')">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class id="navbarResponsive">
          <MenuContent />
        </div>
      </div>
    </nav>
    <sidebar />
  </div>
</template>
<script>
import sidebar from '~/components/lightred/public/Sidebar.vue'
import MenuContent from '~/components/lightred/public/MenuContent'
export default {
  name: 'Header',

  data() {
    return {}
  },
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' })
    },
    goRegister() {
      this.$router.push({ name: 'register' })
    },
    scrollNav() {
      let navbar = document.getElementById('mainNav')
      let nav_classes = navbar.classList
      navbar = ''
      if (document.documentElement.scrollTop >= 150) {
        if (nav_classes.contains('shrink') === false) {
          nav_classes.toggle('shrink')
        }
      } else {
        if (nav_classes.contains('shrink') === true) {
          nav_classes.toggle('shrink')
        }
      }
    }
  },
  components: {
    MenuContent,
    sidebar
  },
  props: {},
  computed: {
    nav () {
      return this.$store.state.nav
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollNav)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollNav)
  }
}
</script>
<style>
</style>