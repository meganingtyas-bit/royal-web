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
          <h5 class="my-3 text-443 ft-weight-shape">MASUK</h5>

          <form @submit="submitLogin">
            <div class="pub-block-alert">
              <b-alert v-model="alert.show" :variant="alert.variant" dismissible>
                <span v-html="alert.message"></span>
              </b-alert>
            </div>
            <div class="form-group mb-2">
              <input
                type="text"
                class="form-control form-email fs-14 br-25"
                placeholder="Email"
                v-model="input.email"
              />
            </div>
            <div class="form-group mb-2">
              <input
                type="password"
                class="form-control form-pass fs-14 br-25"
                placeholder="Kata Sandi"
                v-model="input.password"
              />
            </div>
            <nuxt-link to="/forgot-password" class="text-gray fs-14">Lupa Kata Sandi ?</nuxt-link>

            <button type="submit" class="btn bg-red btn-block fs-14 py-1 text-white m-t-18">MASUK</button>
          </form>
          <p to="#" class="text-gray py-3 m-0 fs-12">atau</p>

          <button
            outline
            fab
            @click="loginGoogle"
            color="#4285F4"
            class="btn bg-white btn-block fs-14 py-1 text-gray google-button d-flex align-items-center justify-content-center"
          >
            <img src="/assets/themes/lightred/images/google.png" class="mr-2" alt />
            Masuk Via Google
          </button>
          <div class="mt-3">
            <p class="text-gray fs-13 mb-1">Belum Punya Akun?</p>
            <nuxt-link to="/register" class="text-443 fs-14">DAFTAR SEKARANG</nuxt-link>
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
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
export default {
  name: 'StaticLogin',
  data() {
    return {
      msg: 'login',
      input: {
        email: '',
        password: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  components: {
    Copyright
  },
  computed: {},
  methods: {
    async submitLogin(e) {
      e.preventDefault()
      this.$loading.show({ delay: 0 })
      await this.$lib.ajax
        .fetch('POST', `${this.$config.baseUrlApi}/login`, this.input)
        .then(response => {
          this.$loading.hide()
          console.log(response)

          if (response.ok === 1) {
            this.alert = {
              show: true,
              variant: 'success',
              message: response.message
            }
            this.$lib.store.set('logedIn', true)
            this.$cookies.set('userData', response.result.user, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7
            })
            window.scrollTo(0, 0)

            return this.$router.go(0)
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
    },
    loginGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let additionalUserInfo = result.additionalUserInfo
          this.loginSSO(additionalUserInfo)

          // store the user ore wathever
        })
        .catch(e => {
          console.log(e)
        })
    },
    loginSSO(additionalUserInfo) {
      let ssoData = {
        email: additionalUserInfo.profile.email,
        name: additionalUserInfo.profile.name,
        image: additionalUserInfo.profile.picture
      }
      this.$loading.show({ delay: 0 })
      this.$lib.ajax
        .fetch('POST', `${this.$config.baseUrlApi}/login-sso`, ssoData)
        .then(response => {
          this.$loading.hide()
          if (response.ok === 1) {
            this.alert = {
              show: true,
              variant: 'success',
              message: response.message
            }
            this.$lib.store.set('logedIn', true)
            this.$cookies.set('userData', response.result.user, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7
            })
            window.scrollTo(0, 0)

            return this.$router.go(0)
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
