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
  async mounted() {
    if (typeof this.$route.query.v == 'undefined') {
      this.status = '3'
    }
    await this.$lib.ajax
      .fetch('GET', `${this.$config.baseUrlApi}/account-verification`, {
        token: this.$route.query.v
      })
      .then(response => {
        console.log(response)

        if (response.ok === 1) {
          this.status = '1'
        } else {
          if (response.message === 'expired_token') {
            this.status = '2'
          }
          if (response.message === 'invalid_token') {
            this.status = '3'
          }
        }
      })
      .catch(e => {})

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
      status: 1,
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
          this.title = 'VERIFIKASI PENDAFTARAN SUKSES'
          this.message = 'Verifikasi Pendaftaran berhasil'
          this.colorText = 'text-success'
          return
          break

        case '2':
          this.title = 'VERIFIKASI PENDAFTARAN GAGAL'
          this.message = 'Maaf, Token yang anda gunakan sudah kadaluarsa'
          this.colorText = 'text-danger'
          return
          break

        case '3':
          this.title = 'VERIFIKASI PENDAFTARAN GAGAL'
          this.message = 'Maaf, Token yang digunakan tidak sesuai'
          this.colorText = 'text-danger'
          return
          break

        default:
          return
          break
      }
    }
  }
}
</script>
<style></style>
