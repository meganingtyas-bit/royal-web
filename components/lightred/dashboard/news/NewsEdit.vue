<template>
  <div>
    <div class="dashboard-content">
  		<b-container>
  			<div class="d-flex detail-loc fs-12 text-red mb-3">
  				<nuxt-link to="/dashboard" class="text-default mr-1">Dashboard</nuxt-link>
  				>>
  				<nuxt-link to="/dashboard/news" class="text-default mx-1">Berita</nuxt-link>
  				>>
  				<nuxt-link to="#" class="text-default mx-1">Buat Berita</nuxt-link>
  			</div>
  			<div class="d-flex align-items-center">
  				<img src="/assets/themes/lightred/images/subtitle_red.png" class="mr-2" alt="">
  				<h4 class="dashboard-title m-0">Buat Berita</h4>
  			</div>

        <div class="bg-white br-10 box-shadow p-md-3 p-2 mt-4">
          <div class="d-md-flex justify-content-between">
            <div class="col-md-6 p-0">
              <div class="form-group">
                <label class="fs-12">
                  Judul Berita
                  <span class="text-red">*</span>
                </label>
                <input 
                  class="form-control fs-13" 
                  type="text"
                  placeholder="Masukkan Judul Berita Anda"
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
                    Kategori Berita
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
            <div class="col-md-5 p-0 my-5 my-md-0">
              <div class="text-center mb-1 fs-13">
                Upload Poster Berita
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
              @change="onEditorContent($event)"
              v-quill:myQuillEditorContent="option">
            </div>
          </div>
          <div class="form-group ctmEditor">
            <label class="fs-12">
              Ringkasan
            </label>
            <div class="quill-editor"
              :content="form.content.sortdesc"
              @change="onEditorSortdesc($event)"
              v-quill:myQuillEditorSortdesc="option">
            </div>
          </div>
          <div class="text-center">
            <small class="form-text text-red fs-14 ml-1 pb-3" 
              v-if="response !== null">
              {{ response }}
            </small>
            <nuxt-link
              class="btn btn-bg-dashboard btn-white-lightred px-4"
              :disabled="process.run"
              to="/dashboard/news">
              <div class="d-flex align-items-center">
                BATAL
              </div>
            </nuxt-link>
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
    name: 'NewsEdit',
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
        form: {
          type_id: 12,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            content: '',
            sortdesc: ''
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
              required: () => 'Judul tidak boleh kosong'
            },
            category: {
              required: () => 'Kategori tidak boleh kosong'
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
      this.fetchDetail()
    },
    computed: {
      categories () {
        return this.$store.state.category.categories
      },
      regionals () {
        return this.$store.state.address.regionals
      }
    },
    methods: {
      async fetchDetail () {
        await this.$lib.ajax
        .fetch('GET', `${this.$config.baseUrlApi}/content/detail`, {
          type_id: this.form.type_id,
          id: this.$route.query.id,
          slug: this.$route.query.slug
        })
        .then(response => {
          this.form = response.result
          this.image = {
            title: 'Seret Atau Taruh File Gambar Disini Atau Klik',
            file: response.result.image[0].original
          }
        })
        .catch(e => {})
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
      onEditorContent ({ html }) {
        this.form.content.content = html
      },
      onEditorSortdesc ({ html }) {
        this.form.content.sortdesc = html
      },
      reset () {
        this.form = {
          type_id: 12,
          title: '',
          category_id: '',
          client_regional_id: '',
          meta: '',
          content: {
            content: '',
            sortdesc: ''
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
          error.image = 'Poster berita tidak boleh kosong'
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
          .fetch('PUT', `${this.$config.baseUrlApi}/member/content/update`, {
            id:this.$route.query.id,
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
                    this.$router.push('/dashboard/news');
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