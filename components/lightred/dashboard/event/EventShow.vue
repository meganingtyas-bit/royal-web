<template>
  <div>
    <section class="list-article">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-12">
            <b-breadcrumb class="pb-1" :items="breadcrumb"></b-breadcrumb>
            <div class="box-title fs-18 text-muted pb-4">
              <span>
                <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                Event Saya
              </span>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3">
                    <nuxt-link
                      to="/dashboard/event/add"
                      class="btn btn-dashboard btn-danger-lightred fs-12 btn-add-new">
                      <i class="fa fa-pencil mr-2"></i>
                      TAMBAH EVENT
                    </nuxt-link>
                  </div>
                  <div class="col-md-9">
                    <div v-if="$mq === 'mobile' || $mq === 'tablet'">
                      <b-form-input
                        class="m-b-10"
                        placeholder="Cari Event"
                        v-model="params.search">
                      </b-form-input>
                      <button class="btn btn-sm-dashboard btn-danger-lightred" 
                        @click="querys">
                        <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />
                        Cari
                      </button>
                    </div>
                    <div
                      class="search-wrap list-dash-filter"
                      v-if="$mq !== 'mobile' && $mq !== 'tablet'">
                      <div class="input-group ctm-input-group">
                        <b-form-input
                          class="col-md-10"
                          placeholder="Cari Event"
                          v-model="params.search"
                          v-on:keyup.enter="querys">
                        </b-form-input>

                        <VueCtkDateTimePicker
                          v-model="params.startDate"
                          :auto-close="true"
                          :only-date="true"
                          :no-label="true"
                          locale="id"
                          formatted="ll"
                          format="YYYY-MM-DD"
                          label="Pilih Tanggal Awal"
                          class="form-control dash-filter-date"/>

                        <VueCtkDateTimePicker
                          v-model="params.endDate"
                          :min-date ="params.startDate"
                          :auto-close="true"
                          :only-date="true"
                          :no-label="true"
                          locale="id"
                          formatted="ll"
                          format="YYYY-MM-DD"
                          label="Pilih Tanggal Akhir"
                          class="form-control dash-filter-date"/>

                        <select
                          v-model="params.status"
                          class="form-control ldf-status"
                          style="min-height: 38px;"
                          v-on:change="querys">
                          <option value>--Status--</option>
                          <option value="0">Unpublish</option>
                          <option value="1">Publish</option>
                        </select>
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
        <esd-loading-data 
          v-if="process.loading" 
          ref="loadingData" />
        <div v-if="!process.loading">
          <div class="row py-4" v-if="datas.result.length > 0">
            <div class="col-lg-6 py-2 px-2 px-lg-3" 
              v-for="(l, index) in datas.result" 
              :key="index">
              <div class="p-2 br-5 bg-white box-height db-shadow my-2 d-md-flex align-items-start">
                <div class="col-md-4 p-0">
                  <img :src="l.image[0].original" class="img-event-ds" alt />
                </div>
                <div class="col-md-8 p-0 pl-md-3">
                  <div class="d-flex justify-content-between align-items-center pb-2 pt-2 pt-md-0">
                    <div
                      class="bdg-publish text-center"
                      :class="l.is_publish==0?'bg-gray':'green'">
                      {{ l.is_publish === 0 ? 'UNPUBLISH':'PUBLISH' }}
                    </div>
                    <div class="btn-aksi text-right">
                      <nuxt-link
                        :to="{ path: `event/${l.id}/${l.slug}` }"
                        class="text-muted"
                        v-b-tooltip.hover
                        title="Detail">
                        <i class="fa fa-info-circle"></i>
                      </nuxt-link>
                      <nuxt-link
                        :to="{ path: `event/edit?id=${l.id}&slug=${l.slug}` }"
                        class="text-muted"
                        v-b-tooltip.hover
                        title="Ubah">
                        <i class="fa fa-edit"></i>
                      </nuxt-link>
                      <a
                        href="javascript:;"
                        v-on:click="deletes(l.id)"
                        class="text-muted"
                        v-b-tooltip.hover
                        title="Hapus">
                        <i class="fa fa-trash"></i>
                      </a>
                    </div>
                  </div>
                  <div class="title-event">
                    <p class="font-weight-bold limit-dotted text-gray mb-1">
                      {{ l.title }}
                    </p>
                  </div>
                  <div class="d-flex align-items-start">
                    <img
                      src="/assets/themes/lightred/images/dashboard/calendar.png"
                      class="mr-1"
                      alt/>
                    <p class="m-0 fs-13 text-gray">
                      {{ $moment(l.content.date.start_date).format('D MMMM YYYY') }}
                    </p>
                  </div>
                  <div class="d-flex align-items-start">
                    <img src="/assets/themes/lightred/images/dashboard/map.png" class="mr-1" alt />
                    <p class="m-0 fs-13 text-gray">
                      {{ l.content.location.address }}
                    </p>
                  </div>
                  <div class="d-flex align-items-end font-weight-bold pt-1 text-danger">
                    <span v-if="l.content.event_ticket_price > 0">
                      {{ l.content.event_ticket_price | price }}
                    </span>
                    <span v-else>
                      Gratis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center p-t-110" v-else>
            <div class="box-default m-auto text-center">
              <img
                src="/assets/themes/lightred/images/document.png"
                width="64"
                style="filter: grayscale(100%);"/>
              <h3 class="op-0-4 mt-2">"Tidak Ada Event"</h3>
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
      </div>
    </section>
  </div>
