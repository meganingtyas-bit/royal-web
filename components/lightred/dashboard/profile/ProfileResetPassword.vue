<template>
  <div>
    <div class="dashboard-content dashboard-bg">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="dashboard-title">Ganti Password</h4>
          <img
            src="/assets/themes/lightred/images/dashboard/edit_profil.png"
            alt
          />
        </div>
        <div class="tabs-profile">
          <div class="ctmBody-content p-20">
            <div class="pub-block-alert">
              <b-alert
                v-model="alert.show"
                :variant="alert.variant"
                dismissible
              >
                <span v-html="alert.message"></span>
              </b-alert>
            </div>
            <!-- /alert -->
            <b-card-text>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="old_password" class="m-0 fs-13"
                    >Password Lama</label
                  >
                </div>
                <div class="col-md-6 p-0">
                  <div class="input-group mb-3">
                    <input
                      v-model="input.old_password"
                      type="password"
                      class="form-control fs-13"
                      id="old_password"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text hov-pointer"
                        id="btn-eye"
                        @click="showPassword"
                      >
                        <span class="btn-eye-icon fa fa-eye-slash"></span
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="new_password" class="m-0 fs-13"
                    >Password Baru</label
                  >
                </div>
                <div class="col-md-6 p-0">
                  <div class="input-group mb-3">
                    <input
                      v-model="input.new_password"
                      type="password"
                      class="form-control fs-13"
                      id="new_password"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text hov-pointer"
                        id="btn-eye"
                        @click="showPassword"
                      >
                        <span class="btn-eye-icon fa fa-eye-slash"></span
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="new_password_confirmation" class="m-0 fs-13"
                    >Ulangi Password Baru</label
                  >
                </div>
                <div class="col-md-6 p-0">
                  <div class="input-group mb-3">
                    <input
                      v-model="input.new_password_confirmation"
                      type="password"
                      class="form-control fs-13"
                      id="new_password_confirmation"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text hov-pointer"
                        id="btn-eye"
                        @click="showPassword"
                      >
                        <span class="btn-eye-icon fa fa-eye-slash"></span
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center py-2">
                <button @click="actSubmit" class="btn bg-red text-white px-4">
                  <div class="d-flex align-items-center">
                    <img
                      src="/assets/themes/lightred/images/dashboard/save_1.png"
                      class="mr-1"
                      alt
                    />SIMPAN
                  </div>
                </button>
              </div>
            </b-card-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileEdit',

  async mounted() {},
  data() {
    return {
      input: {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      },
      displayPassword: false
    }
  },
  components: {},
  methods: {
    async actSubmit(e) {
      e.preventDefault()
      this.$loading.show({ delay: 0 })
      let tinput = this.input
      await this.$lib.ajax
        .fetch(
          'PUT',
          `${this.$config.baseUrlApi}/member/user/profile/change-password`,
          tinput
        )
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
                message: this.$lib.common.objectJoin(response.result, '<br/> ')
              }
            }
          }
        })
        .catch(e => {})
    },
    actReset() {
      this.$loading.show({ delay: 500 })
      this.$loading.hide()
    },
    showPassword(e) {
      let elig = e.target.closest('.input-group')
      let eyeSlash = elig.querySelector('.btn-eye-icon').classList
      this.displayPassword = !this.displayPassword
      if (this.displayPassword === true) {
        elig.querySelector('input').type = 'text'
        eyeSlash.add('fa-eye')
        eyeSlash.remove('fa-eye-slash')
      } else {
        elig.querySelector('input').type = 'password'
        eyeSlash.remove('fa-eye')
        eyeSlash.add('fa-eye-slash')
      }
    }
  },
  props: {},
  computed: {}
}
</script>
<style></style>
