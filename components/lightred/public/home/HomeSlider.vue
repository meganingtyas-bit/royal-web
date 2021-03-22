<template>
  <div v-if="countPost > 0">
    <section id="slider">
      <div class="slider">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          nav="false"
          indicators
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <div v-for="(item, index) in setPost()" :key="index">
            <b-carousel-slide :img-src="item.content.image">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-10 col-sm-12 pl-0 pd-l">
                    <h1 class="font-weight-bold">{{ item.content.name }}</h1>
                    <div class="content-slider fs-18 lh-2-2">
                      <span>{{ item.content.description }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-carousel-slide>
          </div>
        </b-carousel>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeSlider',
  mounted() {
    this.setPost()
  },
  data() {
    return {
      countPost: 0,
      slide: 0,
      sliding: null,
      contentpost: this.$store.state.content.post
    }
  },
  components: {},
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    setPost() {
      let post
      post = this.contentpost.filter(v => {
        return v.id == 13
      })
      this.countPost = post[0]['content']['count']
      return post[0]['content']['data']
    }
  },
  props: {},
  computed: {}
}
</script>
<style></style>
