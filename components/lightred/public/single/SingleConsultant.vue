<template>
  <div>
    <section id="single-consultant">
      <b-container>
        <b-row>
          <div class="box-big-consultant">
            <div class="d-flex detail-loc fs-12 text-red mb-3 pl-3">
              <nuxt-link to="/" class="text-gray-portal mx-1">Home</nuxt-link>>>
              <nuxt-link to="/consultant" class="text-gray-portal mx-1">Pendamping</nuxt-link>>>
              <nuxt-link
                to="#"
                class="text-gray-portal mx-1 font-weight-bold ft-capitalize"
              >{{post.title}}</nuxt-link>
            </div>
            <div class="box-title-consultant">
              <div class="box-name-consultant">
                <h3 class="text-gray-portal">{{post.title}}</h3>
              </div>
              <div class="box-time text-gray-portal">
                <!-- <img src="/assets/themes/lightred/images/star_color.png" alt="">
              <img src="/assets/themes/lightred/images/star_color.png" alt="">
              <img src="/assets/themes/lightred/images/star_color.png" alt="">
              <img src="/assets/themes/lightred/images/star_color.png" alt="">
                <img src="/assets/themes/lightred/images/star_color.png" alt="">-->
                <span>Dipublikasi pada</span>
                <span class="text-red-portal">{{ $moment(post.publish_datetime).format('LL') }}</span>
                <span>oleh</span>
                <span class="text-red-portal">{{post.title}}</span>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 bg-single">
            <!-- <b-card>
              <b-media>
                <template v-slot:aside>
                  <div class="box-cs">
                    <div class="label-premium">
                      <span>PRO</span>
                    </div>
                    <img src="/assets/themes/lightred/images/konsul2.png" class="w-100" />
                  </div>
                </template>
                <h5 class="mt-0 text-muted mb-2">Info Pendamping</h5>
                <div class="box-detail-consultant">
                  <p>Berbisnis itu harus berkelanjuta dan meluas. Berbisnis harus bermanfaat tidak saja bagi owner dan organisasi bisnisnya tetapi harus berkontribusi pada kesejahteraan dan kemaslahatan masyarakat. Utamanya masyarakat stakeholder yang menjadi bagian bisnis, baik secara geografis maupun strategis. Oleh karenanya, mari ciptakan bisnis yang mampu membuat orang lain berdaya untuk kehidupannya.</p>
            </div>-->
            <!-- <div class="button-consultant">
                  <button class="btn btn-portal btn-danger-lightred">KIRIM PESAN</button>
            </div>-->
            <!-- </b-media>
            </b-card>-->
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="box-cs">
                  <!-- <div class="label-premium">
                    <span>PRO</span>
                  </div>-->
                  <img :src=" post.account_image || post.account_image" class="img-consultant" />
                </div>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h5 class="mt-0 text-muted mb-2">Info Pendamping</h5>
                <div class="box-detail-consultant">
                  <p class="text-gray-portal" v-html="post.content.content">
                    <!-- Berbisnis itu harus berkelanjuta dan meluas. Berbisnis harus bermanfaat tidak saja bagi owner dan organisasi bisnisnya tetapi harus berkontribusi pada kesejahteraan dan kemaslahatan masyarakat. Utamanya masyarakat stakeholder yang menjadi bagian bisnis, baik secara geografis maupun strategis. Oleh karenanya, mari ciptakan bisnis yang mampu membuat orang lain berdaya untuk kehidupannya. -->
                  </p>
                </div>
                <!-- <div class="button-consultant">
                  <button class="btn btn-portal btn-danger-lightred">KIRIM PESAN</button>
                </div>-->
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <banner-public />
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SingleConsultant',

  data() {
    return {
      post: this.$parent.apiContent.result
    }
  },
  components: {},
  methods: {
    redir(url) {
      window.location = url
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>