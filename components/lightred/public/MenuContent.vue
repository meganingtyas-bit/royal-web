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
      <li>
        <div class="btn-group btn-font" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-white-lightred" @click="goLogin">MASUK</button>
          <button type="button" class="btn btn-danger-lightred" @click="goRegister">DAFTAR</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenuContent',

  data() {
    return {}
  },
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' })
    },
    goRegister() {
      this.$router.push({ name: 'register' })
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