<template>
  <div>
    <div class="box-wraper" :class="{ toggleNavLogedin: $store.state.nav.toggleLogedinNav }">
      <div class="d-flex">
        <div class="width-side" :class="{ backFold: $store.state.nav.toggleLogedinNav }">
          <div class="sidebar" :class="{ activeSidebar: $store.state.nav.toggleLogedinNav }">
            <sidebar />
          </div>
        </div>
        <!-- <div class="box-join"> -->

        <mainHeader />
        <!-- </div> -->

        <div class="content-width p-t-65" :class="{ mContent: $store.state.nav.toggleLogedinNav }">
          <nuxt />
        </div>
      </div>
    </div>
    <mainFooter />
  </div>
</template>
<script>
import sidebar from '~/components/lightred/dashboard/Sidebar.vue'
import mainFooter from '~/components/lightred/dashboard/Footer.vue'
import mainHeader from '~/components/lightred/dashboard/HeaderDashboard.vue'
export default {
  name: 'Main',

  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },

  data() {
    return {
      activeTab: true
    }
  },

  methods: {},
  components: {
    mainFooter,
    mainHeader,
    sidebar
  },
  props: {},
  computed: {}
}
</script>
<style>
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import '~/assets/themes/lightred/util.css';
@import '~/assets/themes/lightred/app.css';

@import '~/assets/themes/lightred/dashboard/style.css';
</style>
