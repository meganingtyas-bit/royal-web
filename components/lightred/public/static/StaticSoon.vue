<template>
  <div>
    <section class="soon">
      <div
        class="bg-soon"
        :style="{ backgroundImage: 'url(/assets/themes/lightred/images/Comingsun.png)' }"
      >
        <div class="container">
          <div class="box-coming-soon">
            <div class="img-soon p-b-50">
              <!-- <nuxt-link to="/">
                <img src="/assets/themes/lightred/images/logo_color.png" alt />
              </nuxt-link> -->
            </div>
            <div class="box-soon">
              <div class="box-muted text-center text-muted">
                <p class="font-big-medium">COMING</p>
              </div>
              <p class="font-big text-red text-center">
                <b>SOON</b>
              </p>
            </div>
            <div class="box-follow text-muted">
              <span>
                <span class="small mr-3">FOLLOW US</span>
                <a href class="text-muted">
                  <i class="fa fa-facebook mr-2"></i>
                </a>
                <a href class="text-muted">
                  <i class="fa fa-twitter mr-2"></i>
                </a>
                <a href class="text-muted">
                  <i class="fa fa-instagram mr-2"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'StaticSoon',

  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>