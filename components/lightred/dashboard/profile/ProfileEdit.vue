<template>
  <div>
    <div class="dashboard-content dashboard-bg">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="dashboard-title">Profil Saya</h4>
          <img src="/assets/themes/lightred/images/dashboard/edit_profil.png" alt />
        </div>
        <div class="tabs-profile">
          <b-card no-body>
            <div class="ctmBody-content p-20">
              <div class="pub-block-alert">
                <b-alert v-model="alert.show" :variant="alert.variant" dismissible>
                  <span v-html="alert.message"></span>
                </b-alert>
              </div>
              <!-- /alert -->
              <b-card-text>
                <div class="d-md-flex align-items-center">
                  <img
                    width="120"
                    class="img-user-dashboard mr-3 my-2"
                    alt="foto profile"
                    :src="finput.image"
                  />
                  <div class="inputButton my-2">
                    <p class="fs-13 mb-1">Foto Profil</p>
                    <b-form-file
                      placeholder="Ganti Foto Profil"
                      drop-placeholder="Drop file here..."
                      class="fs-12"
                      accept=".jpg, .png, .gif"
                      @change="onFileChange"
                    ></b-form-file>
                    <div class="upload-guide fs-10 text-gray">
                      <p class="mb-0">Format: .Jpg, .png, .gif</p>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label class="m-0 fs-13">Status Akun</label>
                  </div>
                  <div class="col-md-6 p-0 fs-13">
                    <div v-if="finput.is_active === 1">
                      <span class="badge badge-success">Akun Aktif</span>
                    </div>
                    <div v-else>
                      <span class="badge badge-danger">Akun Tidak Aktif</span>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0 mt-2">
                    <label for="name" class="m-0 fs-13">
                      Nama Lengkap
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="name"
                      aria-describedby="namaLengkap"
                      v-model="finput.name"
                    />
                    <small
                      id="namaLengkap"
                      class="form-text text-muted fs-10"
                    >Isi dengan nama lengkap anda</small>
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label class="m-0 fs-13">Email</label>
                  </div>
                  <div class="col-md-6 p-0">
                    <input type="text" class="form-control fs-13" :value="finput.email" disabled />
                  </div>
                </div>

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0 mt-2">
                    <label for="jk" class="m-0 fs-13">
                      Jenis kelamin
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input type="radio" id="one" value="1" v-model="finput.gender" />
                    <label for="one">Laki-laki</label>
                    <input type="radio" id="two" value="2" v-model="finput.gender" />
                    <label for="two">Perempuan</label>
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="identification_number" class="m-0 fs-13">
                      Nomor KTP
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="identification_number"
                      v-model="finput.identification_number"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="birthdate" class="m-0 fs-13">
                      Tanggal Lahir
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <!-- <input
                      type="text"
                      class="form-control fs-13"
                      id="birthdate"
                      v-model="finput.birthdate"
                    />-->
                    <VueCtkDateTimePicker
                      v-model="finput.birthdate"
                      :auto-close="true"
                      :only-date="true"
                      :no-label="true"
                      locale="id"
                      formatted="ll"
                      format="YYYY-MM-DD"
                      label="Pilih Tanggal"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0 mt-2">
                    <label for="noTelepon" class="m-0 fs-13">
                      No Telepon
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="noTelepon"
                      aria-describedby="noTelep"
                      v-model="finput.mobilephone"
                    />
                    <small
                      id="noTelep"
                      class="form-text text-muted fs-10"
                    >Masukkan Kode Area! Contoh :021988754521 Atau 081212121245</small>
                  </div>
                </div>


                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="regional_" class="m-0 fs-13">
                      Profesi
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.profession_id"
                      id="profession_id"
                    >
                      <option
                        v-for="item in arrProfesi"
                        :key="item.account_profession_id"
                        :value="item.account_profession_id"
                      >{{item.account_profession_name}}</option>
                    </select>
                  </div>
                </div>


                <div class="d-md-flex align-items-center my-3" v-if="arrRegional.length > 1">
                  <div class="col-md-3 p-0">
                    <label for="regional_" class="m-0 fs-13">
                      Regional
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.client_regional_id"
                      id="client_regional_id"
                    >
                      <option
                        v-for="item in arrRegional"
                        :key="item.id"
                        :value="item.id"
                      >{{item.title}}</option>
                    </select>
                  </div>
                </div>

                <!-- WILAYAH -->
                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="provinsi_" class="m-0 fs-13">
                      Provinsi
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.province_id"
                      id="provinsi_"
                      @change="city"
                      ref="addressProvince"
                    >
                      <option v-for="item in arrProv" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- /provinsi -->

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="kota_" class="m-0 fs-13">
                      Kota
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.city_id"
                      id="kota_"
                      @change="subdistrict"
                      ref="addressCity"
                    >
                      <option v-for="item in arrCity" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- /kota -->

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="subdistrict_" class="m-0 fs-13">
                      Kecamatan
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.subdistrict_id"
                      id="subdistrict_"
                      @change="village"
                      ref="addressSubdistrict"
                    >
                      <option
                        v-for="item in arrSubdistric"
                        :key="item.id"
                        :value="item.id"
                      >{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- /Kabupaten -->

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="village_" class="m-0 fs-13">
                      Desa
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <select
                      class="form-control fs-13"
                      v-model="finput.village_id"
                      id="village_"
                      ref="addressVillage"
                    >
                      <option
                        v-for="item in arrVillage"
                        :key="item.id"
                        :value="item.id"
                      >{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- /dESA -->

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0 mt-2">
                    <label for="kodPos" class="m-0 fs-13">
                      Kode Pos
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="kodPos"
                      aria-describedby="kodePos"
                      v-model="finput.zipcode"
                      style="width: 100px"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0">
                    <label for="religion" class="m-0 fs-13">
                      Alamat Rumah
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <textarea
                      class="br-5 fs-12 p-10"
                      aria-describedby="alamat"
                      rows="3"
                      style="width: 100%;border:1px solid #ced4da;"
                      v-model="finput.address"
                    ></textarea>
                    <small id="alamat" class="form-text text-muted fs-10">*Max. 180 Karakter</small>
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="hobi" class="m-0 fs-13">Hobi</label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="hobi"
                      placeholder="membaca,berenang,bersepeda"
                      v-model="finput.hobby"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-start my-3">
                  <div class="col-md-3 p-0">
                    <label for="religion" class="m-0 fs-13">
                      Tanggal Bergabung
                      <span class="text-red">*</span>
                    </label>
                  </div>
                  <div
                    class="col-md-6 p-0 mr-2 fs-13"
                  >{{$moment(finput.join_datetime).format('LL')}}</div>
                </div>
                <div class="m-b-20"></div>

                <h4>SOSIAL MEDIA</h4>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="nomorKtp" class="m-0 fs-13">Instagram</label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="nomorKtp"
                      placeholder="@id_instagram"
                      v-model="finput.instagram"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="facebook" class="m-0 fs-13">Facebook</label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="facebook"
                      placeholder="@id_facebook"
                      v-model="finput.facebook"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="linkedin" class="m-0 fs-13">Linkedin</label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="linkedin"
                      placeholder="@id_linkedin"
                      v-model="finput.linkedin"
                    />
                  </div>
                </div>

                <div class="d-md-flex align-items-center my-3">
                  <div class="col-md-3 p-0">
                    <label for="twitter" class="m-0 fs-13">Twitter</label>
                  </div>
                  <div class="col-md-6 p-0 mr-2">
                    <input
                      type="text"
                      class="form-control fs-13"
                      id="twitter"
                      placeholder="@id_twitter"
                      v-model="finput.twitter"
                    />
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
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  dataapi: '',
  name: 'ProfileEdit',
  data() {
    return {
      finput: [],
      alert: {
        show: false,
        variant: '',
        message: ''
      },
      arrRegional: [],
      arrProv: [],
      arrCity: [],
      arrSubdistric: [],
      arrVillage: [],
      arrProfesi: []

    }
  },
  async mounted() {
    let dataapi = { id: this.$store.state.auth.authUser.id }
    await this.$lib.ajax
      .fetch(
        'GET',
        `${this.$config.baseUrlApi}/member/user/profile/data`,
        dataapi
      )
      .then(response => {
        if (response.ok === 1) {
          let userData = response.result.data
          const cookieRes = this.$cookies.get('userData')
          cookieRes.name = userData.name
          cookieRes.image = userData.image
          this.$cookies.set('cookie-name', cookieRes)
          this.finput = response.result.data
        }
      })
      .catch(e => {})
 

    await this.userRegional()
    await this.province()
    await this.city()
    await this.subdistrict()
    await this.village()
    await this.userProfesi()
  },

  components: {},
  methods: {
    async actSubmit() {
      this.$loading.show({ delay: 0 })

      let getFinput = Object.assign({}, this.finput)
      getFinput.hobby = JSON.stringify(getFinput.hobby)
      await this.$lib.ajax
        .fetch(
          'PUT',
          `${this.$config.baseUrlApi}/member/user/profile/update`,
          getFinput
        )
        .then(response => {
          this.$loading.hide()
          if (response.ok === 1) {
            this.alert = {
              show: true,
              variant: 'success',
              message: response.message
            }

            let param = {
              image: this.finput.image
            }
            this.$lib.ajax
              .fetch(
                'PUT',
                `${this.$config.baseUrlApi}/member/user/profile/change-avatar`,
                param
              )
              .then(response => {
                if (response.ok === 1) {
                }
              })
              .catch(e => {})

            window.scrollTo(0, 0)
            this.$router.go(0)
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
      this.$loading.show({ delay: 0 })
      this.$loading.hide()
    },

     userRegional() {
      this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/portal/regional/list`)
        .then(response => {
          this.arrRegional = response.result.data
          this.arrRegional.unshift({
            id: '',
            title: 'Pilih Regional'
          })

          let name = this.arrRegional.filter(v => {
            return v.id == this.finput.client_regional_id
          })
          this.finput.client_regional_name = name[0]['name']
        })
        .catch(e => {})
    },

    province() {
      this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/address/province`)
        .then(response => {
          this.arrProv = response.result.data
          this.arrProv.unshift({
            id: '',
            name: 'Pilih Provinsi'
          })
          let name = this.arrProv.filter(v => {
            return v.id == this.finput.province_id
          })
          this.finput.province_name = name[0]['name']
        })
        .catch(e => {})
    },
    city() {
      let param = { province_id: this.finput.province_id }
      this.arrCity.unshift({
        id: '',
        name: 'Pilih Kota'
      })
      this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/address/city`, param)
        .then(response => {
          this.arrSubdistric = []
          this.arrVillage = []
          this.arrCity = response.result.data

          let name = this.arrCity.filter(v => {
            return v.id == this.finput.city_id
          })
          this.finput.city_name = name[0]['name']
        })
        .catch(e => {})
    },
    subdistrict() {
      let param = { city_id: this.finput.city_id }
      this.arrSubdistric.unshift({
        id: '',
        name: 'Pilih Kecamatan'
      })
      this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/address/subdistrict`, param)
        .then(response => {
          this.arrVillage = []
          this.arrSubdistric = response.result.data

          let name = this.arrSubdistric.filter(v => {
            return v.id == this.finput.subdistrict_id
          })
          this.finput.subdistrict_name = name[0]['name']
        })
        .catch(e => {})
    },
    village() {
      let param = { subdistrict_id: this.finput.subdistrict_id }
      this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/address/village`, param)
        .then(response => {
          this.arrVillage = response.result.data
          this.arrVillage.unshift({
            id: '',
            name: 'Pilih Desa'
          })

          let name = this.arrVillage.filter(v => {
            return v.id == this.finput.village_id
          })
          this.finput.village_name = name[0]['name']
        })
        .catch(e => {})
    },


     userProfesi() {
      this.$lib.ajax
        .fetch(
          'GET',
          `${this.$config.baseUrlApi}/member/user/profile/get-profession`
        )
        .then(response => {
          this.arrProfesi = response.result.data

          console.log(arrProfesi)
          this.arrProfesi.unshift({
            id: '',
            name: 'Pilih Profesi'
          })
        })
        .catch(e => {})
    },



    onFileChange(e) {
      this.$loading.show({ delay: 0 })

      this.$lib.ajax.fetchUpload(e).then(response => {
        this.$loading.hide()
        if (response.ok === 1) {
          this.finput.image = response.data[0]['original']
        }
      })
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>