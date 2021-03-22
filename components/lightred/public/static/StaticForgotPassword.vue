<template>
  <div>
    <div class="text-center body-sec">
      <section class="d-flex justify-content-center mtAuto">
        <div class="col-lg-12 col-md-12 col-12 box-form-login br-10 box-shadow text-center">
          <div class="d-flex justify-content-center">
            <nuxt-link to="/">
              <img src="/assets/themes/lightred/images/logo_login.png" alt="Logo" />
            </nuxt-link>
          </div>
          <h5 class="my-4 text-443 ft-weight-shape">LUPA PASSWORD</h5>
          <form @submit="submitForgotPassword">
            <div class="pub-block-alert">
              <b-alert v-model="alert.show" :variant="alert.variant" dismissible>
                <span v-html="alert.message"></span>
              </b-alert>
            </div>

            <div class="form-group mb-2">
              <input
                type="email"
                class="form-control fs-14 br-25 form-email"
                placeholder="Email"
                v-model="input.email"
              />
            </div>
            <button type="submit" class="btn bg-red btn-block fs-14 py-1 text-white mt-4">KIRIM</button>
          </form>
          <div class="mt-5">
            <p class="text-gray fs-13 mb-1">Sudah Punya Akun?</p>
            <nuxt-link to="/login" class="text-443 fs-14">MASUK</nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <div class="gateFooter text-center py-2 text-white">
      <Copyright />
    </div>
  </div>
</template>
<script>
import Copyright from '~/components/lightred/public/Copyright.vue'
export default {
  name: 'StaticForgotPassword',
  components: {
    Copyright
  },
  data() {
    return {
      input: {
        email: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },

  methods: {
    submitForgotPassword(e) {
      this.$loading.show({ delay: 0 })
      e.preventDefault()
      this.$lib.ajax
        .fetch('POST', `${this.$config.baseUrlApi}/forgot-password`, this.input)
        .then(response => {
          this.$loading.hide()

          if (response.ok === 1) {
            this.alert = {
              show: true,
              variant: 'success',
              message: response.message
            }
          } else {
            if (response.ok === 0) {
              this.alert = {
                show: true,
                variant: 'danger',
                message: response.message
              }
            } else {
              this.alert = {
                show: true,
                variant: 'danger',
                message: 'Email is required'
              }
            }
          }
        })
        .catch(e => {})
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>