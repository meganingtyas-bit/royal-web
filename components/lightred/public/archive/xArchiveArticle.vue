<template>
  <div>
    <section id="consultant">
      <div
        class="bg-news"
        style="background-repeat: no-repeat; background-size: 100% auto;"
        :style="{ backgroundImage: `url(${require('static/assets/themes/lightred/images/artikerl_bg.png')})` }"
      >
        <b-container>
          <b-row>
            <div class="col-lg-6 col-md-8">
              <div class="box-title fs-18 text-red-portal p-b-10">
                <span class="font-weight-bold">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt /> ARTIKEL
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray-portal lh-1-0 p-b-25">
                  <b>Artikel UMKM</b>
                </h1>
                <div class="box-content-event m-auto text-gray-portal lh-1-8 p-b-45">
                  <p>Jika ingin mengetahui artikel lainnya seputar UMKM bisa dilihat didalam list yang ada pada direktori dibawah ini</p>
                </div>
              </div>
            </div>
          </b-row>
          <!-- <b-row>
            <div class="col-12">
              <div class="event-group">
                <b-input-group>
                  <b-form-input
                    class="input-event fs-13"
                    placeholder="Mau Cari Apa ?"
                    style="max-width: 100%; min-height: 38px;"
                  ></b-form-input>

                  <template v-slot:append>
                    <b-form-select v-model="selected" :options="kategori" class="event-ss"></b-form-select>
                    <b-form-select v-model="select" :options="lokasi" class="event-ss"></b-form-select>
                    <b-button variant="outline-secondary" class="button-red ctm-group-btn">
                      <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />Cari
                    </b-button>
                  </template>
                </b-input-group>
              </div>
            </div>
          </b-row>-->
          <b-row>
            <div class="col-md-9 py-5">
              <div class="d-flex py-2 justify-content-md-center table-responsive pb-4 pt-1">
                <div class="btn-filter ctm-btn-group">
                  <b-button-group>
                    <b-button
                      v-for="item in filterItem"
                      :key="item.id"
                      v-bind:class="{'active' : item.id ==  selectedFilter}"
                      @click="filterSelect(item.id)"
                      variant="outline-dark"
                      class="fs-12"
                    >{{item.title}}</b-button>
                  </b-button-group>
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <b-spinner variant="danger" type="grow" v-if="loading"></b-spinner>
              </div>
              <div class="row box-carousel-pendamping" v-if="!loading">
                <div
                  v-for="(post, index) in posts"
                  :key="index"
                  class="ft-9 col-lg-6 col-md-12 p-0"
                >
                  <div class="box-news">
                    <div class="box-img-event p-0">
                      <nuxt-link :to="{ path: `/article/${post.id}/${post.slug}`}">
                        <img v-bind:src="post.image[0]['original']" class="img-thumbnail" />
                      </nuxt-link>
                      <div class="label-event-red-left">
                        <span>{{post.category_title}}</span>
                      </div>
                    </div>
                    <div class="box-title-news p-1">
                      <div class="row">
                        <div class="col-md-12">
                          <nuxt-link :to="{ path: `/article/${post.id}/${post.slug}`}">
                            <span class="text-muted ft-9">{{post.title}}</span>
                          </nuxt-link>
                        </div>
                        <!-- <div class="col-md-4">
                            <span class="float-r text-right">
                              <img src="/assets/themes/lightred/images/star_color.png" alt />
                              <img src="/assets/themes/lightred/images/star_color.png" alt />
                              <img src="/assets/themes/lightred/images/star_color.png" alt />
                              <img src="/assets/themes/lightred/images/star_color.png" alt />
                              <img src="/assets/themes/lightred/images/star_color.png" alt />
                            </span>
                        </div>-->
                      </div>
                    </div>
                    <div class="box-content-text text-muted ft-8 p-1 m-b-10">
                      <span>{{items.content}}</span>
                    </div>
                    <div class="ft-8 text-muted p-1 p-b-15 clearfix">
                      <!-- <span>
                          <i class="fa fa-heart text-red-portal mr-1"></i>
                          {{items.like}}
                        </span>
                        <span>
                          <i class="fa fa-comment mr-1"></i>
                          {{items.comment}}
                      </span>-->
                      <b-card-text class="ft-news">
                        <!-- <span class="fs-9 text-muted">{{items.time}}</span> -->
                        <span>Dipublikasi</span>
                        <span>{{ $moment(post.input_date ).format('LL') }}</span>
                        <span>oleh</span>
                        <span>{{post.account_name}}</span>
                      </b-card-text>
                    </div>
                  </div>
                </div>
                <!-- end for -->
              </div>
              <div class="ctm-pagination d-flex justify-content-center">
                <ul
                  role="menubar"
                  aria-disabled="false"
                  aria-label="Pagination"
                  class="pagination box-navigation m-auto fs-12 pt-4 d-inline-flex b-pagination justify-content-center"
                >
                  <li v-if="pagination.first_page" class="page-item">
                    <a href="javascript:;" @click="goToPage(1)" class="page-link">«</a>
                  </li>
                  <li v-if="pagination.prev != 0" class="page-item">
                    <a
                      href="javascript:;"
                      @click="goToPage(pagination.prev)"
                      class="page-link"
                    >Sebelumnya</a>
                  </li>
                  <li
                    v-for="page in pagination.detail"
                    :key="page"
                    v-bind:class="{'active' : page == pagination.current }"
                    class="page-item"
                  >
                    <a
                      v-if="page == pagination.current"
                      href="javascript:;"
                      class="page-link"
                    >{{page}}</a>
                    <a v-else href="javascript:;" @click="goToPage(page)" class="page-link">{{page}}</a>
                  </li>
                  <li v-if="pagination.next != 0" class="page-item">
                    <a
                      href="javascript:;"
                      @click="goToPage(pagination.next)"
                      class="page-link"
                    >Selanjutnya</a>
                  </li>
                  <li v-if="pagination.last_page" class="page-item">
                    <a
                      href="javascript:;"
                      @click="goToPage(pagination.total_page)"
                      class="page-link"
                    >»</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 py-5">
              <div class="event-banner">
                <img
                  src="/assets/themes/lightred/images/event/banner1.png"
                  alt
                  class="img-banner mb-2 img-fluid"
                />
                <img
                  src="/assets/themes/lightred/images/event/banner2.png"
                  alt
                  class="img-banner mb-2 img-fluid"
                />
              </div>
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
  name: 'ArchiveArticle',

  data() {
    return {
      selectedFilter: 0,
      filterItem: [],
      // searchTitle: '',
      items: {
        id: 4,
        foto: '/assets/themes/lightred/images/even2.png',
        label: 'Yogyakarta',
        judul: '6 Prinsip Sanitasi Higienis Untuk Usaha Kuliner',
        content:
          'Menurut Depkes RI “tahun 2004” pengertian Hygiene adalah upaya kesehatan dengan cara memelihara dan',
        like: '99',
        comment: '99',
        time: '22 Juli 2019'
      },
      rows: 50,
      perPage: 10,
      currentPage: 1,
      posts: [],
      pagination: {},
      loading: true
    }
  },
  components: {},
  mounted() {
    this.fetchData()
  },
  created() {
    let param = { type_id: 10 }
    lib.ajax
      .fetch('GET', `${config.baseUrlApi}/content/category/list`, param)
      .then(response => {
        this.filterItem = response.result.data
        this.filterItem.unshift({
          id: 0,
          title: 'Lihat Semua'
        })
      })
      .catch(e => {})
  },
  methods: {
    goToPage(page) {
      this.currentPage = page
      this.fetchData()
    },
    filterSelect(item) {
      if (item != this.selectedFilter) {
        this.selectedFilter = item
        this.currentPage = 1
        this.fetchData()
      }
    },
    fetchData() {
      this.loading = true
      let param = {
        limit: this.perPage,
        page: this.currentPage,
        type_id: 10,
        filter: []
      }
      if (this.filterItem.length > 0) {
        if (this.selectedFilter != this.filterItem[0].id) {
          param.filter.push({
            type: 'string',
            field: 'category_id',
            value: this.selectedFilter
          })
        }
      }
      // if(this.searchTitle != ''){
      //   param.filter.push({
      //     type: 'string',
      //     field: 'title',
      //     value: this.searchTitle,
      //     comparison: '<'
      //   });

      // }

      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
        .then(response => {
          this.posts = response.result.data
          this.pagination = response.result.pagination
          this.rows = this.pagination.total_data
          this.loading = false
        })
        .catch(e => {})
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>