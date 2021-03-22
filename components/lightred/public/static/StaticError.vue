<template>
  <div>
    <section class="error">
      <div
        class="bg-soon"
        :style="{ backgroundImage: 'url(/assets/themes/lightred/images/bg-404.png)' }"
      >
        <div class="container">
          <div class="box-coming-soon">
            <div class="row">
              <div class="col-md-8">
                <div class="box-soon">
                  <div class="box-muted text-center text-muted">
                    <p class="font-big-medium">NOT FOUND</p>
                  </div>
                  <p class="font-big text-red text-center">
                    <b>404</b>
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="/assets/themes/lightred/images/img-404.png" class="w-100" />
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