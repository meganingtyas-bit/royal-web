<template>
  <div v-if="countPost > 0">
    <section id="partner">
      <b-container>
        <b-row>
          <div class="col-md-12 m-auto">
            <div class="box-title-big text-center font-weight-bold">
              <h1 class="text-gray-portal">
                <b>Partner Kami</b>
              </h1>
            </div>
          </div>
          <div class="col-md-12 m-auto">
            <carousel
              id="carousel-partner"
              :perPageCustom="[[320, 1],[375, 1],[768, 3], [1024, 4]]"
              :mouse-drag="true"
            >
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/ibcf.jpg" class="mt-5" />
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/dashboard/patner2.png" class />
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/dashboard/patner3.png" class />
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/dashboard/patner4.png" class />
                </div>
              </slide>
              <slide>
                <div class="card">
                  <img src="/assets/themes/lightred/images/dashboard/patner4.png" class />
                </div>
              </slide>
            </carousel>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomePartner',
  mounted() {},
  data() {
    return {
      countPost: 0
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