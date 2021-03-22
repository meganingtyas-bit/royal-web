<template>
  <div>
    <div class="mainFooter">
      <div class="container">
        <b-row class="align-items-center">
          <div class="col-md-8">
            <div class="pb-2">
              <img src="/assets/themes/lightred/images/logo.png" class="img-fluid" alt />
            </div>
            <div
              class="pr-lg-5 fs-12"
            >Coffee Royal community adalah Sebuah aplikasi yang dirancang khusus untuk menjadi sebuah tempat bagi seluruh pelaku bisnis dan profesi yang bergerak pada bidang industri kopi untuk saling terhubung , berdikusi dan berkolaborasi. Menjadikan aplikasi ini sebagai sebuah sarana dimana, siapa pun yang berkecimpung dalam industri kopi ini dapat bergabung. Aplikasi yang nyaman dan menyenangkan untuk berbagi ide creative , bercerita dan berdiskusi. Memperluas jaringan dan informasi , tentang perkembang dan update – update terbaru dalam industri kopi.</div>
            <div class="pt-4 pb-5">
              <span>SOCIAL MEDIA :</span>
              <a href="https://royalcommunity.id" target="__blank">
                <img src="/assets/themes/lightred/images/facebook_icn.svg" class="px-3" alt />
              </a>
              <a href="https://royalcommunity.id" target="__blank">
                <img src="/assets/themes/lightred/images/twitter_icn.svg" class="px-3" alt />
              </a>
              <a href="https://royalcommunity.id" target="__blank">
                <img src="/assets/themes/lightred/images/instagram_icn.svg" class="px-3" alt />
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <h6>KANTOR SEKRETARIAT</h6>
            <div class="d-flex my-2 fs-12">
              <div>
                <img src="assets/themes/lightred/images/telephone.png" class="mr-2" alt />
              </div>0274-8000022
            </div>
            <div class="d-flex my-2 fs-12">
              <div>
                <img src="assets/themes/lightred/images/envelope.png" class="mr-2" width="18" alt />
              </div>sekretariat@royalcommunity.id
            </div>
            <div class="d-flex my-2 fs-12">
              <div>
                <img
                  src="assets/themes/lightred/images/placeholder.png"
                  class="mr-2"
                  width="18"
                  alt
                />
              </div>
              <div>
                <div>GENESIS SVARGALOKA</div>
                <div>Jl. Ahmad Wahid, Kalangan, Baturetno, Banguntapan, Bantul, Yogyakarta, Indonesia 55197</div>
              </div>
            </div>
          </div>
        </b-row>

        <b-row class="justify-content-center">
          <div class="d-inline-flex justify-content-center pt-4">
            <nuxt-link to="/" class="px-3 my-2 text-white border-right-white">BERANDA</nuxt-link>
            <!-- <nuxt-link to="/tentang-kami" class="px-3 my-2 text-white border-right-white">TENTANG KAMI</nuxt-link> -->
            <nuxt-link to="/visi-misi" class="px-3 my-2 text-white border-right-white">VISI & MISI</nuxt-link>
            <nuxt-link to="/kontak" class="px-3 my-2 text-white">KONTAK</nuxt-link>
            <!-- <nuxt-link to="/faq" class="px-3 my-2 text-white">BANTUAN</nuxt-link> -->
          </div>
        </b-row>
      </div>
    </div>
    <div class="text-center bg-32 text-white py-3 fs-13">
      <Copyright />
    </div>
  </div>
</template>

<script>
import Copyright from '~/components/lightred/public/Copyright.vue'
export default {
  name: 'Footer',
  data() {
    return {}
  },
  components: {
    Copyright
  }
}
</script>

<style>
.d-inline-flex {
  flex-wrap: wrap;
}
</style>