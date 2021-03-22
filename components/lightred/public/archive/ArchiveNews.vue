<template>
  <div>
    <section id="consultant">
      <div
        class="bg-news"
        style="background-repeat: no-repeat; background-size: 100% auto;"
        :style="{ 
          backgroundImage: 'url(/assets/themes/lightred/images/artikerl_bg.png)'
        }"
      >
        <b-container>
          <b-row>
            <div class="col-lg-6 col-md-8">
              <div class="box-title fs-18 text-red-portal p-b-10">
                <span class="font-weight-bold">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                  BERITA
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray-portal lh-1-0 p-b-25">
                  <b>Berita Coffee Royal community</b>
                </h1>
                <div class="box-content-event text-gray-portal m-auto lh-1-8 p-b-45">
                  <p>Beraneka ragam berita terbaru akan terus kami hadirkan guna memaksimalkan usaha Anda secara uptodate</p>
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
                      <!-- <select class="event-ss custom-select"
                        v-model="params.category"
                        v-on:change="querys">
                        <option value="">
                          Semua Kategori
                        </option>
                        <option 
                          v-for="(l, index) in categories" 
                          :key="index"
                          :value="l.id">
                          {{ l.title }}
                        </option>
                      </select>-->
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
                        class="btn btn-md-dashboard btn-danger-lightred rsp-search"
                        @click="querys"
                      >
                        <!-- <img src="/assets/themes/lightred/images/search.svg" class="mr-2" /> -->
                        <i class="fa fa-search"></i>
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
              <!-- <div class="d-flex justify-content-md-center table-responsive pb-4 pt-1">
                <div class="btn-filter ctm-btn-group">
                  <b-button-group>
                    <b-button
                      v-for="item in filterItem"
                      :key="item.id"
                      v-bind:class="{'active' : item.id ==  selectedFilter }"
                      @click="filterSelect(item.id)"
                      variant="outline-dark"
                      class="fs-12">
                      {{ item.title }}
                    </b-button>
                  </b-button-group>
                </div>
              </div>-->
              <div class="d-flex justify-content-center align-items-center">
                <b-spinner variant="danger" type="grow" v-if="process.loading"></b-spinner>
              </div>
              <div class="row box-carousel-pendamping" v-if="!process.loading">
                <div
                  v-for="(l, index) in datas.result"
                  :key="index"
                  class="ft-9 col-lg-6 col-md-12 p-0 pdg"
                >
                  <div class="box-news">
                    <div class="box-img-event p-0">
                      <nuxt-link :to="{ path: `/news/${l.id}/${l.slug}` }">
                        <img v-bind:src="l.image[0]['original']" class="img-thumbnail" />
                      </nuxt-link>
                      <!-- <div class="label-event-red-left">
                        <span>
                          {{ l.category_title }}
                        </span>
                      </div>-->
                    </div>
                    <div class="box-title-news p-1">
                      <div class="row">
                        <div class="col-md-12">
                          <nuxt-link :to="{ path: `/news/${l.id}/${l.slug}` }">
                            <span class="text-muted dots-text fs-14 font-weight-bold">{{ l.title }}</span>
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
                      <span class="dots-text">{{ l.content.content }}</span>
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
                        <span>{{ $moment(l.input_date ).format('LL') }}</span>
                        <span>oleh</span>
                        <span>{{ l.account_name }}</span>
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
  name: 'ArchiveNews',
  data() {
    return {
      process: {
        loading: false
      },
      params: {
        search: '',
        // category: '',
        province: '',
        pagenum: 1
      },
      datas: {
        result: [],
        pagination: {}
      }
      // selectedFilter: 0,
      // filterItem: [],
    }
  },
  props: {},
  components: {},
  mounted() {
    this.fetchData()
  },
  computed: {
    // categories () {
    //   return this.$store.state.category.categories
    // },
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

      // if (this.$route.query.category !== undefined) {
      //   this.params.category = this.$route.query.category
      //   this.params.pagenum = 1
      //   filter.push({
      //     type: 'string',
      //     field: 'category_id',
      //     value: this.$route.query.category,
      //     comparison: '<'
      //   })
      // }

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
            // category: this.params.category,
            province: this.params.province,
            page: this.params.pagenum
          }
        })
        .catch(err => {})

      this.fetchData()
    },
    // filterSelect (item) {
    //   if (item != this.selectedFilter) {
    //     this.selectedFilter = item
    //     this.currentPage = 1
    //     this.fetchData()
    //   }
    // },
    fetchData() {
      this.process.loading = true
      // if (this.filterItem.length > 0) {
      //   if (this.selectedFilter != this.filterItem[0].id) {
      //     param.filter.push({
      //       type: 'string',
      //       field: 'category_id',
      //       value: this.selectedFilter
      //     })
      //   }
      // }
      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, {
          type_id: 12,
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