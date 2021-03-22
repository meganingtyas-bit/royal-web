<template>
  <div v-if="countPost > 0">
    <section id="mitra">
      <div class="container">
        <div class="box-mitra">
          <!-- <div class="box-content-mitra" style="padding-top: 0px;">
              <b-row class="text-content">
                <div class="button- m-auto text-center"
                  v-for="(l, index) in product"
                  :key="index"
                  @click="changeCategory(l.id, l.to)">
                  <div class="btn btn-portal"
                    :class="params.id === l.id ? 'btn-danger-lightred' : 'btn-outline-danger'">
                    {{ l.title }}
                  </div>
                </div>
                <div class="button- m-auto text-center" style="padding-top: 50px;">
                  <b-input-group>
                    <b-form-input
                      placeholder="Masukkan kata kunci umkm yang dicari"
                      v-model="params.search">
                    </b-form-input>
                    <template v-slot:append>
                      <select class="event-ss custom-select"
                        v-model="params.category">
                        <option value="">
                          Semua Kategori
                        </option>
                        <option 
                          v-for="(l, index) in categories" 
                          :key="index"
                          :value="l.id">
                          {{ l.title }}
                        </option>
                      </select>
                      <b-button variant="outline-secondary" 
                        class="button-red ctm-group-btn"
                        :to="`${params.url}?search=${params.search}&category=${params.category}&province=&page=1`">
                        <img src="/assets/themes/lightred/images/search.svg" class="mr-2" />
                        Cari
                      </b-button>
                    </template>
                  </b-input-group>
                </div>
              </b-row>
          </div>-->

          <div class="box-title-big text-center">
            <h1 class="text-gray-portal">Mitra Coffee Royal community</h1>
          </div>
          <div class="box-content-mitra">
            <b-row class="text-center">
              <b-col v-for="(post,index) in setPost()" :key="index" lg="4" md="4" sm="12">
                <div class="card">
                  <div class="label-portal-red">
                    <span>{{post.content.province}}</span>
                  </div>
                  <img :src="post.content.image" class="img-list-mitra" />
                  <div class="box-overlay">
                    <span class="text-gray-portal fs-14 m-b-0">
                      <b>{{post.title}}</b>
                    </span>
                    <b-card-text>
                      <div class="small text-muted mitra-dotted">{{post.category_title}}</div>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <span class="text-gray-portal fs-14 m-b-0">
                      <b>{{post.title}}</b>
                    </span>
                    <b-card-text>
                      <div class="small text-muted mitra-dotted">{{post.category_title}}</div>
                    </b-card-text>
                    <nuxt-link
                      :to="{ path: `/mitra/${post.id}/${post.slug}`}"
                      class="btn btn-sm-portal btn-danger-lightred"
                    >Detail</nuxt-link>
                  </div>
                </div>
              </b-col>
              <!-- <b-col lg="4" md="4" sm="12">
                <div class="card">
                  <div class="label-portal-red">
                    <span>Peternakan</span>
                  </div>
                  <img src="/assets/themes/lightred/images/mitra2.png" class="img-thumbnail" />
                  <div class="box-overlay">
                    <h6 class="text-red-portal m-b-0">Ayam Karkas</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">Peternakan</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                    <nuxt-link
                      to="/mitra/single"
                      class="btn btn-sm-portal btn-danger-lightred"
                    >Detail</nuxt-link>
                  </div>
                </div>
              </b-col>
              <b-col lg="4" md="4" sm="12">
                <div class="card">
                  <div class="label-portal-red">
                    <span>Fashion</span>
                  </div>
                  <img src="/assets/themes/lightred/images/mitra3.png" class="img-thumbnail" />
                  <div class="box-overlay">
                    <h6 class="text-red-portal m-b-0">Bajuku</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">Fashion</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                    <nuxt-link
                      to="/mitra/single"
                      class="btn btn-sm-portal btn-danger-lightred"
                    >Detail</nuxt-link>
                  </div>
                </div>
              </b-col>-->
            </b-row>
          </div>
          <div class="button- m-auto text-center">
            <nuxt-link to="/mitra" class="btn btn-portal btn-danger-lightred">Lihat Lainnya >></nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeMitra',
  data() {
    return {
      countPost: 0,
      contentpost: this.$store.state.content.post,
      params: {
        id: 1,
        url: '/mitra',
        search: '',
        category: ''
      },
      product: [
        {
          id: 1,
          title: 'Mitra',
          to: '/mitra'
        },
        {
          id: 2,
          title: 'Event',
          to: '/event'
        },
        {
          id: 3,
          title: 'Artikel',
          to: '/article'
        },
        {
          id: 5,
          title: 'Berita',
          to: '/news'
        }
      ]
    }
  },
  components: {},
  mounted() {
    this.fetchData()
    this.setPost()
  },
  methods: {
    setPost() {
      let post
      post = this.contentpost.filter(v => {
        return v.id == 8
      })
      this.countPost = post[0]['content']['count']
      return post[0]['content']['data']
    },
    changeCategory(id, url) {
      this.params.id = id
      this.params.url = url
      this.fetchData()
    },
    fetchData() {
      this.$store.dispatch('category/GET_CATEGORY', {
        type_id: this.params.id,
        limit: 20
      })
    }
  },
  props: {},
  computed: {
    categories() {
      return this.$store.state.category.categories
    }
  }
}
</script>
<style>
</style>