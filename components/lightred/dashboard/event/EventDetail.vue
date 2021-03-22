<template>
  <div>
    <section id="detail-event" style="background:#fff;">
      <b-container>
        <div class="d-flex detail-loc fs-12 text-red mb-3">
          <nuxt-link to="/dashboard" class="text-gray-portal mx-1">Dashboard</nuxt-link>>>
          <nuxt-link to="/dashboard/event" class="text-gray-portal mx-1">Event</nuxt-link>>>
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
          <div class="col-lg-8">
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
                    <h4>
                      {{ detail.content.event_ticket_price | price }}
                    </h4>
                  </div>
                  <div class="text-center text-md-left">
                    <button
                      class="btn text-white p-l-70 p-r-70 py-1 mt-3 fs-13"
                      :class="detail.is_publish === 0 ? 'green':'bg-red'"
                      @click="updates(detail.id, detail.is_publish)">
                      {{ detail.is_publish === 0 ? 'Publish':'Unpublish' }}
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
        selected: null
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
      updates (id, status) {
        if (status == 0) {
          lib.ajax
            .fetch('POST', `${config.baseUrlApi}/member/content/publish`, {
              id: id
            })
            .then(response => {
              if (response.ok == 1) {
                location.reload()
              }
            })
            .catch(e => {})
        } else {
          lib.ajax
            .fetch('POST', `${config.baseUrlApi}/member/content/unpublish`, {
              id: id
            })
            .then(response => {
              if (response.ok == 1) {
                location.reload()
              }
            })
            .catch(e => {})
        }
      }
    },
    created () {},
    destroyed () {}
  }
</script>