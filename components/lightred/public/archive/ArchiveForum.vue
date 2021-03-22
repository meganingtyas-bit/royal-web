<template>
  <div>
    <section id="archive-event" style="background:#fff;">
      <div
        class="bg-mitra"
        :style="{ 
          backgroundImage: 'url(/assets/themes/lightred/images/event/event_bg.png)'
        }"
      >
        <b-container>
          <b-row>
            <div class="col-md-5 mt-5">
              <div class="box-title fs-18 text-red-portal p-b-10">
                <span class="font-weight-bold text-red-portal">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                  DISKUSI
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray lh-1-0 p-b-25">
                  <b>Forum UMKM</b>
                </h1>
                <div class="box-content-event text-gray-portal m-auto fs-18 lh-1-8 p-b-45">
                  <p>Jika ingin berdiskusi seputar UMKM bisa dilihat didalam list yang ada pada direktori dibawah ini</p>
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
              <div class="m-b-20">
                <b-row>
                  <!--                   <div class="col-lg-3 py-2">
                    <h2>
                      Event
                    </h2>
                  </div>
                  -->
                  <!-- <div class="col-lg-9 py-2 d-flex justify-content-md-center table-responsive">
                    <div class="btn-filter ctm-btn-group">
                      <b-button-group>
                        <b-button
                          v-for="item in filterItem"
                          :key="item"
                          v-bind:class="{'active' : item ==  selectedFilter}"
                          @click="filterSelect(item)"
                          variant="outline-dark"
                          class="fs-12"
                        >{{item}}</b-button>
                      </b-button-group>
                    </div>
                  </div>-->
                </b-row>
              </div>
              <!-- <b-row>
                <div v-for="post in posts" v-bind:key="post.id" class="col-md-4">
                  <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="m-b-30"
                  >
                    <div class="event-list">
                      <div class="el-l">
                        <p class>17px</p>
                        <p class>sep</p>
                      </div>
                      <div class="el-r">
                        <p class="fs-12">Gedung Building</p>
                        <p class="fs-11">11.00</p>
                      </div>
                    </div>
                    <b-card-text
                      class="f-t-14"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
                  </b-card>
                </div>
              </b-row>-->
              <div class="d-flex justify-content-center align-items-center">
                <b-spinner variant="danger" type="grow" v-if="process.loading"></b-spinner>
              </div>
              <b-row v-if="!process.loading">
                <div
                  v-for="(l, index) in datas.result"
                  :key="index"
                  class="col-lg-4 col-md-6 p-b-15 p-t-15"
                >
                  <div class="position-relative overlay-wrapper">
                    <div class="mitra-card bg-white br-10">
                      <nuxt-link to="/#">
                        <div class="event-bandage">{{ l.content.location.subdistrict }}</div>
                      </nuxt-link>
                      <div class="text-center">
                        <img :src="l.image[0].thumb" alt class="img-event-archive" />
                      </div>
                      <div class="pt-2">
                        <div class="dots-text pt-1 fs-13">{{ l.title }}</div>
                      </div>
                    </div>
                    <!--  <div class="mitra-card-overlay position-absolute br-10">
                      <div class="d-flex align-items-center py-5 px-3">
                        <div class="pt-1 fs-13 mb-4">
                          {{ l.title }}
                        </div>
                        <nuxt-link
                          :to="{ path: `/event/${l.id}/${l.slug}`}"
                          class="btn btn-md-portal btn-danger-lightred py-1 fs-12">
                          Join Thread
                        </nuxt-link>
                      </div>
                    </div>-->
                    <div class="mitra-card-overlay position-absolute br-10">
                      <div class="py-5 px-3">
                        <div class="text-center m-auto pt-1 fs-13 mb-4 pb-4">{{ l.title }}</div>
                        <nuxt-link
                          :to="{path: `/event/${l.id}/${l.slug}`}"
                          class="btn btn-lg btn-block btn-danger-lightred py-1 fs-12"
                        >Join Thread</nuxt-link>
                        <!-- <button class="btn btn-lg btn-block btn-danger py-1 fs-12">Join Now</button> -->
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
            <div class="col-md-3">
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
  name: 'ArchiveForum',
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
      // selected1: null,
      // selected2: null,
      // Kategori: [
      //   { value: null, text: 'Kategori' },
      //   { value: 'a', text: 'This is First option' },
      //   { value: 'b', text: 'Selected Option' }
      // ],
      // Lokasinya: [
      //   { value: null, text: 'Lokasi' },
      //   { value: 'a', text: 'This is First option' },
      //   { value: 'b', text: 'Selected Option' }
      // ],
      // selectedFilter: 'Lihat Semua',
      // filterItem: [
      //   'Lihat Semua',
      //   'Pameran',
      //   'Pendampingan Usaha',
      //   'Seminar',
      //   'Workshop'
      // ],
      // events: [
      //   { id: 1 },
      //   { id: 2 },
      //   { id: 3 },
      //   { id: 4 },
      //   { id: 5 },
      //   { id: 6 },
      //   { id: 7 }
      // ],
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
          type_id: 9,
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