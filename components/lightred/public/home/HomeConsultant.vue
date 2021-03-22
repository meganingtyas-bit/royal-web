<template>
  <div v-if="countPost > 0">
    <section id="consultant">
      <b-container>
        <b-row>
          <div class="col-md-6">
            <div class="box-title fs-18 text-red-portal p-b-10">
              <span class="font-weight-bold">
                <img src="/assets/themes/lightred/images/subtitle_red.png" alt />
                CHAMPION
              </span>
            </div>
            <div class="box-title-event m-auto text-left">
              <h1 class="text-gray-portal lh-1-0 p-b-25">
                <b>Champion Terbaik</b>
              </h1>
              <div class="box-content-event m-auto text-gray-portal lh-1-8 p-b-45">
                <p>Telah kami siapkan para Champion usaha Terbaik dan Berpengalaman yang siap untuk membantu Anda di dalam memaksimalkan Usaha Anda</p>
              </div>
              <div class="button-consultant">
                <nuxt-link
                  to="/consultant"
                  class="btn btn-portal btn-danger-lightred"
                >Lihat Lainnya >></nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 box-carousel-pendamping">
            <carousel
              id="carousel-pendamping"
              :perPageCustom="[
                [320, 1],
                [375, 1],
                [425, 1],
                [768, 1],
                [1024, 2]
              ]"
              :mouse-drag="true"
            >
              <slide v-for="(post, index) in contentpost" :key="index">
                <div class="card">
                  <nuxt-link :to="{ path: `/consultant/${post.id}/${post.slug}` }">
                    <img :src="post.account_image" class="img-consultant" />
                  </nuxt-link>
                  <div class="box-overlay text-center">
                    <h6 class="text-red-portal m-b-0">{{ post.title }}</h6>
                    <b-card-text>
                      <span class="small text-muted">
                        {{
                        post.title.description
                        }}
                      </span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">{{ post.title }}</h6>
                    <b-card-text>
                      <span class="small text-muted">
                        {{
                        post.title.description
                        }}
                      </span>
                    </b-card-text>
                    <nuxt-link
                      :to="{ path: `/consultant/${post.id}/${post.slug}` }"
                      class="btn btn-danger-lightred btn-md-portal"
                    >Lihat Profil</nuxt-link>
                  </div>
                </div>
              </slide>

              <!-- <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/konsul2.png" class />
                  <div class="box-overlay text-center">
                    <h6 class="text-red-portal m-b-0">W. HENIWATI</h6>
                    <b-card-text>
                      <span class="small text-muted">Strategi Sosial Entreupeneurship</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">W. HENIWATI</h6>
                    <b-card-text>
                      <span class="small text-muted">Strategi Sosial Entreupeneurship</span>
                    </b-card-text>
                    <nuxt-link
                      to="/consultant/single"
                      class="btn btn-danger-lightred btn-md-portal"
                    >Lihat Profile</nuxt-link>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/konsul2.png" class />
                  <div class="box-overlay text-center">
                    <h6 class="text-red-portal m-b-0">W. HENIWATI</h6>
                    <b-card-text>
                      <span class="small text-muted">Strategi Sosial Entreupeneurship</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">W. HENIWATI</h6>
                    <b-card-text>
                      <span class="small text-muted">Strategi Sosial Entreupeneurship</span>
                    </b-card-text>
                    <nuxt-link
                      to="/consultant/single"
                      class="btn btn-danger-lightred btn-md-portal"
                    >Lihat Profile</nuxt-link>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/konsul3.png" class />
                  <div class="box-overlay text-center">
                    <h6 class="text-red-portal m-b-0">Les Privat</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">DHE STUDIO</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                    <nuxt-link
                      to="/consultant/single"
                      class="btn btn-danger-lightred btn-md-portal"
                    >Lihat Profile</nuxt-link>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/konsul1.png" class />
                  <div class="box-overlay text-center">
                    <h6 class="text-red-portal m-b-0">Les Privat</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                  </div>
                  <div class="middle m-auto text-center">
                    <h6 class="text-red-portal">DHE STUDIO</h6>
                    <b-card-text>
                      <span class="small text-muted">Dhe Studio English And Computer</span>
                    </b-card-text>
                    <nuxt-link
                      to="/consultant/single"
                      class="btn btn-danger-lightred btn-md-portal"
                    >Lihat Profile</nuxt-link>
                  </div>
                </div>
              </slide>-->
            </carousel>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeConsultant',

  data() {
    return {
      countPost: 0,
      contentpost: []
    }
  },
  components: {},
  mounted() {
    this.setPost()
  },
  methods: {
    setPost() {
      let post
      post = this.$store.state.content.post.filter(v => {
        return v.id == 14
      })

      this.countPost = post[0]['content']['count']
      this.contentpost = post[0]['content']['data']
    }
  },
  props: {},
  computed: {}
}
</script>
<style></style>
