<template>
  <div>
    <div class="box-title fs-20 p-b-10">
      <span class="font-weight-bold text-muted">
        <img src="/assets/themes/lightred/images/subtitle_red.png" alt /> Usaha Saya
      </span>
    </div>
    <div class="box-dashboard-mitra" v-if="posts.length > 0">
      <b-card v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ path: `/mitra/${post.id}/${post.slug}`}">
          <b-media>
            <template v-slot:aside>
              <img v-bind:src="post.image[0]['original']" class="img-l-dashboard" />
            </template>
            <div class="row">
              <div class="col-lg-9 col-md-8">
                <span class="ft-gray dots-text">
                  <b>{{post.title}}</b>
                </span>
              </div>
              <div class="col-lg-9 col-md-8">
                <span class="ft-gray dots-text">{{post.content.content}}</span>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="label">
                  <div class="label-type danger text-center">{{post.category_title}}</div>
                </div>
              </div>
            </div>
          </b-media>
        </nuxt-link>
      </b-card>
      <nuxt-link
        to="/dashboard/profile/usaha"
        class="text-red-portal"
        style="text-decoration:none;"
      >
        <b-card>
          <div class="box-button-d-event m-auto text-center">Lihat Lainnya >></div>
        </b-card>
      </nuxt-link>
    </div>
    <div class="box-default pl-3" v-else>
      <h5 class="op-0-4 mt-2">"Tidak Ada Usaha"</h5>
    </div>
  </div>
</template>
<script>
import config from '~/config/config'
import lib from '~/system/lib/Lib'
export default {
  name: 'BlokMitra',
  data() {
    return {
      posts: []
    }
  },
  components: {},
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      let param = {
        type_id: 8,
        sort: 'input_datetime',
        dir: 'desc',
        limit: 4
      }

      param.filter = []
      param.filter.push({
        type: 'string',
        field: 'account_id',
        value: this.$store.state.auth.authUser.id,
        comparison: '='
      })

      lib.ajax
        .fetch('GET', `${config.baseUrlApi}/member/content/list/by-type`, param)
        .then(response => {
          this.posts = response.result.data
        })
        .catch(e => {})
    }
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>