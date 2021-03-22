<template>
  <div v-if="countPost > 0">
    <section id="category">
      <div class="button-down m-auto text-center">
        <a href="#sub-bidang">
          <img src="/assets/themes/lightred/images/arrow_cr.png" alt />
        </a>
      </div>
      <div
        class="bg-bidang"
        :style="{ backgroundImage: `url(${require('static/assets/themes/lightred/images/bg2.png')})` }"
      >
        <!-- <img src="/assets/themes/lightred/images/bg_5.png" alt=""> -->
        <div class="container">
          <div id="sub-bidang" class="box-content">
            <div class="box-title fs-18 text-white p-b-10">
              <span>
                <img src="/assets/themes/lightred/images/subtitle.png" alt /> KATEGORI
              </span>
            </div>
            <div class="box-title-big text-white row">
              <div class="col-lg-6 col-md-12">
                <h1>BIDANG USAHA UMKM</h1>
              </div>
              <div class="col-lg-6 col-md-12 box-btn-umkm">
                <div class="text-right box-umkm">
                  <button type="button" class="btn btn-white-lightred btn-portal">Lihat Lainnya >></button>
                </div>
              </div>
            </div>
            <div class="box-carousel-bidang card-deck m-auto">
              <div class="row">
                <carousel
                  id="carousel-bidang"
                  :perPageCustom="[[320, 1],[375, 1],[768, 3], [1024, 4]]"
                  :mouse-drag="true"
                >
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_1.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">EVENT</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">EVENT</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_2.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">FASHION</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">FASHION</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_3.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">JASA</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">JASA</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_4.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">KERAJINAN</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">KERAJINAN</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_2.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">FASHION</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">FASHION</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="card">
                      <img src="/assets/themes/lightred/images/bidang_1.png" class="img-thumbnail" />
                      <div class="box-overlay">
                        <h6 class="text-red font-weight-bold">EVENT</h6>
                      </div>
                      <div class="middle m-auto text-center">
                        <h6 class="text-red font-weight-bold">EVENT</h6>
                        <button
                          type="button"
                          class="btn btn-md-portal btn-danger-lightred"
                        >Lihat Semua</button>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeCategoryUmkm',
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