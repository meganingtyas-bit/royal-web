<template>
  <div>
    <section id="consultant">
      <div
        class="bg-archieve"
        style="background-repeat: no-repeat; background-size: 100% auto;"
        :style="{ 
          backgroundImage: 'url(/assets/themes/lightred/images/konsul_bg.png)'
        }"
      >
        <b-container>
          <b-row>
            <div class="col-md-5">
              <div class="box-title fs-18 text-red-portal p-b-10">
                <span class="font-weight-bold">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                  CHAMPION
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray-portal lh-1-0 p-b-25">
                  <b>CHAMPION Coffee Royal community</b>
                </h1>
                <div class="box-content-event text-gray-portal m-auto lh-1-8 p-b-45">
                  <p>Jika ingin mengetahui berita atau informasi lainnya seputar Coffee Royal community bisa dilihat didalam list yang ada pada direktori dibawah ini</p>
                </div>
              </div>
            </div>
          </b-row>

          <div class="search-wrap">
            <b-row class="justify-content">
              <div class="col-lg-12">
                <div>
                  <b-input-group>
                    <b-form-input
                      placeholder="Masukkan kata kunci umkm yang dicari"
                      v-model="params.search"
                      v-on:keyup.enter="querys"
                    ></b-form-input>
                    <template v-slot:append>
                      <b-button
                        variant="outline-secondary"
                        class="button-red ctm-group-btn"
                        @click="querys"
                      >
                        <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />
                        Cari
                      </b-button>
                    </template>
                  </b-input-group>
                </div>
              </div>
            </b-row>
          </div>

          <b-row>
            <div class="col-md-9 py-5">
              <div class="d-flex justify-content-center align-items-center">
                <b-spinner variant="danger" type="grow" v-if="process.loading"></b-spinner>
              </div>
              <div class="row box-carousel-pendamping" v-if="!process.loading">
                <div
                  v-for="(l, index) in datas.result"
                  :key="index"
                  class="col-lg-3 col-md-6 col-sm-6 p-0"
                >
                  <!-- <b-col md='3'> -->
                  <div class="box-ku">
                    <!-- <div class="label-premium">
                      <span>{{items.label}}</span>
                    </div>-->
                    <img :src="l.account_image || l.account_image" class="img-consultant" />
                    <div class="box-overlay text-center">
                      <p class="text-gray-portal fs-14 m-b-0">{{ l.title }}</p>
                      <b-card-text>
                        <span class="fs-9 text-muted">{{ l.description }}</span>
                      </b-card-text>
                    </div>
                    <div class="middle m-auto text-center">
                      <p class="text-gray-portal fs-14">{{ l.title }}</p>
                      <b-card-text>
                        <span class="fs-9 text-muted">{{ l.description }}</span>
                      </b-card-text>
                      <nuxt-link
                        :to="{ path: `/consultant/${l.id}/${l.slug}` }"
                        class="btn btn-danger-lightred btn-md-portal"
                      >Lihat Profil</nuxt-link>
                    </div>
                  </div>
                  <!-- </b-col> -->
                </div>
              </div>
              <div class="ctm-pagination d-flex justify-content-center">
                <ul
                  role="menubar"
                  aria-disabled="false"
                  aria-label="Pagination"
                  class="pagination box-navigation m-auto fs-12 pt-4 d-inline-flex b-pagination justify-content-center"
                >
                  <li v-if="datas.pagination.first_page" class="page-item">
                    <a href="javascript:;" @click="pagenums(1)" class="page-link">«</a>
                  </li>
                  <li v-if="datas.pagination.prev > 0" class="page-item">
                    <a
                      href="javascript:;"
                      @click="pagenums(datas.pagination.current-1)"
                      class="page-link"
                    >Sebelumnya</a>
                  </li>
                  <li
                    v-for="page in datas.pagination.detail"
                    :key="page"
                    v-bind:class="{ 'active' : page == datas.pagination.current }"
                    class="page-item"
                  >
                    <a href="javascript:;" @click="pagenums(page)" class="page-link">{{ page }}</a>
                  </li>
                  <li v-if="datas.pagination.next > 0" class="page-item">
                    <a
                      href="javascript:;"
                      @click="pagenums(datas.pagination.current+1)"
                      class="page-link"
                    >Selanjutnya</a>
                  </li>
                  <li v-if="datas.pagination.last_page" class="page-item">
                    <a
                      href="javascript:;"
                      @click="pagenums(datas.pagination.total_page)"
                      class="page-link"
                    >»</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 py-5">
              <banner-public />
            </div>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>
<script>
import config from '~/config/config'
import lib from '~/system/lib/Lib'

export default {
  name: 'ArchiveConsultant',
  data() {
    return {
      process: {
        loading: false
      },
      params: {
        search: '',
        pagenum: 1
      },
      datas: {
        result: [],
        pagination: {}
      }
      // selected1: null,
      // keahlian: [
      //   { value: null, text: 'Kategori Partner Coach' },
      //   { value: 'a', text: 'Strategi' },
      //   { value: 'b', text: 'Organisasi' },
      //   { value: 'c', text: 'Pemasaran' },
      //   { value: 'd', text: 'Keuangan' }
      // ],
      // items: [
      //   {
      //     id: 1,
      //     foto: '/assets/themes/lightred/images/konsul1.png',
      //     name: 'EDY RISDIYANTO',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 2,
      //     foto: '/assets/themes/lightred/images/konsul2.png',
      //     name: 'W. HENIWATI',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 3,
      //     foto: '/assets/themes/lightred/images/konsul3.png',
      //     name: 'SUGENG',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 4,
      //     foto: '/assets/themes/lightred/images/konsul1.png',
      //     name: 'EDY RISDIYANTO',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 5,
      //     foto: '/assets/themes/lightred/images/konsul2.png',
      //     name: 'W. HENIWATI',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 6,
      //     foto: '/assets/themes/lightred/images/konsul3.png',
      //     name: 'SUGENG',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 7,
      //     foto: '/assets/themes/lightred/images/konsul1.png',
      //     name: 'EDY RISDIYANTO',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   },
      //   {
      //     id: 8,
      //     foto: '/assets/themes/lightred/images/konsul3.png',
      //     name: 'SUGENG',
      //     quote: 'Strategic Business Planning With NLP',
      //     button: 'Lihat Profile'
      //   }
      // ],
      // selectedFilter: '',
    }
  },
  props: {},
  components: {},
  mounted() {
    this.fetchData()
  },
  computed: {
    categories() {
      return this.$store.state.category.categories
    },
    provinces() {
      return this.$store.state.address.provinces
    },
    search() {
      let filter = []
      if (this.$route.query.search !== undefined) {
        this.params.search = this.$route.query.search
        this.params.pagenum = 1
        filter.push({
          type: 'string',
          field: 'title',
          value: this.$route.query.search,
          comparison: '<'
        })
      }

      return filter
    },
    pagenum() {
      return this.$route.query.page !== undefined
        ? this.$route.query.page
        : this.params.pagenum
    }
  },
  methods: {
    pagenums(page) {
      this.params.pagenum = page
      this.querys()
    },
    async querys() {
      await this.$router
        .replace({
          query: {
            search: this.params.search,
            page: this.params.pagenum
          }
        })
        .catch(err => {})

      this.fetchData()
    },
    fetchData() {
      this.process.loading = true
      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, {
          type_id: 14,
          filter: this.search,
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
  created() {},
  destroyed() {}
}
</script>