</template>

<script>
  import config from '~/config/config'
  import lib from '~/system/lib/Lib'
  
  export default {
    name: 'EventShow',
    data() {
      return {
        breadcrumb: [
          {
            text: 'Dashboard',
            href: '/dashboard'
          },
          {
            text: 'Event',
            href: '/dashboard/event'
          }
        ],
        process: {
          loading: false
        },
        params: {
          search: '',
          startDate: '',
          endDate: '',
          status: '',
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
      filter () {
        let filter = []
        filter.push({
          type: 'string',
          field: 'account_id',
          value: this.$store.state.auth.authUser.id,
          comparison: '='
        })

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

        if (this.$route.query.status !== undefined) {
          this.params.status = this.$route.query.status
          this.params.pagenum = 1
          filter.push({
            type: 'string',
            field: 'is_publish',
            value: this.params.status,
            comparison: '='
          })
        }

        if (this.$route.query.startDate !== undefined && this.$route.query.endDate !== undefined) {
          this.params.startDate = this.$route.query.startDate
          this.params.endDate = this.$route.query.endDate
          this.params.pagenum = 1
          filter.push({
            type: 'date',
            field: 'input_datetime',
            value: this.params.startDate + '::' + this.params.endDate,
            comparison: 'bet'
          })
        }
        
        return filter
      },
      pagenum () {
        return this.$route.query.page !== undefined ? this.$route.query.page:this.params.pagenum
      }
    },
    methods: {
      pagenums (page) {
        this.params.pagenum = page
        this.querys()
      },
      async querys () {
        await this.$router.replace({ 
          query: { 
            search: this.params.search,
            status: this.params.status,
            startDate: this.params.startDate,
            endDate: this.params.endDate,
            page: this.params.pagenum
          }
        }).catch(err => {})

        this.fetchData()
      },
      fetchData () {
        this.process.loading = true
        lib.ajax
          .fetch('GET', `${config.baseUrlApi}/member/content/list/by-type`, {
            type_id: 9,
            sort: 'input_datetime',
            dir: 'desc',
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
      },
      deletes (id) {
        if (confirm('Anda Yakin ingin menghapus Data ini ?')) {
          lib.ajax
            .fetch('POST', `${config.baseUrlApi}/member/content/delete`, {
              id: id
            })
            .then(response => {
              if (response.ok == 1) {
                this.fetchData()
                alert(response.message)
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