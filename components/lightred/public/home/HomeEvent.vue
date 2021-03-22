<template>
  <div v-if="countPost > 0">
    <section id="event">
      <div
        class="bg-event"
        :style="{ backgroundImage: `url(${require('static/assets/themes/lightred/images/bg5.png')})` }"
      >
        <div class="container p-t-200 p-b-135">
          <div class="box-title-event m-auto text-center">
            <h1 class="text-white">
              <b>Event Terbaru</b>
            </h1>
            <div class="box-content-event text-white p-t-20 col-md-8 m-auto lh-2-0">
              <p>Berbagai macam direktori event Terbaik telah kami siapkan untuk meningkatkan dan memaksimalkan Usaha Anda</p>
            </div>
          </div>
          <div class="card-deck box-event p-t-50">
            <div class="m-auto p-b-40">
              <b-row>
                <!-- <b-col lg="3" md="6" sm="12"> -->
                <div class="card col-sm-12" v-for="(post, index) in setPost()" :key="index">
                  <div class="box-img-event">
                    <nuxt-link :to="{ path: `/event/${post.id}/${post.slug}`}">
                      <img :src="post.image[0].thumb" class="img-thumbnail" />
                    </nuxt-link>
                    <div class="label-event-red">
                      <span>{{post.content.location.province}}</span>
                    </div>
                  </div>
                  <div class="pl-3 pr-3">
                    <span
                      class="text-muted small fs-10 float-left"
                    >{{ $moment(post.content.date.start_date ).format('LL') }}</span>
                    <span
                      class="text-muted small fs-10 float-right"
                    >{{post.content.date.start_time}} - {{post.content.date.end_time}} WIB</span>
                  </div>
                  <div class="card-body">
                    <p class="card-text text-muted dots-text fs-14">{{post.title}}</p>
                  </div>
                  <div class="card-footer text-right">
                    <nuxt-link
                      :to="{ path: `/event/${post.id}/${post.slug}`}"
                      class="text-red-portal fs-14"
                    >Lihat detail >></nuxt-link>
                  </div>
                </div>
                <!-- </b-col> -->

                <!--                 
                <b-col lg="3" md="6" sm="12" class="p-0">
                  <div class="card">
                    <div class="box-img-event">
                      <img src="/assets/themes/lightred/images/mitra1.png" class="img-thumbnail" />
                      <div class="label-event-red">
                        <span>Yogyakarta</span>
                      </div>
                    </div>
                    <div class="pl-3 pr-3">
                      <span class="text-muted small fs-10 float-left">21 September 2019</span>
                      <span class="text-muted small fs-10 float-right">10.00 - 24.00 WIB</span>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-muted fs-14">Getting Ready For Digital & Big Data Era</p>
                    </div>
                    <div class="card-footer text-right">
                      <nuxt-link to="/event/single" class="text-red-portal fs-14">Lihat Lainnya >></nuxt-link>
                    </div>
                  </div>
                </b-col>
                <b-col lg="3" md="6" sm="12" class="p-0">
                  <div class="card">
                    <div class="box-img-event">
                      <img src="/assets/themes/lightred/images/mitra1.png" class="img-thumbnail" />
                      <div class="label-event-red">
                        <span>Yogyakarta</span>
                      </div>
                    </div>
                    <div class="pl-3 pr-3">
                      <span class="text-muted small fs-10 float-left">21 September 2019</span>
                      <span class="text-muted small fs-10 float-right">10.00 - 24.00 WIB</span>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-muted fs-14">Getting Ready For Digital & Big Data Era</p>
                    </div>
                    <div class="card-footer text-right">
                      <nuxt-link to="/event/single" class="text-red-portal fs-14">Lihat Lainnya >></nuxt-link>
                    </div>
                  </div>
                </b-col>
                <b-col lg="3" md="6" sm="12" class="p-0">
                  <div class="card">
                    <div class="box-img-event">
                      <img src="/assets/themes/lightred/images/mitra1.png" class="img-thumbnail" />
                      <div class="label-event-red">
                        <span>Yogyakarta</span>
                      </div>
                    </div>
                    <div class="pl-3 pr-3">
                      <span class="text-muted small fs-10 float-left">21 September 2019</span>
                      <span class="text-muted small fs-10 float-right">10.00 - 24.00 WIB</span>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-muted fs-14">Getting Ready For Digital & Big Data Era</p>
                    </div>
                    <div class="card-footer text-right">
                      <nuxt-link to="/event/single" class="text-red-portal fs-14">Lihat Lainnya >></nuxt-link>
                    </div>
                  </div>
                </b-col>-->
              </b-row>
            </div>
            <div class="col-lg-12">
              <div class="button-event m-auto text-center">
                <nuxt-link to="/event" class="btn btn-white-lightred btn-portal">Lihat Lainnya >></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import backgroundEvent from '/assets/themes/lightred/images/bg5.png'
export default {
  name: 'HomeEvent',

  data() {
    return {
      // posts: this.setPost()
      // backgroundEvent
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
        return v.id == 9
      })
      this.countPost = post[0]['content']['count']
      return post[0]['content']['data']
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>