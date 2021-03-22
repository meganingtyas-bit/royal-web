<template>
  <div>
    <section id="single-consultant">
      <b-container>
        <b-row>
          <div class="box-big-consultant">
            <div class="d-flex detail-loc fs-12 text-red-portal pl-3 mb-3">
              <nuxt-link to="/" class="text-gray-portal mx-1">Home</nuxt-link>>>
              <nuxt-link to="/news" class="text-gray-portal mx-1">Berita</nuxt-link>>>
              <nuxt-link
                to="#"
                class="text-gray-portal mx-1 font-weight-bold ft-lowper"
              >{{post.title}}</nuxt-link>
            </div>
            <div class="box-title-consultant">
              <div class="box-name-consultant">
                <h3 class="text-gray-portal">{{post.title}}</h3>
              </div>
              <div class="box-time">
                <!-- <img src="/assets/themes/lightred/images/star_color.png" alt />
                <img src="/assets/themes/lightred/images/star_color.png" alt />
                <img src="/assets/themes/lightred/images/star_color.png" alt />
                <img src="/assets/themes/lightred/images/star_color.png" alt />
                <img src="/assets/themes/lightred/images/star_color.png" alt />-->
                <span>Diterbitkan pada</span>
                <span class="text-red">{{ $moment(post.input_date ).format('LL') }}</span>
                <span>oleh</span>
                <span class="text-red">{{post.account_name}}</span>
              </div>
              <div class="badge-news mt-2">
                <b-badge variant="light" class="text-gray-portal">{{post.category_title}}</b-badge>
              </div>
            </div>
          </div>
          <div class="col-md-9 bg-single-news">
            <div class="card">
              <img :src="post.image[0]['original']" class="img-article-single" alt="..." />
              <div class="card-body">
                <div class="box-bg-radius">
                  <!-- <div class="detail-news">
                    <span class="card-title text-gray-portal">
                  Deskripsi-->
                  <!-- <div class="float-r icons">
                        <span class="mr-2">
                          <i class="fa fa-heart mr-1"></i>999
                        </span>
                        <span class="mr-2">
                          <i class="fa fa-comment mr-1"></i>999
                        </span>
                        <span class="mr-2">
                          <i class="fa fa-eye mr-1"></i>999
                        </span>
                  </div>-->
                  <!-- </span>
                  </div>-->
                  <div class="text-gray-portal fs-14 p-3" v-html="post.content.content"></div>
                </div>
              </div>
              <!-- <div class="box-share text-muted">
                <p>
                  Bagikan Ke :
                  <a href>
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href>
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href>
                    <i class="fa fa-instagram"></i>
                  </a>
                </p>
              </div>-->
              <!-- <div class="box-form-news">
                <form action>
                  <b-col sm="12" cols="20" class="p-0">
                    <label class="text-muted font-weight-bold" for>Tinggalkan Balasan</label>
                    <b-form-textarea
                      id="textarea-default"
                      placeholder="Masukan Pesan Anda"
                      cols="10"
                      rows="5"
                    ></b-form-textarea>
                  </b-col>
                  <div class="detail-news">
                    <button class="btn btn-portal btn-danger-lightred">KIRIM PESAN</button>
                  </div>
                </form>
              </div>-->
            </div>
          </div>
          <div class="col-md-3">
            <banner-public/>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SingleNews',
  data() {
    return {
      post: this.$parent.apiContent.result,
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Berita UMKM',
          href: '/news'
        },
        {
          text: '6 Prinsip Sanitasi Higienis Untuk Usaha Kuliner',
          href: '#'
        }
      ]
    }
  },

  components: {},
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>