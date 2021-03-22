<template>
  <div>
    <div class="event-banner">
      <img :src="randBanner()" alt class="img-banner mb-2 img-fluid" />
      <img :src="randBanner()" alt class="img-banner mb-2 img-fluid" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerPublic',
  layout(e) {
    return ''
  },
  head() {
    return ''
  },
  data() {
    return {
      dataBanner: [
        '/assets/themes/lightred/images/banner/1.png',
        '/assets/themes/lightred/images/banner/2.png'
        // '/assets/themes/lightred/images/banner/3.png',
        // '/assets/themes/lightred/images/banner/4.png',
        // '/assets/themes/lightred/images/banner/5.png',
        // '/assets/themes/lightred/images/banner/6.png',
        // '/assets/themes/lightred/images/banner/7.png'
      ]
    }
  },
  components: {},
  methods: {
    randBanner() {
      var randomAnswer = this.dataBanner[
        Math.floor(Math.random() * this.dataBanner.length)
      ]
      return randomAnswer
    }
  }
}
</script>