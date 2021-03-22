<template>
  <div>
    <div class="dashboard-content">
  		<b-container>
  			<div class="d-flex detail-loc fs-12 text-red mb-3">
  				<nuxt-link to="/dashboard" class="text-default mr-1">Dashboard</nuxt-link>
  				>>
  				<nuxt-link to="/dashboard/profile/usaha" class="text-default mx-1">Profil Usaha</nuxt-link>
  				>>
  				<nuxt-link to="#" class="text-default mx-1">Tambah Profil Usaha</nuxt-link>
  			</div>
  			<div class="d-flex align-items-center">
  				<img src="/assets/themes/lightred/images/subtitle_red.png" class="mr-2" alt="">
  				<h4 class="dashboard-title m-0">Tambah Profil Usaha</h4>
  			</div>

        <div class="bg-white br-10 box-shadow p-md-3 p-2 mt-4">
          <div class="d-md-flex justify-content-between">
            <div class="col-md-6 p-0">
              <div class="form-group">
                <label class="fs-12">
                  Nama Profil Usaha
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="text"
                  placeholder="Masukkan Nama Profil Usaha Anda"
                  v-model="form.title"
                  v-on:keypress="form.meta = form.title"
                  v-validate="'required'"
                  data-vv-name="title"
                  required/>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('title')">
                  {{ errors.first('title') }}
                </small>
              </div>
              <div class="form-group d-flex">
                <div class="col-6 p-0">
                  <label class="fs-12">
                    Kategori Profil Usaha
                    <span class="text-red">*</span>
                  </label>
                  <select class="form-control fs-13" 
                    style="width: 95%"
                    v-model="form.category_id"
                    v-validate="'required'"
                    data-vv-name="category"
                    required>
                    <option value="">Pilih Kategori</option>
                    <option 
                      v-for="(l, index) in categories" 
                      :key="index" 
                      :value="l.id">
                      {{ l.title }}
                    </option>
                  </select>
                  <small class="form-text text-red fs-9 ml-1" 
                    v-if="errors.has('category')">
                    {{ errors.first('category') }}
                  </small>
                </div>
              </div>
              <div class="form-group">
                <label class="fs-12">
                  Nomor Telepon Profil Usaha
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="number"
                  placeholder="Masukkan Nomor Telepon Profil Usaha Anda"
                  v-model="form.content.phonenumber"
                  v-on:keypress="form.meta = form.content.phonenumber"
                  v-validate="'required|min:6|max:13|numeric'"
                  data-vv-name="phonenumber"
                  required/>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('phonenumber')">
                  {{ errors.first('phonenumber') }}
                </small>
              </div>
              <div class="form-group ctmEditor">
                <label class="fs-12">
                  Alamat Profil Usaha
                  <span class="text-red">*</span>
                </label>
                <textarea rows="4"
                  class="fs-13" maxlength="150"
                  placeholder="Masukkan Alamat Profil Usaha Anda"
                  v-model="form.content.address"
                  v-validate="'required'"
                  data-vv-name="address"
                  required>
                </textarea>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('address')">
                  {{ errors.first('address') }}
                </small>
              </div>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="provinsi_" class="m-0 fs-13">
                    Regional
                  </label>
                </div>
                <div class="col-md-6 p-0 mr-2">
                  <select class="form-control fs-13" 
                    style="width: 95%"
                    v-model="form.client_regional_id">
                    <option value="">Pilih Regional</option>
                    <option 
                      v-for="(l, index) in regionals" 
                      :key="index" 
                      :value="l.id">
                      {{ l.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="provinsi_" class="m-0 fs-13">
                    Provinsi
                  </label>
                </div>
                <div class="col-md-6 p-0 mr-2">
                  <select class="form-control fs-13" 
                    style="width: 95%"
                    v-model="form.content.province_id"
                    v-on:change="changeProvince">
                    <option value="">Pilih Provinsi</option>
                    <option 
                      v-for="(l, index) in provinces" 
                      :key="index" 
                      :value="l.id">
                      {{ l.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="provinsi_" class="m-0 fs-13">
                    Kota
                  </label>
                </div>
                <div class="col-md-6 p-0 mr-2">
                  <select class="form-control fs-13" 
                    :disabled="form.content.province_id === ''"
                    style="width: 95%"
                    v-model="form.content.city_id"
                    v-on:change="changeCity">
                    <option value="">Pilih Kota</option>
                    <option 
                      v-for="(l, index) in citys" 
                      :key="index" 
                      :value="l.id">
                      {{ l.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="provinsi_" class="m-0 fs-13">
                    Kecamatan
                  </label>
                </div>
                <div class="col-md-6 p-0 mr-2">
                  <select class="form-control fs-13" 
                    :disabled="form.content.city_id === ''"
                    style="width: 95%"
                    v-model="form.content.subdistrict_id"
                    v-on:change="changeSubdistrict">
                    <option value="">Pilih Kecamatan</option>
                    <option 
                      v-for="(l, index) in subdistricts" 
                      :key="index" 
                      :value="l.id">
                      {{ l.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="d-md-flex align-items-center my-3">
                <div class="col-md-3 p-0">
                  <label for="provinsi_" class="m-0 fs-13">
                    Kelurahan
                  </label>
                </div>
                <div class="col-md-6 p-0 mr-2">
                  <select class="form-control fs-13" 
                    :disabled="form.content.subdistrict_id === ''"
                    style="width: 95%"
                    v-model="form.content.village_id"
                    v-on:change="changeVillage">
                    <option value="">Pilih Kelurahan</option>
                    <option 
                      v-for="(l, index) in villages" 
                      :key="index" 
                      :value="l.id">
                      {{ l.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-5 p-0 my-5 my-md-0">
              <div class="text-center mb-1 fs-13">
                Upload Poster Profil Usaha
                <span class="text-red">*</span>
              </div>
              <div class="ctmUpload2">
                <input type="file" 
                class="custom-file-input position-absolute" 
                id="inputGroupFile02" 
                accept=".jpg,.png,.gif" 
                v-on:change="changeImage">
                <div class="d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <div class="text-center d-flex align-items-center justify-content-center" 
                      style="width: auto; height: 178px; overflow: hidden;">
                      <img v-if="image.file === ''"
                        src="/assets/themes/lightred/images/dashboard/uploadpic.png"
                        class="img-fluid"
                        alt/>
                      <img v-else
                        :src="image.file"
                        class="img-fluid imgInput"
                        alt/>
                    </div>
                    <p class="fs-11">
                      {{ image.title }}
                    </p>
                    <small class="form-text text-red fs-9 ml-1" 
                      v-show="error.image">
                      {{ error.image }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group ctmEditor">
            <label class="fs-12">
              Deskripsi
            </label>
            <div class="quill-editor"
              :content="form.content.content"
              @change="onEditor($event)"
              v-quill:myQuillEditor="option">
            </div>
          </div>
          <div class="schedule-wrap-list">
            <div class="row">
              <!-- <div class="col-md-6 pr-md-3 px-0 my-3">
                <p class="fs-12 mb-2">Map</p>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control fs-12"
                    placeholder="Masukkan Lokasi Usaha Anda"/>
                  <div class="input-group-append">
                    <button
                      class="btn bg-red text-white fs-12 d-flex align-items-center"
                      type="button"
                      id="button-addon2">
                      <img
                        src="/assets/themes/lightred/images/event/search.svg"
                        class="img-fluid mr-1"
                        width="13"
                        alt/>
                      CARI
                    </button>
                  </div>
                </div>
                <img
                  src="/assets/themes/lightred/images/detail/map_mini.png"
                  class="img-fluid my-3"
                  width="100%"
                  alt
                />
              </div> -->

              <div class="col-md-6 my-3">
                <p>Jadwal Buka Toko</p>
                <div class="d-flex justify-content-between">
                  <div class="col-md-6 p-0 pr-3">
                    <div
                      class="form-group schedule-time-list"
                      v-for="(l, index) in schedule"
                      :key="index">
                      <label class="fs-12">
                        {{ l.day }} :
                        <span class="textIsOpen">Tutup</span>
                      </label>
                      <label class="switch">
                        <input
                          type="checkbox"
                          class="primary"
                          @change="checkedSchedule(index, $event)"/>
                        <span class="checkbox-slider round"></span>
                      </label>
                      <div class="input-group" 
                        v-if="l.isOpen">
                        <VueCtkDateTimePicker
                          v-model="l.open"
                          :minute-interval="5"
                          :only-time="true"
                          :no-label="true"
                          locale="id"
                          formatted="HH:mm"
                          format="HH:mm"
                          label="Jam Buka"
                          class="form-control fs-13 dash-ctk-date"/>
                        <VueCtkDateTimePicker
                          v-model="l.close"
                          :minute-interval="5"
                          :only-time="true"
                          :no-label="true"
                          locale="id"
                          formatted="HH:mm"
                          format="HH:mm"
                          label="Jam Tutup"
                          class="form-control fs-13 dash-ctk-date"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="col-md-6 p-0">
              <div class="form-group" 
                v-for="(l, index) in medsos" 
                :key="index">
                <label :for="`${l.label}${index}`" class="fs-13">
                  <div class="d-flex align-items-center">
                    <img :src="l.img" class="mr-2" alt />
                    {{ l.label }}
                  </div>
                </label>
                <input
                  type="text"
                  class="form-control fs-11 py-3"
                  :id="`${l.label}${index}`"
                  v-model="l.url"
                  placeholder="http://"/>
              </div>
            </div>
          </div>
          <div class="text-center">
            <small class="form-text text-red fs-14 ml-1 pb-3" 
              v-if="response !== null">
              {{ response }}
            </small>
            <button 
              type="button"
              class="btn text-red px-4"
              :disabled="process.run"
              @click="reset">
              <div class="d-flex align-items-center">
                <img src="/assets/themes/lightred/images/dashboard/refresh_2.png" class="mr-1" alt />
                RESET
              </div>
            </button>
            <button 
              type="button"
              class="btn bg-red text-white px-4"
              :disabled="process.run"
              @click="save">
              <div class="d-flex align-items-center">
                <img src="/assets/themes/lightred/images/dashboard/save_1.png" class="mr-1" alt />
                SIMPAN
              </div>
            </button>
          </div>
        </div>
      </b-container>
  	</div>
  </div>
</template>
<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  
  export default {
    name: 'MitraAdd',
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        option: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }]
            ]
          }
        },
        schedule: [
          {
            day: 'Senin',
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: 'Selasa',
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: 'Rabu',
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: 'Kamis',
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: "Jum'at",
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: 'Sabtu',
            isOpen: false,
            open: '',
            close: ''
          },
          {
            day: 'Minggu',
            isOpen: false,
            open: '',
            close: ''
          }
        ],
        medsos: [
          {
            url: '',
            label: 'Email',
            img: '/assets/themes/lightred/images/dashboard/email_grey.png'
          },
          {
            url: '',
            label: 'Instagram',
            img: '/assets/themes/lightred/images/dashboard/instagram_grey.png'
          },
          {
            url: '',
            label: 'Facebook',
            img: '/assets/themes/lightred/images/dashboard/facebook_grey.png'
          },
          {
            url: '',
            label: 'Twitter',
            img: '/assets/themes/lightred/images/dashboard/twitter_grey.png'
          }
        ],
        form: {
          type_id: 8,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            phonenumber: '',
            address: '',
            address_id: '', // no field body
            province: '',
            province_id: '',
            city: '',
            city_id: '',
            subdistrict: '',
            subdistrict_id: '',
            village: '', // no field body
            village_id: '', // no field body
            content: '',
            schedule: [],
            link_medsos: []
          },
          image: []
        },
        image: {
          title: 'Seret Atau Taruh File Gambar Disini Atau Klik',
          file: ''
        },
        dictionary: {
          custom: {
            title: {
              required: () => 'Nama tidak boleh kosong'
            },
            category: {
              required: () => 'Kategori tidak boleh kosong'
            },
            phonenumber: {
              required: () => 'Nomor telepon tidak boleh kosong',
              min: 'Minimal nomor 6 karakter',
              max: 'Maksimal nomor 13 karakter'
            },
            address: {
              required: () => 'Alamat tidak boleh kosong'
            }
          }
        },
        error: {
          image: ''
        },
        process: {
          run: false
        },
        response: null
      }
    },
    props: {},
    components: {},
    mounted() {
      this.$validator.localize('en', this.dictionary)
    },
    computed: {
      categories () {
        return this.$store.state.category.categories
      },
      regionals () {
        return this.$store.state.address.regionals
      },
      provinces () {
        return this.$store.state.address.provinces
      },
      citys () {
        return this.$store.state.address.citys
      },
      subdistricts () {
        return this.$store.state.address.subdistricts
      },
      villages () {
        return this.$store.state.address.villages
      }
    },
    methods: {
      changeProvince () {
        this.form.content.province = ''
        this.form.content.city_id = ''
        this.form.content.subdistrict_id = ''
        this.form.content.village_id = ''

        let p = this.provinces
        for (let i in p) {
          if (p[i].id === this.form.content.province_id) {
            this.form.content.province = p[i].name
          }
        }

        this.fetchCity()
      },
      fetchCity () {
        this.$store.dispatch('address/GET_CITY', { province_id: this.form.content.province_id })
      },
      changeCity () {
        this.form.content.city = ''
        this.form.content.subdistrict_id = ''
        this.form.content.village_id = ''

        let c = this.citys
        for (let i in c) {
          if (c[i].id === this.form.content.city_id) {
            this.form.content.city = c[i].name
          }
        }

        this.fetchSubdistrict()
      },
      fetchSubdistrict () {
        this.$store.dispatch('address/GET_SUBDISTRICT', { city_id: this.form.content.city_id })
      },
      changeSubdistrict () {
        this.form.content.subdistrict = ''
        this.form.content.village_id = ''

        let s = this.subdistricts
        for (let i in s) {
          if (s[i].id === this.form.content.subdistrict_id) {
            this.form.content.subdistrict = s[i].name
          }
        }

        this.fetchVillage()
      },
      fetchVillage () {
        this.$store.dispatch('address/GET_VILLAGE', { subdistrict_id: this.form.content.subdistrict_id })
      },
      changeVillage () {
        this.form.content.village = ''

        let v = this.villages
        for (let i in v) {
          if (v[i].id === this.form.content.village_id) {
            this.form.content.village = v[i].name
          }
        }
      },
      changeImage () {
        let input = event.target
        if (input.files && input.files[0]) {
          let image = new Image()
          let reader = new FileReader()
          let ggImage
          reader.onload = (e) => {
            this.image.file = e.target.result
          },
          reader.readAsDataURL(input.files[0]);
            if (input.files[0].type == 'image/jpeg' || input.files[0].type == 'image/png') {
              let fileData = input.files[0]
              this.image.title = fileData.name
              this.image.file = fileData.filename
            }
        }

        let formData = new FormData()
        formData.append('key', '59e51e5db668184d8c4a085fb8389c3acfd76a50')
        formData.append('file', input.files[0])

        fetch(`https://cdn.esd.co.id/image`, {
          method: 'POST',
          body: formData
        }).then(res => res.json())
        .then( respon => {
          this.form.image = respon.data
          this.validation()
        })
      },
      onEditor ({ html }) {
        this.form.content.content = html
      },
      checkedSchedule(index, $event) {
        let elig = $event.target.closest('.form-group')
        let textIsOpen = elig.querySelector('.textIsOpen')

        if ($event.target.checked === true) {
          textIsOpen.innerHTML = 'Buka'
          this.schedule[index].isOpen = true
        } else {
          textIsOpen.innerHTML = 'Tutup'
          this.schedule[index].isOpen = false
          this.schedule[index].open = ''
          this.schedule[index].close = ''
        }
      },
      reset () {
        this.form = {
          type_id: 8,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            phonenumber: '',
            address: '',
            address_id: '', // no field body
            province: '',
            province_id: '',
            city: '',
            city_id: '',
            subdistrict: '',
            subdistrict_id: '',
            village: '', // no field body
            village_id: '', // no field body
            content: '',
            schedule: [],
            link_medsos: []
          },
          image: []
        }

        this.image = {
          title: 'Seret Atau Taruh File Gambar Disini Atau Klik',
          file: ''
        }

        this.error = {
          image: ''
        }
      },
      validation () {
        var form = this.form,
            error = this.error,
            valid = true
            
        if (form.image.length < 1) {
          error.image = 'Poster profil usaha tidak boleh kosong'
          valid = false
        } else {
          error.image = ''
          valid = true
        }

        return valid;
      },
      async save () {
        this.response = null
        const valid = await this.$validator.validateAll()
        var valids = this.validation()
        this.form.content.schedule = this.schedule
        this.form.content.link_medsos = this.medsos
        if (valid && valids) {
          this.process.run = true
          this.$root.$loading.start()
          this.$lib.ajax
          .fetch('POST', `${this.$config.baseUrlApi}/member/content/add`, {
            type_id: this.form.type_id,
            title: this.form.title,
            regional_id: this.form.client_regional_id,
            category_id: this.form.category_id,
            meta: this.form.meta,
            content: JSON.stringify(this.form.content),
            image: JSON.stringify(this.form.image)
          })
          .then(response => {
            this.$root.$loading.finish()
            if (response.ok === 1) {
              this.reset()
              this.$dialog({
                 title: 'Sukses',
                 content: response.message,
                 btns: [{
                  label: 'OK',
                  color: '#09f',
                  callback: () => {
                    this.$router.push('/dashboard/profile/usaha');
                  }
                }]
              })
            } else {
              this.process.run = false
              this.response = response.message
            }
          })
          .catch(e => {})
        } else {
          this.response = 'Terdapat data yang wajib diisi, silahkan cek kembali.'
        }
      }
    },
    created () {},
    destroyed () {}
  }
</script>

<style>
  .quill-editor.ql-container.ql-snow {
    height: 20em;
  }
</style>