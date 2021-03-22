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
                Tiket Saya
              </span>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-md-12">
                    <div v-if="$mq === 'mobile' || $mq === 'tablet'">
                      <b-form-input
                        class="m-b-10"
                        :placeholder="params.status === 1 ? 'Cari Kode Boking':'Cari Kode Tiket'"
                        v-model="params.search">
                      </b-form-input>
                      <button class="btn btn-sm-dashboard btn-danger-lightred" 
                        @click="querys">
                        <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />
                        Cari
                      </button>
                    </div>
                    <div class="search-wrap list-dash-filter"
                      v-if="$mq !== 'mobile' && $mq !== 'tablet'">
                      <div class="input-group ctm-input-group">
                        <b-form-input
                          class="col-md-12"
                          :placeholder="params.status === 1 ? 'Cari Kode Boking':'Cari Kode Tiket'"
                          v-model="params.search"
                          v-on:keyup.enter="querys">
                        </b-form-input>

                        <button
                          class="btn btn-md-dashboard btn-danger-lightred br-l-none"
                          @click="querys">
                          <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />
                          Cari
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-tabs content-class="mt-3" justified>
          <b-tab 
            v-for="(l, index) in tabs.data"
            :key="index"
            :title="l.title" 
            :active="params.status === l.id"
            @click="changeTabs(l.id, l.title)">
            <esd-loading-data 
              v-if="process.loading" 
              ref="loadingData" />
            <div v-if="!process.loading">
              <div class="row py-3" v-if="datas.result.length > 0">
                <div class="col-md-6 py-3 px-2 px-lg-3" 
                  v-for="(l, index) in datas.result" 
                  :key="index">
                  <div class="box-shadow-news">
                    <b-media v-if="params.status === 1">
                      <b-row>
                        <b-col cols="9">
                          <div class="mb-1">
                            <div class="title-artikel text-muted font-weight-bold">
                              {{ l.content_title }}
                            </div>
                          </div>
                          <div class="title-artikel text-muted content-artikel">
                            Invoice Number {{ l.invoice_code }}
                          </div>
                          <div class="title-artikel text-muted content-artikel">
                            Kode Boking {{ l.event_booking_code }}
                          </div>
                          <div class="title-artikel text-muted content-artikel">
                            Tagihan {{ l.event_ticket_price | price }}
                          </div>
                          <div class="title-artikel text-muted content-artikel">
                            Expired pada tanggal
                            <b>
                              {{ $moment(l.invoice_payment_expired_datetime).format('LL') }}
                            </b>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <div class="title-artikel text-danger font-weight-bold">
                            <div class="btn-aksi text-right"
                              v-if="l.invoice_status === 1">
                              <nuxt-link
                                :to="`/dashboard/invoice/${l.invoice_id}`"
                                class="btn text-right btn-danger-lightred fs-10">
                                Konfirmasi
                              </nuxt-link>
                            </div>
                            <span v-if="l.invoice_status === 2">
                              Sedang Diproses
                            </span>
                            <span v-if="l.invoice_status === 3">
                              Expired
                            </span>
                            <span v-if="l.invoice_status === 4">
                              Dibatalkan
                            </span>
                            <span v-if="l.invoice_status === 5">
                              Transaksi Berhasil
                            </span>
                            <span v-if="l.invoice_status === 5">
                              Transaksi Ditolak
                            </span>
                          </div>
                        </b-col>
                      </b-row>
                    </b-media>
                    <b-media v-if="params.status === 2">
                      <div class="mb-1">
                        <div class="title-artikel text-muted font-weight-bold">
                          {{ l.ref.content_title }}
                        </div>
                      </div>
                      <div class="title-artikel text-muted content-artikel">
                        Kode Tiket {{ l.event_ticket_code }}
                      </div>
                    </b-media>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center p-t-110" v-else>
                <div class="box-default m-auto text-center">
                  <img
                    src="/assets/themes/lightred/images/document.png"
                    width="64"
                    style="filter: grayscale(100%);"/>
                  <h3 class="op-0-4 mt-2">"Tidak Ada {{ tabs.selected }}"</h3>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="ctm-pagination d-flex justify-content-center">
                  <ul
                    role="menubar"
                    aria-disabled="false"
                    aria-label="Pagination"
                    class="pagination box-navigation m-auto fs-12 pt-4 d-inline-flex b-pagination justify-content-center">
                    <li v-if="datas.pagination.first_page" class="page-item">
                      <a href="javascript:;" 
                        @click="pagenums(1)" 
                        class="page-link">
                        «
                      </a>
                    </li>
                    <li v-if="datas.pagination.prev > 0" class="page-item">
                      <a
                        href="javascript:;"
                        @click="pagenums(datas.pagination.current-1)"
                        class="page-link">
                        Sebelumnya
                      </a>
                    </li>
                    <li
                      v-for="page in datas.pagination.detail"
                      :key="page"
                      v-bind:class="{ 'active' : page == datas.pagination.current }"
                      class="page-item">
                      <a href="javascript:;" 
                        @click="pagenums(page)" 
                        class="page-link">
                        {{ page }}
                      </a>
                    </li>
                    <li v-if="datas.pagination.next > 0" class="page-item">
                      <a
                        href="javascript:;"
                        @click="pagenums(datas.pagination.current+1)"
                        class="page-link">
                        Selanjutnya
                      </a>
                    </li>
                    <li v-if="datas.pagination.last_page" class="page-item">
                      <a
                        href="javascript:;"
                        @click="pagenums(datas.pagination.total_page)"
                        class="page-link">
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  
  export default {
    name: 'InvoiceShow',
    data() {
      return {
        breadcrumb: [
          {
            text: 'Dashboard',
            href: '/dashboard'
          },
          {
            text: 'Tiket',
            href: '/dashboard/tiket'
          }
        ],
        tabs: {
          selected: 'Bocked',
          data: [
            {
              id: 1,
              title: 'Bocked',
            },
            {
              id: 2,
              title: 'List Tiket Event',
            }
          ]
        },
        process: {
          loading: false
        },
        params: {
          search: '',
          status: 1,
          pagenum: 1
        },
        datas: {
          result: [],
          pagination: {}
        }
      }
    },
    props: {},
    components: {},
    mounted() {
      this.fetchData()
    },
    computed: {
      search () {
        return this.$route.query.search !== undefined ? this.$route.query.search:this.params.search
      },
      status () {
        this.params.status = this.$route.query.status !== undefined ? parseInt(this.$route.query.status):this.params.status
        return this.$route.query.status !== undefined ? this.$route.query.status:this.params.status
      },
      pagenum () {
        return this.$route.query.page !== undefined ? this.$route.query.page:this.params.pagenum
      }
    },
    methods: {
      changeTabs (id, title) {
        this.datas = {
          result: [],
          pagination: {}
        }
        this.params.status = id
        this.tabs.selected = title
        this.querys()
      },
      pagenums (page) {
        this.params.pagenum = page
        this.querys()
      },
      async querys () {
        await this.$router.replace({ 
          query: { 
            search: this.params.search,
            status: this.params.status,
            page: this.params.pagenum
          }
        }).catch(err => {})

        this.fetchData()
      },
      fetchData () {
        this.process.loading = true
        lib.ajax
          .fetch('GET', this.status === 1 ? `${config.baseUrlApi}/member/event/ticket-booking/list`:`${config.baseUrlApi}/member/event/ticket/list`, {
            search: this.search,
            page: this.pagenum,
            limit: 10
          })
          .then(response => {
            this.datas.result = response.result.data
            this.datas.pagination = response.result.pagination
            this.process.loading = false
          })
          .catch(e => {})
      }
    },
    created () {},
    destroyed () {}
  }
</script>