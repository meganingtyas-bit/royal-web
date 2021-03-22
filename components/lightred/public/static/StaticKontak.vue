<template>
  <div>
    <section id="kontak">
      <div
        class="bg-kontak"
        :style="{ backgroundImage: `url(${require('static/assets/themes/lightred/images/kontak_bg.png')})` }"
      >
        <b-container>
          <b-row>
            <div class="col-md-5 col-sm-12">
              <div class="box-title fs-18 text-red p-b-10">
                <span class="font-weight-bold text-red">
                  <img src="/assets/themes/lightred/images/subtitle_red.png" alt /> KONTAK
                </span>
              </div>
              <div class="box-title-event m-auto text-left">
                <h1 class="text-gray lh-1-0 p-b-25">
                  <b>Hubungi Kami</b>
                </h1>
                <div class="box-content-event m-auto fs-18 lh-1-8 p-b-45">
                  <p>Kami sangat mengapresiasi akan kebutuhan Anda. Beritahu kami mengenai bisnis dan keperluan Anda kepada kami.</p>
                </div>
                <div class="box-service">
                  <b-media class="mb-2">
                    <template v-slot:aside>
                      <img src="/assets/themes/lightred/images/phone.png" class="d-block" />
                    </template>
                    <p class="mb-0">0274-8000022</p>
                  </b-media>
                  <b-media class="mb-2">
                    <template v-slot:aside>
                      <i class="fa fa-envelope text-black-portal fs-24"></i>
                    </template>
                    <p class="mb-0">sekretariat@royalcommunity.id</p>
                  </b-media>
                  <b-media class="mb-2">
                    <template v-slot:aside>
                      <img src="/assets/themes/lightred/images/location.png" class="d-block" />
                    </template>
                    <p class="font-weight-bold mb-0">Genesis Svargaloka</p>
                    <p
                      class="mb-0"
                    >Jl.Ahmad Wahid, Baturetno, Banguntapan, Bantul, Yogyakarta, Indonesia 55197</p>
                  </b-media>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12">
              <img src="/assets/themes/lightred/images/mapnya.png" class="img-map d-block" />
              <!-- <div class="box-kirim-kontak">
                <div class="title-contact text-center">
                  <h3 class="text-red">KIRIM PESAN</h3>
                </div>
                <div class="box-form-contact col-md-12">
                  <form action>
                    <div class="form-inline">
                      <div class="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          class="form-control form-name fs-14 br-25"
                          placeholder="Nama"
                        />
                      </div>
                      <div class="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          class="form-control form-phone fs-14 br-25"
                          placeholder="No. Telepon"
                        />
                      </div>
                    </div>
                    <div class="form-inline">
                      <div class="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          class="form-control form-shop fs-14 br-25"
                          placeholder="Nama Usaha"
                        />
                      </div>
                      <div class="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          class="form-control form-email fs-14 br-25"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <b-col sm="12" cols="20">
                      <b-form-textarea
                        id="textarea-default"
                        placeholder="Masukan Pesan Anda"
                        cols="10"
                        rows="5"
                      ></b-form-textarea>
                    </b-col>
                    <div class="button- m-auto p-t-20 text-center">
                      <button class="btn btn-portal btn-danger-lightred">KIRIM PESAN</button>
                    </div>
                  </form>
                </div>
              </div>-->
            </div>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'StaticKontak',

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