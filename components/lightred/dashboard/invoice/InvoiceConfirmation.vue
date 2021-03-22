<template>
  <div>
    <div class="list-article box-invoice">
      <div class="container">
        <div class="row align-items-end pb-3">
          <div class="col-lg-12">
            <b-breadcrumb class="pb-1" :items="breadcrumb"></b-breadcrumb>
            <div class="box-title fs-18 text-muted pb-4">
              <span>
                <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                Konfirmasi Invoice Saya
              </span>
            </div>
            
            <esd-loading-data 
              v-if="process.run" 
              ref="loadingData" />
            <div class="bg-white br-10 box-shadow p-md-3 p-2 mb-4"
              v-if="!process.run && Object.keys(detail).length > 0">
              <div class="mb-1">
                <div class="title-artikel text-muted font-weight-bold">
                  {{ detail.ref.content_title }}
                </div>
              </div>
              <div class="title-artikel text-muted content-artikel">
                Invoice NUmber : {{ detail.invoice_code }}
              </div>
              <div class="title-artikel text-muted content-artikel">
                Tagihan : {{ detail.ref.event_ticket_price | price }}
              </div>
              <div class="title-artikel text-muted content-artikel">
                Expired pada tanggal :
                <b>
                  {{ $moment(detail.invoice_payment_expired_datetime).format('LL') }}
                </b>
              </div>
              <div class="title-artikel text-muted content-artikel">
                Deskripsi : {{ detail.invoice_description }}
              </div>
            </div>
            <div class="bg-white br-10 box-shadow p-md-3 p-2"
              v-if="!process.run && Object.keys(detail).length > 0">
              <div class="d-md-flex justify-content-between">
                <div class="col-md-6 p-0">
                  <div class="form-group">
                    <label class="fs-12">
                      Nama Pengirim
                      <span class="text-red">*</span>
                    </label>
                    <input 
                      class="form-control fs-13" 
                      type="text"
                      placeholder="Masukkan Nama Pengirim"
                      v-model="form.origin_bank_account_name"
                      v-validate="'required'"
                      data-vv-name="nameorigin"
                      required/>
                    <small class="form-text text-red fs-9 ml-1" 
                      v-if="errors.has('nameorigin')">
                      {{ errors.first('nameorigin') }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="fs-12">
                      Bank Pengirim
                      <span class="text-red">*</span>
                    </label>
                    <select class="form-control fs-13" 
                      v-model="form.origin_bank_name"
                      v-validate="'required'"
                      data-vv-name="bankorigin"
                      required>
                      <option value="">Pilih Bank</option>
                      <option 
                        v-for="(l, index) in bank" 
                        :key="index" 
                        :value="l.bank_name">
                        {{ l.bank_name }}
                      </option>
                    </select>
                    <small class="form-text text-red fs-9 ml-1" 
                      v-if="errors.has('bankorigin')">
                      {{ errors.first('bankorigin') }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="fs-12">
                      Rekening Bank Pengirim
                      <span class="text-red">*</span>
                    </label>
                    <input 
                      class="form-control fs-13" 
                      type="number"
                      placeholder="Masukkan Rekening Bank Pengirim"
                      v-model="form.origin_bank_account_no"
                      v-validate="'required|numeric'"
                      data-vv-name="reqorigin"
                      required/>
                    <small class="form-text text-red fs-9 ml-1" 
                      v-if="errors.has('reqorigin')">
                      {{ errors.first('reqorigin') }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="fs-12">
                      Penerima
                      <span class="text-red">*</span>
                    </label>
                    <b-form-radio 
                      v-for="(l, index) in destination" 
                      :key="index" 
                      name="some-radios" 
                      size="sm"
                      :value="l"
                      v-model="selected">
                      {{ l.ref_bank_origin_bank_name }} - 
                      {{ l.ref_bank_origin_bank_account_no }} a/n
                      {{ l.ref_bank_origin_bank_account_name }}
                    </b-form-radio>
                  </div>
                  <div class="form-group ctmEditor">
                    <label class="fs-12">
                      Catatan
                      <span class="text-red">*</span>
                    </label>
                    <textarea rows="4"
                      class="fs-13" maxlength="150"
                      placeholder="Catatan"
                      v-model="form.note">
                    </textarea>
                  </div>
                </div>
                <div class="col-md-5 p-0 my-5 my-md-0">
                  <div class="text-center mb-1 fs-13">
                    Upload Bukti Pembayaran
                  </div>
                  <div class="ctmUpload2">
                    <input type="file" 
                    class="custom-file-input position-absolute" 
                    id="inputGroupFile02" 
                    accept=".jpg,.png,.gif" 
                    v-on:change="changeFile">
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
                          v-show="error.file">
                          {{ error.file }}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <small class="form-text text-red fs-9 ml-1 pb-3" 
                  v-if="response !== null">
                  {{ response }}
                </small>
                <nuxt-link
                  class="btn btn-bg-dashboard btn-white-lightred px-4"
                  :disabled="process.run"
                  to="/dashboard/invoice">
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
                    KONFIRMASI
                  </div>
                </button>
              </div>
            </div>
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
    name: 'InvoiceConfirmation',
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        breadcrumb: [
          {
            text: 'Dashboard',
            href: '/dashboard'
          },
          {
            text: 'Invoice',
            href: '/dashboard/invoice'
          },
          {
            text: 'Konfirmasi',
            href: '#'
          }
        ],
        detail: {},
        selected: {},
        form: {
          invoice_id: '',
          type: '',
          date: this.$moment(new Date()).format('Y-M-D'),
          origin_bank_name: '',
          origin_bank_account_no: '',
          origin_bank_account_name: '',
          destination_bank_name: '',
          destination_bank_account_no: '',
          destination_bank_account_name: '',
          file: '',
          note: ''
        },
        image: {
          title: 'Seret Atau Taruh File Gambar Disini Atau Klik',
          file: ''
        },
        dictionary: {
          custom: {
            nameorigin: {
              required: () => 'Nama pengirim tidak boleh kosong'
            },
            bankorigin: {
              required: () => 'Bank pengirim tidak boleh kosong'
            },
            reqorigin: {
              required: () => 'Rekening bank pengirim tidak boleh kosong'
            }
          }
        },
        error: {
          file: ''
        },
        process: {
          run: false
        },
        response: null
      }
    },
    props: {},
    components: {},
    computed: {
      bank () {
        return this.$store.state.bank.bank
      },
      destination () {
        this.selected = this.$store.state.bank.destination[0]
        return this.$store.state.bank.destination
      }
    },
    mounted() {
      this.$validator.localize('en', this.dictionary)
      this.fetchData()
    },
    methods: {
      async fetchData () {
        this.process.run = true
        await lib.ajax
          .fetch('GET', `${config.baseUrlApi}/member/invoice/detail`, {
            id: this.$route.params.id
          })
          .then(response => {
            if (response.ok === 1) {
              this.process.run = false
              this.detail = response.result.data
              this.form.invoice_id = this.detail.invoice_id,
              this.form.type = this.detail.invoice_type
            }
          })
          .catch(e => {})
      },
      changeFile () {
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
          this.form.file = respon.data[0].original
          this.validation()
        })
      },
      validation () {
        var form = this.form,
            error = this.error,
            valid = true
        if (form.file.length < 1) {
          error.file = 'Bukti pembayaran tidak boleh kosong'
          valid = false
        } else {
          error.file = ''
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
          .fetch('POST', `${this.$config.baseUrlApi}/member/payment/confirmation`, {
            invoice_id: this.form.invoice_id,
            type: this.form.type,
            date: this.form.date,
            origin_bank_name: this.form.origin_bank_name,
            origin_bank_account_no: this.form.origin_bank_account_no,
            origin_bank_account_name: this.form.origin_bank_account_name,
            destination_bank_name: this.selected.ref_bank_origin_bank_account_name,
            destination_bank_account_no: this.selected.ref_bank_origin_bank_account_no,
            destination_bank_account_name: this.selected.ref_bank_origin_bank_name,
            file: this.form.file, 
            note: this.form.note
          })
          .then(response => {
            this.$root.$loading.finish()
            if (response.ok === 1) {
              this.$dialog({
                 title: 'Sukses',
                 content: response.message,
                 btns: [{
                  label: 'OK',
                  color: '#09f',
                  callback: () => {
                    this.$router.push('/dashboard/invoice');
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