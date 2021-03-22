<template>
  <div>
    <div class="dashboard-content">
      <div class="container">
        <div class="d-flex detail-loc fs-12 text-red mb-3">
          <nuxt-link to="/dashboard" class="text-default mr-1">Dashboard</nuxt-link>>>
          <nuxt-link to="/dashboard/profile/usaha" class="text-default mx-1">Mitra</nuxt-link>>>
          <nuxt-link to="#" class="text-default mx-1">Ubah Usaha</nuxt-link>
        </div>
        <div class="d-flex align-items-center">
          <img src="/assets/themes/lightred/images/subtitle_red.png" class="mr-2" alt />
          <h4 class="dashboard-title m-0">Ubah Usaha</h4>
        </div>
        <div class="bg-white br-10 box-shadow p-md-3 p-2 mt-4">
          <div class="d-md-flex justify-content-between">
            <div class="col-md-6 p-0">
              <div class="form-group">
                <label for="namaUsaha" class="fs-12">
                  Nama Usaha
                  <span class="text-red">*</span>
                </label>
                <input
                  type="text"
                  class="form-control fs-13"
                  id="namaUsaha"
                  v-model="finput.title"
                  value="arrMitra.title"
                />
                <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.title }}</small> -->
              </div>
              <div class="form-group d-flex">
                <div class="col p-0">
                  <label for="kategoriDropdown" class="fs-12">Kategori</label>
                  <select
                    class="form-control fs-13"
                    id="kategoriDropdown"
                    v-model="finput.category_id"
                    style="width: 95%"
                  >
                    <option
                      :selected="item.id==finput.category_id"
                      v-for="item in arrCategory"
                      :key="item.id"
                      :value="item.id"
                    >{{item.title}}</option>
                  </select>
                  <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.category_id }}</small> -->
                </div>
              </div>
              <div class="form-group">
                <label for="nomorTelepon" class="fs-12">Nomor Telepon</label>
                <input
                  type="text"
                  class="form-control fs-13"
                  id="nomorTelepon"
                  v-model="finput.content.phonenumber"
                  value="arrMitra.content.phonenumber"
                />
                <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.content.phonenumber }}</small> -->
              </div>
              <div class="form-group ctmEditor">
                <label for="alamatUsaha" class="fs-12">
                  Alamat Usaha
                  <span class="text-red">*</span>
                </label>
                <textarea rows="4" id="alamatUsaha" class="fs-13" v-model="finput.content.address">{{arrMitra.content.address}}
                </textarea>
                <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.content.address }}</small> -->
              </div>
              <div class="form-group d-flex flex-wrap">
                <div class="col-md-6 mb-3 p-0">
                  <label for="provinsi_" class="fs-12">
                    Provinsi
                    <span class="text-red">*</span>
                  </label>
                  <select
                    class="form-control fs-13"
                    v-model="finput.content.province"
                    id="provinsi_"
                    @change="city"
                    style="width: 95%"
                  >
                    <option
                      :selected="item.id==finput.content.province"
                      v-for="item in arrProv"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                  <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.content.province }}</small> -->
                </div>
                <div class="col-md-6 mb-3 p-0">
                  <label for="kota_" class="fs-12">
                    Kota
                    <span class="text-red">*</span>
                  </label>
                  <select
                    class="form-control fs-13"
                    v-model="finput.content.city"
                    id="kota_"
                    @change="subDistrict"
                  >
                    <option
                      :selected="item.id==finput.content.city"
                      v-for="item in arrCity"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                  <!-- <small class="form-text text-red fs-9 ml-1" v-if="!fmessage.valid">{{ fmessage.content.city }}</small> -->
                </div>
                <div class="col-md-6 mb-3 p-0">
                  <label for="kota_" class="fs-12">
                    Kecamatan
                    <span class="text-red">*</span>
                  </label>
                  <select
                    class="form-control fs-13"
                    v-model="finput.content.subdistrict"
                    id="kota_"
                    style="width: 95%"
                  >
                    <option
                      :selected="item.id==finput.content.subdistrict"
                      v-for="item in arrSubdistric"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-5 p-0 my-5 my-md-0">
              <div class="text-center mb-1 fs-13">Upload Logo Usaha</div>
              <div class="ctmUpload2">
                <input
                  type="file"
                  class="custom-file-input position-absolute"
                  id="inputGroupFile02"
                  accept=".jpg, .png, .gif"
                  @change="onFileChange"
                />
                <div class="d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img
                      v-bind:src="finput.image[0].original!=''?finput.image[0].original:arrMitra.image[0]['original']"
                      class="img-fluid img-input"
                      alt
                    />
                    <p class="fs-11">{{arrMitra.image[0]['original']}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 ctmEditor">
            <p>
              Deskripsi
              <span class="text-red">*</span>
            </p>
            <textarea rows="8" v-model="finput.content.content" class="fs-13">{{arrMitra.content.content}}</textarea>
          </div>
          <div class="d-md-flex align-items-center">
            <!--              <div class="col-md-6 pr-md-3 px-0 my-3">
              <p class="fs-12 mb-2">Map</p>
              <div class=" input-group">
                <input type="text" class="form-control fs-12" placeholder="Masukkan Lokasi Usaha Anda">
                <div class="input-group-append">
                  <button class="btn bg-red text-white fs-12 d-flex align-items-center" type="button" id="button-addon2">
                    <img src="/assets/themes/lightred/images/event/search.svg" class="img-fluid mr-1" width="13" alt="">
                    CARI
                  </button>
                </div>
              </div>
              <img src="/assets/themes/lightred/images/detail/map_mini.png" class="img-fluid my-3" width="100%" alt="">
            </div>-->

            <div class="col-md-6 px-1 my-3">
              <p>Jadwal Buka Toko</p>
              <div class="d-flex justify-content-between">
                <div class="col-6 p-0 pr-3">
                  <div
                    class="form-group"
                    v-for="(val,index) in finput.content.schedule"
                    :key="index"
                  >
                    <label class="fs-12">{{val.day}}</label>
                    <label class="switch">
                      <input type="checkbox" class="primary" />
                      <span class="checkbox-slider round"></span>
                    </label>
                    <div class="input-group">
                      <VueCtkDateTimePicker
                        v-model="val.open"
                        :minute-interval="5"
                        :only-time="true"
                        :no-label="true"
                        locale="id"
                        formatted="hh:mm"
                        format="hh:mm"
                        label="Jam Buka"
                        class="form-control fs-13 brL dash-ctk-date"
                      />
                      <VueCtkDateTimePicker
                        v-model="val.close"
                        :minute-interval="5"
                        :only-time="true"
                        :no-label="true"
                        locale="id"
                        formatted="hh:mm"
                        format="hh:mm"
                        label="Jam Tutup"
                        class="form-control fs-13 brL dash-ctk-date"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex">
              <div class="col-md-6 p-0">
                <div class="form-group">
                  <label for="instagramUrl" class="fs-13">
                    <div class="d-flex align-items-center">
                      <img
                        src="/assets/themes/lightred/images/dashboard/instagram_grey.png"
                        class="mr-2"
                        alt
                      />
                      Instagram
                    </div>
                  </label>
                  <input
                    type="text"
                    class="form-control fs-11 py-3"
                    id="instagramUrl"
                    v-model="finput.content.link_medsos[0].url"
                    value="arrMitra.content.link_medsos[0].url"
                  />
                </div>
                <div class="form-group">
                  <label for="fbUrl" class="fs-13">
                    <div class="d-flex align-items-center">
                      <img
                        src="/assets/themes/lightred/images/dashboard/facebook_grey.png"
                        class="mr-2"
                        alt
                      />
                      Facebook
                    </div>
                  </label>
                  <input
                    type="text"
                    class="form-control fs-11 py-3"
                    id="fbUrl"
                    v-model="finput.content.link_medsos[1].url"
                    value="arrMitra.content.link_medsos[1].url"
                  />
                </div>
                <div class="form-group">
                  <label for="twitterUrl" class="fs-13">
                    <div class="d-flex align-items-center">
                      <img
                        src="/assets/themes/lightred/images/dashboard/twitter_grey.png"
                        class="mr-2"
                        alt
                      />
                      Twitter
                    </div>
                  </label>
                  <input
                    type="text"
                    class="form-control fs-11 py-3"
                    id="twitterUrl"
                    v-model="finput.content.link_medsos[2].url"
                    value="arrMitra.content.link_medsos[2].url"
                  />
                </div>
                <!-- <div class="pendamping-radio">
                <b-form-group label="Pilih Konsultan Pendamping Usaha">
                  <b-form-radio-group
                  v-model="selected"
                  :options="options"
                  name="radio-inline"
                  ></b-form-radio-group>
                </b-form-group>
                </div>-->
              </div>
            </div>
          </div>

          <div class="text-center pt-5">
            <nuxt-link
              to="/dashboard/profile/usaha"
              class="btn btn-md-dashboard btn-white-lightred"
            >
              <div class="text-center">
                <i class="fa fa-times mr-1 text-red-portal"></i>
                BATAL
              </div>
            </nuxt-link>
            <!-- <nuxt-link to="/dashboard/news" class="text-red fs-14">DAFTAR</nuxt-link> -->
            <button @click="actUpdate" class="btn btn-md-dashboard btn-danger-lightred px-4">
              <div class="text-center">
                <i class="fa fa-pencil mr-1 text-white"></i>UBAH
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '~/config/config'
import lib from '~/system/lib/Lib'
export default {
  name: 'MitraEdit',
  data() {
    return {
      filename: 'Seret Atau Taruh File Gambar Disini Atau Klik',
      fileimage: '',
      selected: 'first',
      options: [
        { text: 'Ya', value: 'first' },
        { text: 'Nanti Saja', value: 'second' }
      ],
      alert: {
        show: false,
        variant: '',
        message: ''
      },
      finput: {
        type_id: 8,
        title: '',
        category_id: '',
        regional_id: '',
        content: {
          phonenumber: '',
          address: '',
          province: '',
          city: '',
          subdistrict: '',
          content: '',
          schedule: [
            {
              day: 'Senin',
              open: '',
              close: ''
            },
            {
              day: 'Selasa',
              open: '',
              close: ''
            },
            {
              day: 'Rabu',
              open: '',
              close: ''
            },
            {
              day: 'Kamis',
              open: '',
              close: ''
            },
            {
              day: "Jum'at",
              open: '',
              close: ''
            },
            {
              day: 'Sabtu',
              open: '',
              close: ''
            },
            {
              day: 'Minggu',
              open: '',
              close: ''
            }
          ],
          link_medsos: [
            {
              url: '',
              label: 'Instagram'
            },
            {
              url: '',
              label: 'Facebook'
            },
            {
              url: '',
              label: 'Twitter'
            }
          ]
        },
        image: [
          {
            original: '',
            thumb: ''
          }
        ]
      },
      arrMitra: {
        type_id: 8,
        title: '',
        category_id: '',
        regional_id: '',
        content: {
          phonenumber: '',
          address: '',
          province: '',
          city: '',
          subdistrict: '',
          content: '',
          schedule: [
            {
              day: 'Senin',
              open: '',
              close: ''
            },
            {
              day: 'Selasa',
              open: '',
              close: ''
            },
            {
              day: 'Rabu',
              open: '',
              close: ''
            },
            {
              day: 'Kamis',
              open: '',
              close: ''
            },
            {
              day: "Jum'at",
              open: '',
              close: ''
            },
            {
              day: 'Sabtu',
              open: '',
              close: ''
            },
            {
              day: 'Minggu',
              open: '',
              close: ''
            }
          ],
          link_medsos: [
            {
              url: '',
              label: 'Instagram'
            },
            {
              url: '',
              label: 'Facebook'
            },
            {
              url: '',
              label: 'Twitter'
            }
          ]
        },
        image: [
          {
            original: '',
            thumb: ''
          }
        ],
        account_id: '',
        account_name: ' ',
        account_image: ' ',
        type_id: 0,
        type_title: '',
        category_id: 0,
        category_title: '',
        category_slug: '',
        client_id: 0,
        client_regional_id: 0,
        client_regional_title: '',
        review_rate: 0,
        review_count: 0,
        comment_count: 0,
        like_count: 0,
        last_review: [],
        last_comment: [],
        last_like: [],
        is_publish: 0,
        publish_datetime: '',
        is_moderation: 0,
        moderation_state: 0,
        moderation_datetime: '',
        input_datetime: '',
        update_datetime: ''
      },
      fmessage: {
        regional_id: '',
        title: '',
        category_id: '',
        content: {
          phonenumber: '',
          address: '',
          province: '',
          city: '',
          subdistrict: '',
          content: ''
        },
        image: '',
        valid: true
      },
      arrCategory: [],
      arrRegional: [],
      arrProv: [],
      arrCity: [],
      arrSubdistric: []
    }
  },
  components: {},
  mounted() {
    this.fetchDataGet()
  },
  created() {
    let param = { type_id: 8 }
    lib.ajax
      .fetch('GET', `${config.baseUrlApi}/content/category/list`, param)
      .then(response => {
        console.log(response)
        this.arrCategory = response.result.data
        this.arrCategory.unshift({
          id: '',
          title: 'Pilih Kategori'
        })
      })
      .catch(e => {}),
      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/portal/regional/list`, param)
        .then(response => {
          console.log(response)
          this.arrRegional = response.result.data
          this.arrRegional.unshift({
            id: '',
            title: 'Pilih Regional'
          })
        })
        .catch(e => {})

    lib.ajax
      .fetch('GET', `${config.baseUrlApi}/address/province`)
      .then(response => {
        this.arrProv = response.result.data
        this.arrProv.unshift({
          id: '',
          name: 'Pilih Provinsi'
        })
      })
      .catch(e => {})
  },
  methods: {
    city() {
      let param = { province_id: this.finput.content.province }
      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/address/city`, param)
        .then(response => {
          this.arrSubdistric = []
          this.arrCity = response.result.data
          this.arrCity.unshift({
            id: '',
            name: 'Pilih Kota'
          })
        })
        .catch(e => {})
    },
    subDistrict() {
      let param = { city_id: this.finput.content.city }
      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/address/subdistrict`, param)
        .then(response => {
          this.arrSubdistric = response.result.data
          this.arrSubdistric.unshift({
            id: '',
            name: 'Pilih Kecamatan'
          })
        })
        .catch(e => {})
    },
    async fetchDataGet() {
      let params = {
        type_id: 8,
        id: this.$route.query.id,
        slug: this.$route.query.slug
      }
      let myRes = await this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/content/detail`, params)
        .then(response => {
          console.log(response.result)
          this.isDataLoaded = true
          return response.result
          /*if (response.ok === 1) {
          store.commit('content/postDetail', response.result)
        }*/
        })
        .catch(e => {})

      console.log(myRes)

      this.arrMitra = myRes
      this.finput.title = this.arrMitra.title
      this.finput.category_id = this.arrMitra.category_id
      this.finput.content.phonenumber = this.arrMitra.content.phonenumber
      this.finput.content.address = this.arrMitra.content.address
      this.finput.content.province = this.arrMitra.content.province
      this.finput.content.city = this.arrMitra.content.city
      this.finput.content.subdistrict = this.arrMitra.content.subdistrict
      this.finput.content.content = this.arrMitra.content.content
      this.finput.content.schedule = this.arrMitra.content.schedule
      this.finput.content.link_medsos = this.arrMitra.content.link_medsos
    },
    onFileChange(event) {
      let input = event.target
      let self = this
      if (input.files && input.files[0]) {
        let image = new Image()
        let reader = new FileReader()
        let ggImage
        ;(reader.onload = e => {
          self.fileimage = e.target.result
        }),
          reader.readAsDataURL(input.files[0])
        if (
          input.files[0].type == 'image/jpeg' ||
          input.files[0].type == 'image/png'
        ) {
          let fileData = input.files[0]
          this.filename = fileData.name
          self.fileimage = fileData.filename
        }
      }
      let formData = new FormData()
      formData.append('key', '59e51e5db668184d8c4a085fb8389c3acfd76a50')
      formData.append('file', input.files[0])

      fetch(`https://cdn.esd.co.id/image`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(respon => (this.finput.image = respon.data))
    },

    validator() {
      this.fmessage = {
        regional_id: '',
        title: '',
        category_id: '',
        content: {
          phonenumber: '',
          address: '',
          province: '',
          city: '',
          subdistrict: '',
          content: ''
        },
        image: '',
        valid: true
      }

      if (this.finput.regional_id == '') {
        this.fmessage.regional_id = 'Regional tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.title == '') {
        this.fmessage.title = 'Judul tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.category_id == '') {
        this.fmessage.category_id = 'Kategori tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.content.phonenumber == '') {
        this.fmessage.content.phonenumber = 'Nomor Telepon tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.content.address == '') {
        this.fmessage.content.address = 'Alamat tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.content.province == '') {
        this.fmessage.content.province = 'Provinsi tidak boleh kosong!'
        this.fmessage.valid = false
      }
      if (this.finput.content.city == '') {
        this.fmessage.content.city = 'Kota tidak boleh kosong!'
        this.fmessage.valid = false
      }
    },
    actUpdate() {
      let params = {}
      if (this.finput.image[0].original != '') {
        params = {
          id: this.$route.query.id,
          type_id: this.finput.type_id,
          title: this.finput.title,
          category_id: this.finput.category_id,
          meta: this.finput.meta,
          content: JSON.stringify(this.finput.content),
          image: JSON.stringify(this.finput.image)
        }
      } else {
        this.finput.image[0].original = this.arrMitra.image[0]['original']
        this.finput.image[0].thumb = this.arrMitra.image[0]['thumb']
        params = {
          id: this.$route.query.id,
          type_id: this.finput.type_id,
          title: this.finput.title,
          category_id: this.finput.category_id,
          meta: this.finput.meta,
          content: JSON.stringify(this.finput.content),
          image: JSON.stringify(this.finput.image)
        }
      }
      this.$lib.ajax
        .fetch(
          'PUT',
          `${this.$config.baseUrlApi}/member/content/update`,
          params
        )
        .then(response => {
          console.log(response)
          this.$loading.hide()

          if (response.ok === 1) {
            this.$dialog({
              title: 'Sukses',
              content: response.message,
              btns: [
                {
                  label: 'OK',
                  color: '#09f',
                  callback: () => {
                    this.$router.push('/dashboard/profile/usaha')
                  }
                }
              ]
            })
          } else {
            this.$dialog({
              title: 'Gagal',
              content: response.message,
              btns: [
                {
                  label: 'OK',
                  color: '#09f',
                  callback: () => {
                    this.$router.push('/dashboard/profile/usaha')
                  }
                }
              ]
            })
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
