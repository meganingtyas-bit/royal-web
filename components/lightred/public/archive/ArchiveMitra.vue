<template>
  <div>
    <section id="archive-mitra" style="background:#fff;">
      <div
        class="bg-mitra"
        :style="{
          backgroundImage: 'url(/assets/themes/lightred/images/event/mitra_bg.png)'
        }"
      >
        <b-container>
          <b-row>
            <div class="col-md-5 mt-5">
              <div class="box-title fs-18 text-red-portal p-b-10 p-t-25">
                <span class="font-weight-bold text-red-portal">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                  PROFIL USAHA
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray-portal lh-1-0 p-b-25">
                  <b>Mitra Coffee Royal community</b>
                </h1>
                <div class="box-content-event text-gray-portal m-auto fs-18 lh-1-8 p-b-45">
                  <p>Jika ingin mengetahui berita atau informasi lainnya seputar Coffee Royal community bisa dilihat didalam list yang ada pada direktori dibawah.</p>
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
                      <select
                        class="event-ss custom-select"
                        v-model="params.category"
                        v-on:change="querys"
                      >
                        <option value>Semua Kategori</option>
                        <option
                          v-for="(l, index) in categories"
                          :key="index"
                          :value="l.id"
                        >{{ l.title }}</option>
                      </select>
                      <select
                        class="event-ss custom-select"
                        v-model="params.province"
                        v-on:change="querys"
                      >
                        <option value>Semua Provinsi</option>
                        <option
                          v-for="(l, index) in provinces"
                          :key="index"
                          :value="l.id"
                        >{{ l.name }}</option>
                      </select>
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
            <div class="col-md-9">
              <div class="d-flex justify-content-center align-items-center">
                <b-spinner variant="danger" type="grow" v-if="process.loading"></b-spinner>
              </div>
              <b-row v-if="!process.loading">
                <div v-for="(l, index) in datas.result" :key="index" class="col-md-6 p-b-15 p-t-15">
                  <div class="mitra-card br-10">
                    <div class="d-lg-flex">
                      <nuxt-link to="/#">
                        <div class="mitra-bandage">{{ l.content.city }}</div>
                      </nuxt-link>
                      <nuxt-link :to="{ path: `/mitra/${l.id}/${l.slug}`}">
                        <div class="text-center">
                          <img :src="l.content.image" alt class="img-mitra" width="180" />
                        </div>
                      </nuxt-link>
                      <div class="px-2 card-mitra">
                        <nuxt-link :to="{ path: `/mitra/${l.id}/${l.slug}` }">
                          <p class="fs-14 dots-text">{{ l.title }}</p>
                        </nuxt-link>
                        <div class="d-flex align-items-start fs-10">
                          <!-- <img
                            src="/assets/themes/lightred/images/location.png"
                            alt
                            class="mr-1"
                            width="15"
                          /> -->
                          <i class="fa fa-map-marker text-red-portal fs-18 mr-1" width="15"></i>
                          <div class="dots-text">
                            {{ l.content.address }}                                
                          </div>
                        </div>
                        <!-- <div class="d-flex align-items-start mt-2 fs-10">
                         
                              <img 
                                src="/assets/themes/lightred/images/detail/web.png" 
                                alt 
                                class="mr-1" 
                                width="15"/>
                              Http://Umkmjogja.id/Umkm/Pawon-
                           
                        </div>-->
                        <div class="d-flex align-items-start mt-2 fs-10">
                          <!-- <img
                            src="/assets/themes/lightred/images/location.png"
                            alt
                            class="mr-1"
                            width="15"
                          />-->
                          <i class="fa fa-list text-red-portal fs-14 mr-1" width="15"></i>
                          {{ l.category_title }}
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between fs-9 py-1">
                      <!-- <div>Kecamatan : <b>Banjarnegara</b></div> -->
                      <div>
                        Kota :
                        <b>{{ l.content.city }}</b>
                      </div>
                      <div>
                        Provinsi :
                        <b>{{ l.content.province }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </b-row>
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
            <div class="col-md-3 p-t-15 text-center">
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
  name: 'ArchiveMitra',
  data() {
    return {
      process: {
        loading: false
      },
      params: {
        search: '',
        category: '',
        province: '',
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
    categories() {
      return this.$store.state.category.categories
    },
    provinces() {
      return this.$store.state.address.provinces
    },
    filter() {
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

      if (this.$route.query.category !== undefined) {
        this.params.category = this.$route.query.category
        this.params.pagenum = 1
        filter.push({
          type: 'string',
          field: 'category_id',
          value: this.$route.query.category,
          comparison: '<'
        })
      }

      if (this.$route.query.province !== undefined) {
        this.params.province = this.$route.query.province
        this.params.pagenum = 1
        filter.push({
          type: 'string',
          field: 'client_regional_id',
          value: this.$route.query.province,
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
            category: this.params.category,
            province: this.params.province,
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
          type_id: 8,
          filter: this.filter,
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