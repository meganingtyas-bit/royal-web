<template>
  <div>
    <div class="container">
      <div class="verify-after-email">
        <div class="title" :class="colorText">{{ title }}</div>
        <div class="desc ">{{ message }}</div>
        <div v-if="status === '1'" class="btn-go p-t-30 p-b-30">
          <nuxt-link to="/login" class="btn btn-success">Masuk</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  mounted() {
    this.status = this.$route.query.v
    this.display()
  },
  layout({ app }) {
    return app.$config.theme.public + '/Secondary'
  },
  head() {
    return ''
  },
  data() {
    return {
      status: '1',
      title: '',
      message: '',
      colorText: ''
    }
  },
  components: {},
  methods: {
    display() {
      switch (this.status) {
        case '1':
          this.title = 'SUKSES'
          this.message = 'Reset Password Berhasil'
          this.colorText = 'text-success'
          return
          break

        case '2':
          this.title = 'TOKEN KADALUARSA'
          this.message = 'Maaf, Token yang anda gunakan sudah kadaluarsa'
          this.colorText = 'text-danger'
          return
          break

        case '3':
          this.title = 'TOKEN TIDAK SESUAI'
          this.message = 'Maaf, Token yang digunakan tidak sesuai'
          this.colorText = 'text-danger'
          return
          break

        default:
          this.$router.replace('/')
          return (this.message = '')
          break
      }
    }
  }
}
</script>
<style></style>
