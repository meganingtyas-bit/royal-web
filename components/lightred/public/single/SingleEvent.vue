<template>
  <div>
    <section id="detail-event" style="background:#fff;">
      <b-container>
        <div class="d-flex detail-loc fs-12 text-red mb-3">
          <nuxt-link to="/" class="text-gray-portal mx-1">Home</nuxt-link>>>
          <nuxt-link to="/event" class="text-gray-portal mx-1">Event</nuxt-link>>>
          <nuxt-link to="#" class="text-gray-portal mx-1 font-weight-bold ft-capitalize">
            {{ detail.title }}
          </nuxt-link>
        </div>
        <h3 class="text-gray-portal ft-weight-bold">
          {{ detail.title }}
        </h3>
        <div class="d-flex flex-wrap align-items-center">
          <div class="fs-12 mb-2 text-gray-portal">
            Dimodifikasi terakhir oleh
            <span class="text-red-portal">
              {{ detail.account_name }}
            </span>
          </div>
        </div>
        <b-row class="mt-5">
          <div class="col-lg-9">
            <div class="position-relative br-10 bgwhite p-2 p-md-3 my-3">
              <div class="d-md-flex">
                <no-ssr>
                  <LightGallery
                    :images="gallery()"
                    :index="selected"
                    :disable-scroll="true"
                    @close="selected = null"/>
                </no-ssr>
                <div class="box-cs text-center">
                  <div>
                    <b-row>
                      <b-col
                        class="m-1"
                        v-for="(l, index) in detail.image"
                        :key="index">
                        <b-img
                          center
                          v-bind="props"
                          :src="l.thumb"
                          @click="selected = index"
                          class="img-s-event"
                          alt="image">
                        </b-img>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                <div class="px-md-4 py-2">
                  <h5 class="mb-4">
                    Info Event
                  </h5>
                  <div class="info-content my-2 d-md-flex">
                    <div class="info-left d-flex justify-content-between">
                      <div>
                        <img
                          src="/assets/themes/lightred/images/detail/tanggal.png"
                          class="mr-2"
                          alt/>
                        Tanggal
                      </div>
                      <span>:</span>
                    </div>
                    <div class="info-right">
                      &nbsp; {{ $moment(detail.content.date.start_date).format('D MMMM YYYY') }}
                    </div>
                  </div>
                  <div class="info-content my-2 d-md-flex">
                    <div class="info-left d-flex justify-content-between">
                      <div>
                        <img src="/assets/themes/lightred/images/detail/jam.png" class="mr-2" alt />
                        Jam
                      </div>
                      <span>:</span>
                    </div>
                    <div class="info-right">
                      &nbsp; {{ detail.content.date.start_time }} - {{ detail.content.date.end_time }} WIB
                    </div>
                  </div>
                  <div class="info-content my-2 d-md-flex">
                    <div class="info-left d-flex justify-content-between">
                      <div>
                        <img
                          src="/assets/themes/lightred/images/detail/tempat.png"
                          class="mr-2"
                          alt
                        />
                        Tempat
                      </div>
                      <span>:</span>
                    </div>
                    <div class="info-right ml-2">
                      {{ detail.content.location.name }}
                    </div>
                  </div>
                  <div class="info-content my-2 d-md-flex">
                    <div class="info-left d-flex justify-content-between">
                      <div>
                        <img src="/assets/themes/lightred/images/detail/pin.png" class="mr-2" alt />
                        Alamat
                      </div>
                      <span>:</span>
                    </div>
                    <div class="info-right ml-2">
                      {{ detail.content.location.address }}
                    </div>
                  </div>
                  <div class="box-price-event text-gray-portal">
                    <h4 v-if="detail.content.event_ticket_price > 0">
                      {{ detail.content.event_ticket_price | price }}
                    </h4>
                    <h4 v-else>
                      Gratis
                    </h4>
                  </div>
                  <div class="text-center text-md-left">
                    <small class="form-text text-red fs-9 ml-1 pt-3" 
                      v-if="response !== null">
                      {{ response }}
                    </small>
                    <button
                      class="btn bg-red text-white p-l-70 p-r-70 py-1 mt-3 fs-13"
                      :disabled="process.run"
                      @click="joins(detail.id)">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="br-10 bgwhite p-2 p-md-3 my-3">
              <h6>Deskripsi</h6>
              <div class="event-deskripsi fs-12" v-html="detail.content.content"></div>
            </div>
          </div>
          <div class="col-md-3">
            <banner-public/>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  
  export default {
    name: 'EventDetail',
    data() {
      return {
        props: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'm1' },
        selected: null,
        process: {
          run: false
        },
        response: null
      }
    },
    props: {},
    components: {},
    mounted() {
      
    },
    computed: {
      detail () {
        return this.$parent.apiContent.result
      }
    },
    methods: {
      gallery () {
        return this.detail.image.map((val)=> {
          return {
            title : this.detail.title,
            url: val.original 
          }

        })
      },
      joins (id) {
        this.$bvModal.msgBoxConfirm('Apakah anda yakin join event ?', {
          title: 'Join Event',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'info',
          okTitle: 'Ya',
          cancelTitle: 'Tidak',
          footerClass: 'p-2',
          centered: true
        })
        .then(value => {
          if (value) {
            this.save(id)
          }
        })
        .catch(err => {
          // An error occurred
        })
      },
      async save (id) {
        this.response = null
        this.process.run = true
        this.$root.$loading.start()
        this.$lib.ajax
        .fetch('POST', `${this.$config.baseUrlApi}/member/event/join`, {
          id: id
        })
        .then(response => {
          this.$root.$loading.finish()
          if (response.ok === 1) {
            let expired = this.$moment(response.result.data.event_booking_payment_expired_datetime).format('D MMMM YYYY')
            this.$bvModal.msgBoxConfirm(response.result.data.event_booking_total_price > 0 ? `Join event berhasil, kode boking anda ${response.result.data.event_booking_code}. Silahkan menyelesaikan pembayaran sebelum tanggal ${expired}`:`Join event berhasil, lihat tiket event saya`, {
              title: 'Join Event Berhasil',
              size: 'md',
              buttonSize: 'sm',
              okVariant: 'info',
              okTitle: response.result.data.event_booking_total_price > 0 ? 'Bayar Sekarang':'Ok',
              cancelTitle: 'Tutup',
              footerClass: 'p-2',
              centered: true
            })
            .then(value => {
              if (value) {
                this.$router.push(response.result.data.event_booking_total_price > 0 ? '/dashboard/invoice':'/dashboard/tiket?search=&status=2&page=1');
              }
            })
            .catch(err => {
              // An error occurred
            })
          } else {
            this.process.run = false
            this.response = response.message
          }
        })
        .catch(e => {})
      }
    },
    created () {},
    destroyed () {}
  }
</script>