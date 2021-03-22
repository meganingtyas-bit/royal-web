<template>
  <div>
    <ul class="navbar-nav ml-auto float-r">
      <li>
        <nuxt-link to="/">Beranda</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/event">Event</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mitra">Mitra Coffee</nuxt-link>
      </li>
      <!--       <li>
        <nuxt-link to="/forum">Forum</nuxt-link>
      </li>-->
      <li>
        <nuxt-link to="/kontak">Kontak Kami</nuxt-link>
      </li>
      <!-- <li> -->
      <!-- <nuxt-link><img src="/assets/themes/lightred/images/dashboard/bell.png" class=""></nuxt-link> -->
      <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <img src="/assets/themes/lightred/images/dashboard/bell.png" class />
          </template>
          <b-dropdown-item href="#">Notification 1</b-dropdown-item>
          <b-dropdown-item href="#">Notification 2</b-dropdown-item>
        </b-nav-item-dropdown>
      </li>-->
      <!-- <li>
        <nuxt-link>
            <span>Meganingtyas
            <img src="/assets/themes/lightred/images/dashboard/poto_profile.png" width="64" height="64">
            </span>
        </nuxt-link>
      </li>-->
      <li class="nav-user-dropdown">
        <div class @click="toggle">
          <em class="text-red-portal">{{$store.state.auth.authUser.name.substring(0, 20)}}</em>
          <img :src="$store.state.auth.authUser.image" class="img-user" />
        </div>

        <ul v-if="$store.state.nav.toggleTopUserList" class="nav-user-dropdown-list pl-0">
          <li>
            <nuxt-link to="/dashboard" class="fs-9 mr-0">
              <i class="fa fa-archive text-gray-portal"></i> Dashboard
            </nuxt-link>
          </li>

          <!-- <li>
            <nuxt-link to="/dashboard/profile/user/edit"><i class="fa fa-"></i> Profil</nuxt-link>
          </li>-->
          <li>
            <nuxt-link to="/logout" class="fs-9 mr-0">
              <i class="fa fa-sign-out text-gray-portal"></i> Keluar
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenuContent',

  data() {
    return {
      dataToggle: false
    }
  },

  methods: {
    toggle() {
      this.dataToggle = !this.dataToggle
      this.$store.dispatch('nav/toggleTopUserList', this.dataToggle)
    }
  },
  components: {},
  props: {},
  computed: {},
  mounted() {}
}
</script>
<style>
</style>