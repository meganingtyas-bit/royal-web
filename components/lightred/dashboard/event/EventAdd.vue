<template>
  <div>
    <div class="dashboard-content">
  		<b-container>
  			<div class="d-flex detail-loc fs-12 text-red mb-3">
  				<nuxt-link to="/dashboard" class="text-default mr-1">Dashboard</nuxt-link>
  				>>
  				<nuxt-link to="/dashboard/event" class="text-default mx-1">Event</nuxt-link>
  				>>
  				<nuxt-link to="#" class="text-default mx-1">Buat Event</nuxt-link>
  			</div>
  			<div class="d-flex align-items-center">
  				<img src="/assets/themes/lightred/images/subtitle_red.png" class="mr-2" alt="">
  				<h4 class="dashboard-title m-0">Buat Event</h4>
  			</div>

        <div class="bg-white br-10 box-shadow p-md-3 p-2 mt-4">
          <div class="d-md-flex justify-content-between">
            <div class="col-md-6 p-0">
              <div class="pendamping-radio">
                <b-form-group label="Pilih Jenis Event">
                  <b-form-radio-group 
                    id="radio-group-2" 
                    name="radio-sub-component"
                    v-model="form.content.event_type"
                    v-on:change="changeType">
                    <b-form-radio
                      v-for="(l, index) in type"
                      :key="index"
                      :value="l.id">
                      {{ l.title }}
                    </b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div class="form-group">
                <label class="fs-12">
                  Nama Event
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="text"
                  placeholder="Masukkan Nama Event Anda"
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
              <div class="form-group">
                <label class="fs-12">
                  Kuota
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="number"
                  placeholder="Masukkan Biaya Pendaftaran Event Anda"
                  v-model="form.content.event_quota"
                  v-validate="'required|min_value:1|max_value:10000|numeric'"
                  data-vv-name="quota"
                  required/>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('quota')">
                  {{ errors.first('quota') }}
                </small>
              </div>
              <div class="form-group" v-if="form.content.event_type === 2">
                <label class="fs-12">
                  Biaya Pendaftaran
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="number"
                  placeholder="Masukkan Biaya Pendaftaran Event Anda"
                  v-model="form.content.event_ticket_price"
                  v-on:keypress="price = form.content.event_ticket_price"
                  v-validate="'required|min_value:1000|max_value:1000000|numeric'"
                  data-vv-name="price"
                  required/>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('price')">
                  {{ errors.first('price') }}
                </small>
              </div>
              <div class="form-group d-flex">
                <div class="col-6 p-0">
                  <label class="fs-12">
                    Kategori Event
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
              <div class="form-group d-flex">
                <div class="col-6 pl-0">
                  <label for="tanggalMulai" class="fs-12">
                    Tanggal Mulai
                    <span class="text-red">*</span>
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-red border-red">
                        <img src="/assets/themes/lightred/images/dashboard/event.png" width="15" alt="">
                      </span>
                    </div>
                    <VueCtkDateTimePicker
                      v-model="form.content.date.start_date"
                      :auto-close="true"
                      :only-date="true"
                      :no-label="true"
                      locale="id"
                      formatted="ll"
                      format="YYYY-MM-DD"
                      label="Masukkan Tanggal Mulai"
                      class="form-control dash-ctk-date"
                      v-validate="'required'"
                      data-vv-name="startdate"
                      required/>
                  </div>
                  <small class="form-text text-red fs-9 ml-1" 
                    v-if="errors.has('startdate')">
                    {{ errors.first('startdate') }}
                  </small>
                </div>
                <div class="col-6 pr-0">
                  <label for="tanggalMulai" class="fs-12">
                    Tanggal Selesai
                    <span class="text-red">*</span>
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-red border-red">
                        <img src="/assets/themes/lightred/images/dashboard/event.png" width="15" alt="">
                      </span>
                    </div>
                    <VueCtkDateTimePicker
                      v-model="form.content.date.end_date"
                      :min-date ="form.content.date.start_date"
                      :auto-close="true"
                      :only-date="true"
                      :no-label="true"
                      locale="id"
                      formatted="ll"
                      format="YYYY-MM-DD"
                      label="Masukkan Tanggal Selesai"
                      class="form-control dash-ctk-date"
                      v-validate="'required'"
                      data-vv-name="enddate"
                      required/>
                  </div>
                  <small class="form-text text-red fs-9 ml-1" 
                    v-if="errors.has('enddate')">
                    {{ errors.first('enddate') }}
                  </small>
                </div>
              </div>
              <div class="form-group d-flex">
                <div class="col-6 pl-0">
                  <label for="tanggalMulai" class="fs-12">
                    Jam Mulai
                    <span class="text-red">*</span>
                  </label>
                  <div class="input-group">
                    <VueCtkDateTimePicker
                      v-model="form.content.date.start_time"
                      :minute-interval="5"
                      :only-time="true"
                      :no-label="true"
                      locale="id"
                      formatted="HH:mm"
                      format="HH:mm"
                      label="Masukkan Jam Mulai"
                      class="form-control fs-13 brR dash-ctk-date" 
                      style="width: 95%"
                      v-validate="'required'"
                      data-vv-name="starttime"
                      required/>
                  </div>
                  <small class="form-text text-red fs-9 ml-1" 
                    v-if="errors.has('starttime')">
                    {{ errors.first('starttime') }}
                  </small>
                </div>
                <div class="col-6 pr-0">
                  <label for="tanggalMulai" class="fs-12">
                    Jam Selesai
                    <span class="text-red">*</span>
                  </label>
                  <div class="input-group">
                    <VueCtkDateTimePicker
                      v-model="form.content.date.end_time"
                      :minute-interval="5"
                      :only-time="true"
                      :no-label="true"
                      locale="id"
                      formatted="HH:mm"
                      format="HH:mm"
                      label="Masukkan Jam Selesai"
                      class="form-control fs-13 brL dash-ctk-date" 
                      style="width: 95%"
                      v-validate="'required'"
                      data-vv-name="endtime"
                      required/>
                  </div>
                  <small class="form-text text-red fs-9 ml-1" 
                    v-if="errors.has('endtime')">
                    {{ errors.first('endtime') }}
                  </small>
                </div>
              </div>
              <div class="form-group">
                <label class="fs-12">
                  Nama Tempat
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="text"
                  placeholder="Masukkan Nama Tempat Atau Gedung Event Anda"
                  v-model="form.content.location.name"
                  v-validate="'required'"
                  data-vv-name="location"
                  required/>
                <small class="form-text text-red fs-9 ml-1" 
                  v-if="errors.has('location')">
                  {{ errors.first('location') }}
                </small>
              </div>
              <div class="form-group ctmEditor">
                <label class="fs-12">
                  Alamat Event
                  <span class="text-red">*</span>
                </label>
                <textarea rows="4"
                  class="fs-13" maxlength="150"
                  placeholder="Masukkan Alamat Event Anda"
                  v-model="form.content.location.address"
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
                    v-model="form.content.location.province_id"
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
                    :disabled="form.content.location.province_id === ''"
                    style="width: 95%"
                    v-model="form.content.location.city_id"
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
                    :disabled="form.content.location.city_id === ''"
                    style="width: 95%"
                    v-model="form.content.location.subdistrict_id"
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
                    :disabled="form.content.location.subdistrict_id === ''"
                    style="width: 95%"
                    v-model="form.content.location.village_id"
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
                Upload Poster Event
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
    name: 'EventAdd',
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
        type: [
          {
            id: 1,
            title: 'Gratis',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            id: 2,
            title: 'Berbayar',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ],
        form: {
          type_id: 9,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            date: {
              start_date: '',
              start_time: '',
              end_date: '',
              end_time: ''
            },
            location: {
              name: '',
              address: '',
              address_id: '', // no field body
              province: '',
              province_id: '',
              city: '',
              city_id: '',
              subdistrict: '',
              subdistrict_id: '',
              village: '', // no field body
              village_id: '' // no field body
            },
            content: '',
            event_type: 1,
            event_ticket_price: 0,
            event_quota: 0
          },
          image: []
        },
        price: 0,
        image: {
          title: 'Seret Atau Taruh File Gambar Disini Atau Klik',
          file: ''
        },
        dictionary: {
          custom: {
            title: {
              required: () => 'Nama tidak boleh kosong'
            },
            price: {
              required: () => 'Harga tidak boleh kosong',
              min_value: 'Minimal harga Rp 1.000',
              max_value: 'Maksimal harga Rp 1.000.000'
            },
            quota: {
              required: () => 'Kuota tidak boleh kosong',
              min_value: 'Minimal kuota 1',
              max_value: 'Maksimal kuota 10.000'
            },
            category: {
              required: () => 'Kategori tidak boleh kosong'
            },
            startdate: {
              required: () => 'Tanggal mulai tidak boleh kosong'
            },
            enddate: {
              required: () => 'Tanggal selesai tidak boleh kosong'
            },
            starttime: {
              required: () => 'Jam mulai tidak boleh kosong'
            },
            endtime: {
              required: () => 'Jam selesai tidak boleh kosong'
            },
            location: {
              required: () => 'Nama tempat atau gedung tidak boleh kosong'
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
      types () {
        return this.$route.query.type !== undefined ? this.$route.query.type:this.type.selected
      },
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
      changeType (event) {
        this.form.content.event_ticket_price = event === 1 ? 0:this.price
      },
      changeProvince () {
        this.form.content.location.province = ''
        this.form.content.location.city_id = ''
        this.form.content.location.subdistrict_id = ''
        this.form.content.location.village_id = ''

        let p = this.provinces
        for (let i in p) {
          if (p[i].id === this.form.content.location.province_id) {
            this.form.content.location.province = p[i].name
          }
        }

        this.fetchCity()
      },
      fetchCity () {
        this.$store.dispatch('address/GET_CITY', { province_id: this.form.content.location.province_id })
      },
      changeCity () {
        this.form.content.location.city = ''
        this.form.content.location.subdistrict_id = ''
        this.form.content.location.village_id = ''

        let c = this.citys
        for (let i in c) {
          if (c[i].id === this.form.content.location.city_id) {
            this.form.content.location.city = c[i].name
          }
        }

        this.fetchSubdistrict()
      },
      fetchSubdistrict () {
        this.$store.dispatch('address/GET_SUBDISTRICT', { city_id: this.form.content.location.city_id })
      },
      changeSubdistrict () {
        this.form.content.location.subdistrict = ''
        this.form.content.location.village_id = ''

        let s = this.subdistricts
        for (let i in s) {
          if (s[i].id === this.form.content.location.subdistrict_id) {
            this.form.content.location.subdistrict = s[i].name
          }
        }

        this.fetchVillage()
      },
      fetchVillage () {
        this.$store.dispatch('address/GET_VILLAGE', { subdistrict_id: this.form.content.location.subdistrict_id })
      },
      changeVillage () {
        this.form.content.location.village = ''

        let v = this.villages
        for (let i in v) {
          if (v[i].id === this.form.content.location.village_id) {
            this.form.content.location.village = v[i].name
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
      reset () {
        this.form = {
          type_id: 9,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            date: {
              start_date: '',
              start_time: '',
              end_date: '',
              end_time: ''
            },
            location: {
              name: '',
              address: '',
              address_id: '', // no field body
              province: '',
              province_id: '',
              city: '',
              city_id: '',
              subdistrict: '',
              subdistrict_id: '',
              village: '', // no field body
              village_id: '' // no field body
            },
            content: '',
            event_type: 1,
            event_ticket_price: 0,
            event_quota: 0
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
          error.image = 'Poster event tidak boleh kosong'
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
                    this.$router.push('/dashboard/event');
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