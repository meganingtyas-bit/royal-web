<template>
  <div v-if="countPost > 0">
    <section id="article">
      <b-container>
        <b-row>
          <div class="col-md-6">
            <div class="box-title fs-18 text-red-portal p-b-10">
              <span class="font-weight-bold">
                <img src="/assets/themes/lightred/images/subtitle_red.png" alt /> BERITA TERBARU
              </span>
            </div>
            <div class="box-title-event m-auto text-left">
              <h1 class="text-gray-portal lh-1-5 p-b-10">
                <b>Berita Terbaru Coffee Royal Community</b>
              </h1>
              <div class="box-content-event m-auto text-gray-portal lh-2-0">
                <p>Beraneka ragam berita terbaru akan terus kami hadirkan guna memaksimalkan usaha Anda secara uptodate</p>
              </div>
            </div>
            <div class="button-article m-auto p-t-20 d-dsp">
              <nuxt-link to="/news" class="btn btn-portal btn-danger-lightred">Lihat Lainnya >></nuxt-link>
            </div>
          </div>
          <div class="col-md-6 box-article">
            <div class="row">
              <b-col md="12" sm="12" class="p-0">
                <div class="card">
                  <div class="label-portal-red">
                    <span>
                      <nuxt-link
                        :to="{ path: `/news/category/${setPost()[0].category_slug}`}"
                      >{{setPost()[0].category_title}}</nuxt-link>
                    </span>
                  </div>
                  <!-- <nuxt-link :to="{ path: `/news/${setPost()[0].id}/${setPost()[0].slug}`}"> -->
                  <img :src="setPost()[0]['image'][0]['original']" class="img-thumbnail w-100" />
                  <div class="box-overlay">
                    <span class="text-gray-portal dots-text fs-14">
                      <b>{{setPost()[0].title}}</b>
                    </span>
                  </div>
                  <div class="middle m-auto text-center">
                    <p class="text-gray-portal dots-text fs-14 mb-2">
                      <b>{{setPost()[0].title}}</b>
                    </p>
                    <nuxt-link
                      :to="{ path: `news/${setPost()[0].id}/${setPost()[0].slug}`}"
                      class="btn btn-sm-portal btn-danger-lightred"
                    >Detail</nuxt-link>
                  </div>
                  <!-- </nuxt-link> -->
                </div>
              </b-col>

              <b-col v-for="(val, index) in setPost2()" :key="index" md="6" sm="12" class="p-0">
                <div class="card" :class="`post-${val.id}`">
                  <div class="label-portal-red">
                    <span>
                      <nuxt-link
                        :to="{ path: `news/category/${val.category_slug}`}"
                      >{{val.category_title}}</nuxt-link>
                    </span>
                  </div>
                  <!-- <nuxt-link :to="{ path: `news/${val.id}/${val.slug}`}"> -->
                  <img :src="val['image'][0]['original']" class="img-thumbnail w-100" />
                  <div class="box-overlay">
                    <span class="text-gray-portal dots-text fs-12">
                      <b>{{val.title}}</b>
                    </span>
                  </div>
                  <div class="middle m-auto text-center">
                    <p class="text-gray-portal dots-text fs-12 mb-2">
                      <b>{{val.title}}</b>
                    </p>
                    <nuxt-link
                      :to="{ path: `news/${val.id}/${val.slug}`}"
                      class="btn btn-sm-portal btn-danger-lightred"
                    >Detail</nuxt-link>
                  </div>
                  <!-- </nuxt-link> -->
                </div>
              </b-col>
              <div class="button-article m-auto p-t-20 tablet">
                <nuxt-link to="/news" class="btn btn-portal btn-danger-lightred">Lihat Lainnya >></nuxt-link>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeNews',

  data() {
    return {
      // posts: this.setPost(),
      // posts2: this.setPost2()
      countPost: 0,
      contentpost: this.$store.state.content.post
    }
  },
  components: {},
  mounted() {
    this.setPost()
  },
  methods: {
    setPost() {
      let post
      post = this.contentpost.filter(v => {
        return v.id == 12
      })
      this.countPost = post[0]['content']['count']
      return post[0]['content']['data']
    },
    setPost2() {
      let post
      post = this.contentpost.filter(v => {
        return v.id == 12
      })

      let newData = []
      post[0]['content']['data'].forEach((v, i) => {
        if (i != 0) {
          newData.push(v)
        }
      })
      return newData
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>