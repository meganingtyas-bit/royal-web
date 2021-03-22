<template>
  <div>
    <div class="list-article">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-12">
            <b-breadcrumb class="pb-1" :items="breadcrumb"></b-breadcrumb>
            <div class="box-title fs-18 text-muted pb-4">
              <span>
                <img src="/assets/themes/lightred/images/subtitle_red.png" alt />Usaha Saya
              </span>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-md-3">
                    <nuxt-link
                      to="/dashboard/profile/usaha/add"
                      class="btn btn-dashboard btn-danger-lightred fs-12 ml-0 btn-add-new"
                    >
                      <i class="fa fa-pencil mr-2"></i>TAMBAH USAHA
                    </nuxt-link>
                  </div>
                  <div class="col-md-9">
                    <div v-if="$mq === 'mobile' || $mq === 'tablet'">
                      <b-form-input
                        class="m-b-10"
                        placeholder="Cari Artikel"
                        v-model="filter.search"
                      ></b-form-input>
                      <button class="btn btn-sm-dashboard btn-danger-lightred" @click="actFilter">
                        <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />Cari
                      </button>
                    </div>
                    <div
                      class="search-wrap list-dash-filter"
                      v-if="$mq !== 'mobile' && $mq !== 'tablet'"
                    >
                      <div class="input-group ctm-input-group">
                        <b-form-input
                          class="col-md-10"
                          placeholder="Cari ..."
                          v-model="filter.search"
                        ></b-form-input>

                        <select
                          v-model="filter.status"
                          class="form-control ldf-status"
                          style="min-height: 38px;"
                        >
                          <option value>--Status--</option>
                          <option value="0">Unpublish</option>
                          <option value="1">Publish</option>
                        </select>
                        <button
                          class="btn btn-sm-dashboard btn-danger-lightred brd-top-0"
                          @click="actFilter"
                        >
                          <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />Cari
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-7 py-4">
            <div class="search-wrap col-md-12 p-0 mb-lg-5 mb-2">
              <b-input-group class="d-md-flex justify-content-end">
                <b-form-input class="col-md-10" placeholder="Mau Cari Apa ?"></b-form-input>
                <template v-slot:append>
                  <button class="btn btn-sm-dashboard btn-danger-lightred">
                    <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />Cari
                  </button>
                </template>
              </b-input-group>
            </div>
          </div>-->
        </div>
        <esd-loading-data ref="loadingData" />
        <div v-if="loadedData">
          <div class="row py-4 px-2" v-if="posts.length > 0">
            <div class="col-lg-3 col-md-6 px-1 py-1" v-for="(post, index) in posts" :key="index">
              <div class="box-shadow-mitra">
                <b-media>
                  <div class="mb-1">
                    <div
                      class="label-dashboard"
                      :class="post.is_publish==0?'bg-gray':'green'"
                    >{{post.is_publish==0?'UNPUBLISH':'PUBLISH'}}</div>
                    <div class="btn-aksi text-right">
                      <nuxt-link
                        :to="{ path: `usaha/edit?id=${post.id}&slug=${post.slug}`}"
                        class="text-muted"
                        v-b-tooltip.hover
                        title="Ubah"
                      >
                        <i class="fa fa-edit"></i>
                      </nuxt-link>
                      <a
                        :class="post.is_publish==0?'text-green-portal':'text-muted'"
                        v-on:click="statusData(post.id,post.is_publish)"
                        v-b-tooltip.hover
                        :title="post.is_publish==0?'aktif':'non-aktif'"
                      >
                        <i class="fa fa-power-off"></i>
                      </a>
                      <a
                        href="javascript:;"
                        v-on:click="deleteData(post.id)"
                        class="text-muted"
                        v-b-tooltip.hover
                        title="Hapus"
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </div>
                  </div>
                  <div class="box-img-usaha m-auto text-center">
                    <img v-bind:src="post.image[0]['original']" width="120" height="120" class />
                  </div>
                  <div
                    class="fs-12 limit-dotted-one text-muted font-weight-bold text-center"
                  >{{post.title}}</div>
                  <div class="fs-12 text-red content-artikel text-center">{{post.category_title}}</div>
                </b-media>
              </div>
            </div>
          </div>
          <div class="row justify-content-center p-t-110" v-else>
            <div class="box-default m-auto text-center">
              <img
                src="/assets/themes/lightred/images/document.png"
                width="64"
                style="filter: grayscale(100%);"
              />
              <h3 class="op-0-4 mt-2">"Tidak Ada Profil Usaha"</h3>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="ctm-pagination">
              <ul aria-label="Pagination" class="pagination fs-12 pt-4 d-inline-flex">
                <li v-if="pagination.first_page" class="page-item">
                  <a href="javascript:;" style="top: 6px;" @click="goToPage(1)" class="page-link">«</a>
                </li>
                <li v-if="pagination.prev != 0" class="page-item">
                  <a
                    href="javascript:;"
                    style="top: 6px;"
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
                    style="top: 6px;"
                    class="page-link"
                  >{{page}}</a>
                  <a
                    v-else
                    href="javascript:;"
                    style="top: 6px;"
                    @click="goToPage(page)"
                    class="page-link"
                  >{{page}}</a>
                </li>
                <li v-if="pagination.next != 0" class="page-item">
                  <a
                    href="javascript:;"
                    style="top: 6px;"
                    @click="goToPage(pagination.next)"
                    class="page-link"
                  >Selanjutnya</a>
                </li>
                <li v-if="pagination.last_page" class="page-item">
                  <a
                    href="javascript:;"
                    style="top: 6px;"
                    @click="goToPage(pagination.total_page)"
                    class="page-link"
                  >»</a>
                </li>
              </ul>
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
  name: 'MitraShow',
  data() {
    return {
      loadedData: false,
      breadcrumb: [
        {
          text: 'Dashboard',
          href: '/dashboard'
        },
        {
          text: 'Usaha Saya',
          href: '/dashboard/profile/usaha'
        }
      ],
      filter: {
        startDate: '',
        endDate: '',
        status: '',
        search: ''
      },
      rows: 50,
      perPage: 10,
      currentPage: 1,
      posts: [],
      pagination: {}
    }
  },
  components: {},
  mounted() {
    this.fetchData()
  },
  methods: {
    actFilter() {
      let myfilter = {}
      // myfilter.start_date = this.filter.startDate
      // myfilter.end_date = this.filter.endDate
      myfilter.status = this.filter.status
      myfilter.s = this.filter.search
      let newQueryPagged = Object.assign({}, this.$route.query, myfilter)
      delete newQueryPagged.paged
      this.$router.push({ query: newQueryPagged })
      this.fetchData()
    },
    goToPage(page) {
      this.currentPage = page
      let newQueryPagged = Object.assign({}, this.$route.query, { paged: page })
      this.$router.push({ query: newQueryPagged })
      this.fetchData()
    },
    deleteData(id_data) {
      if (confirm('Anda Yakin ingin menghapus Data ini ?')) {
        let params = {
          id: id_data
        }
        lib.ajax
          .fetch('POST', `${config.baseUrlApi}/member/content/delete`, params)
          .then(response => {
            if (response.ok == 1) {
              this.fetchData()
              alert(response.message)
            }
          })
          .catch(e => {})
      }
    },
    statusData(id_data, status) {
      if (status == 0) {
        let params = {
          id: id_data
        }
        lib.ajax
          .fetch('POST', `${config.baseUrlApi}/member/content/publish`, params)
          .then(response => {
            if (response.ok == 1) {
              this.fetchData()
            }
          })
          .catch(e => {})
      } else {
        let params = {
          id: id_data
        }
        lib.ajax
          .fetch(
            'POST',
            `${config.baseUrlApi}/member/content/unpublish`,
            params
          )
          .then(response => {
            if (response.ok == 1) {
              this.fetchData()
              // alert(response.message)
            }
          })
          .catch(e => {})
      }
    },
    fetchData() {
      this.loading = true
      let param = {
        limit: this.perPage,
        page: this.currentPage,
        type_id: 8,
        sort: 'input_datetime',
        dir: 'desc'
      }

      param.filter = []
      param.filter.push({
        type: 'string',
        field: 'account_id',
        value: this.$store.state.auth.authUser.id,
        comparison: '='
      })

      if (this.filter.search != '') {
        param.filter.push({
          type: 'string',
          field: 'title',
          value: this.filter.search,
          comparison: '<'
        })
      }

      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/member/content/list/by-type`, param)
        .then(response => {
          this.loadedData = true
          this.$refs.loadingData.finish()
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