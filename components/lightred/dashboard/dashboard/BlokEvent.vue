<template>
  <div>
    <div class="box-title fs-20 p-b-10">
      <span class="font-weight-bold text-muted">
        <img src="/assets/themes/lightred/images/subtitle_red.png" alt /> Event
      </span>
    </div>
    <div class="box-dashboard-event" v-if="posts.length > 0">
      <div class="card mb-2" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ path: `/event/${post.id}/${post.slug}`}">
          <img v-bind:src="post.image[0].original" class="img-list-event" />
          <div class="box-overlay-event">
            <div class="row">
              <!-- <div class=""> -->
              <div class="box-event-date fs-12">
                <p class="text-red mb-0">{{ $moment(post.content.date.start_date).format('MMM') }}</p>
                <p class="text-muted mb-0">{{ $moment(post.content.date.start_date).format('D') }}</p>
                <p class="text-muted">{{ $moment(post.content.date.start_date).format('YYYY') }}</p>
              </div>
              <!-- </div> -->
              <div class>
                <div class="box-title-event fs-12 dots-text position-absolute text-black-portal">
                  <b>{{post.title}}</b>
                </div>
                <div class="box-event-time text-black-portal mt-5">
                  <span
                    class="fs-12"
                  >{{ post.content.date.start_time }} - {{ post.content.date.end_time }} WIB</span>
                </div>
                <!-- <div class="box-time">
					              <img src="/assets/themes/lightred/images/star_color.png" alt />
					              <img src="/assets/themes/lightred/images/star_color.png" alt />
					              <img src="/assets/themes/lightred/images/star_color.png" alt />
					              <img src="/assets/themes/lightred/images/star_color.png" alt />
					              <img src="/assets/themes/lightred/images/star_color.png" alt />
					              <div class="text-right">
					              	<span><i class="fa fa-heart text-red"></i>99</span>
					              	<span><i class="fa fa-comment text-muted"></i>99</span>
					              </div>
                </div>-->
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <!-- <div class="card mb-2">	
				<img src="/assets/themes/lightred/images/dashboard/event1.png" class="img-list-event">
		        <div class="box-overlay-event">
		        	<div class="row">
			        	
				          <div class="box-event-date fs-12">
				          	<p class="text-red mb-0">SEP</p>
				          	<p class="text-muted mb-0">22</p>
				          	<p class="text-muted">2019</p>
				          </div>
				       
						<div class="">
							<div class="box-title-event fs-12 dots-text position-absolute">
				          		6 Prinsip Sanitasi Higienis Untuk Usaha Kuliner	
							</div>
							<div class="box-event-time mt-5">
					          	<span class="fs-12">10.00 -24.00 WIB</span>
					        </div>
							<div class="box-time">
				              <img src="/assets/themes/lightred/images/star_color.png" alt />
				              <img src="/assets/themes/lightred/images/star_color.png" alt />
				              <img src="/assets/themes/lightred/images/star_color.png" alt />
				              <img src="/assets/themes/lightred/images/star_color.png" alt />
				              <img src="/assets/themes/lightred/images/star_color.png" alt />
				              <div class="text-right">
				              	<span><i class="fa fa-heart text-red"></i>99</span>
				              	<span><i class="fa fa-comment text-muted"></i>99</span>
				              </div>
							</div>
				        </div>
			        </div>                    
		        </div>
      </div>-->
      <nuxt-link to="/dashboard/event" class="text-red-portal" style="text-decoration:none;">
        <b-card class="box-event-shadow">
          <div class="box-button-d-event m-auto text-center">Lihat Lainnya >></div>
        </b-card>
      </nuxt-link>
    </div>
    <div class="box-default pl-3" v-else>
      <h5 class="op-0-4 mt-2">"Tidak Ada Event"</h5>
    </div>
  </div>
</template>
<script>
import config from '~/config/config'
import lib from '~/system/lib/Lib'

export default {
  name: 'BlokEvent',
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
        type_id: 9,
        sort: 'input_datetime',
        dir: 'desc',
        limit: 3
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