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
          <h5 class="my-4 text-443 ft-weight-shape">RESET</h5>

          <form @submit="submitResetPassword">
            <div class="pub-block-alert">
              <b-alert v-model="alert.show" :variant="alert.variant" dismissible>
                <span v-html="alert.message"></span>
              </b-alert>
            </div>

            <div class="form-group mb-2">
              <input
                type="password"
                class="form-control fs-14 br-25 form-pass"
                placeholder="Password"
                v-model="input.password"
              />
            </div>

            <div class="form-group mb-2">
              <input
                type="password"
                class="form-control fs-14 br-25 form-pass"
                placeholder="Konfirmasi Password"
                v-model="input.password_confirmation"
              />
            </div>

            <button type="submit" class="btn bg-red btn-block fs-14 py-1 text-white mt-4">RESET</button>
          </form>
        </div>
      </section>
    </div>
    <div class="gateFooter text-center py-3 text-white">
      <Copyright />
    </div>
  </div>
</template>
<script>
import Copyright from '~/components/lightred/public/Copyright.vue'
export default {
  name: 'StaticResetPassword',
  components: {
    Copyright
  },
  data() {
    return {
      input: {
        password: '',
        password_confirmation: '',
        token: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  methods: {
    submitResetPassword(e) {
      e.preventDefault()
      this.$loading.show({ delay: 0 })
      this.input.token = this.$route.query.v
      this.$lib.ajax
        .fetch(
          'POST',
          `${this.$config.baseUrlApi}/forgot-password-reset`,
          this.input
        )
        .then(response => {
          this.$loading.hide()

          if (response.ok === 1) {
            this.alert = {
              show: true,
              variant: 'success',
              message: response.message
            }
            this.$router.replace('/verify/reset-password?v=1')
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
                message: this.$lib.common.objectJoin(response.result, '<br/> ')
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
<style></style>
