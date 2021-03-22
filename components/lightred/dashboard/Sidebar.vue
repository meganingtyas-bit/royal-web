<template>
  <div>
    <nuxt-link to="/">
      <div class="toggle-sidebar d-flex justify-content-center py-2 px-0">
        <img
          v-if="$store.state.nav.toggleLogedinNav === false"
          src="/assets/themes/lightred/images/dashboard/logo_sidebar.png"
          class
        />
        <img
          v-if="$store.state.nav.toggleLogedinNav === true"
          src="/assets/themes/lightred/images/dashboard/logo_sidebar_icon.png"
          class
        />
      </div>
    </nuxt-link>

    <ul type="none" class="text-white mt-4">
      <h6>KONTEN PENGGUNA</h6>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/dashboard.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Dashboard</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/profile/usaha">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/profil_usaha.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Profil Usaha</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/article">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/artikel.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Artikel</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/news">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/artikel.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Berita</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/event">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/event.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Event</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/tiket">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/event.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Tiket Event</div>
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/forum">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/forum.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Forum</div>
        </nuxt-link>
      </li>-->
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/invoice">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/profil_usaha.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Invoice</div>
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/workshop.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Workshop</div>
        </nuxt-link>
      </li>-->
      <!-- <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/forum.png" class="img-filter-white mr-1">
            <div class="sideText">Forum</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/akun_premium.png" class="img-filter-white mr-1">
            <div class="sideText">Akun Premium</div>
          </nuxt-link>
        </li> 
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/chat.png" class="img-filter-white mr-1">
            <div class="sideText">Chat Pendamping Bisnis</div>
          </nuxt-link>
      </li>-->
    </ul>
    <!-- <ul type="none" class="text-white">
        <h6>ALAT PENGGUNA</h6>
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/tambahteman"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/tambah_teman.png" class="img-filter-white mr-1">
            <div class="sideText">Daftarkan Teman</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/alat_bisnis.png" class="img-filter-white mr-1">
            <div class="sideText">Alat Bisnis</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/pasang_iklan.png" class="img-filter-white mr-1">
            <div class="sideText">Pasang Iklan Portal</div>
          </nuxt-link>
        </li>    
    </ul>-->
    <ul type="none" class="text-white">
      <h6>PENGATURAN PENGGUNA</h6>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/profile/user/edit">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/edit_profil.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Profil Saya</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="d-flex align-items-center" to="/dashboard/profile/user/reset-password">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/edit_password.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Ganti Password</div>
        </nuxt-link>
      </li>
      <!-- <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/asset1.png" class="img-filter-white mr-1">
            <div class="sideText">Panduan</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="d-flex align-items-center" to="/dashboard/"> 
            <img src="/assets/themes/lightred/images/dashboard/icon/download.png" class="img-filter-white mr-1">
            <div class="sideText">Unduh File</div>
          </nuxt-link>
      </li>-->
      <li>
        <nuxt-link class="d-flex align-items-center" to="/logout">
          <img
            src="/assets/themes/lightred/images/dashboard/icon/logout.png"
            class="img-filter-white mr-1"
          />
          <div class="sideText">Keluar</div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>