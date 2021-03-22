<template>
  <div>
  	<section id='bg-dashboard'>
  		<b-container>
  			<b-row>
					<div class="col-lg-12 col-md-12"><BlokProfil /></div>
					<!-- <div class="col-lg-5"><BlokKoin /></div> -->
  			</b-row>
  		</b-container>
  	</section>
  	<!-- <section>
  		<b-container>
  			<b-row>
  				<BlokBerita />
  			</b-row>
  		</b-container>
  	</section> -->
  	<section id="bg-dashboard">
  		<b-container>
  			<b-row>
  				<div class="col-lg-7 col-md-12"><BlokMitra /></div>
					<div class="col-lg-5 col-md-12"><BlokEvent /></div>
  			</b-row>
  		</b-container>
  	</section>
  	<section id="bg-dashboard">
  		<b-container>
  			<b-row>
  				<div class="col-xl-6 col-lg-12 col-md-12"><BlokArtikel /></div>
					<div class="col-xl-6 col-lg-12 col-md-12"><BlokBerita /></div>
  			</b-row>
  		</b-container>
  	</section>
  </div>
</template>
<script>
import BlokProfil from './BlokProfil.vue'
import BlokKoin from './BlokKoin.vue'
import BlokBerita from './BlokBerita.vue'
import BlokArtikel from './BlokArtikel.vue'
import BlokEvent from './BlokEvent.vue'
import BlokMitra from './BlokMitra.vue'

// const BlokProfil = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokProfil.vue')
// const BlokKoin = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokKoin.vue')
// const BlokBerita = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokBerita.vue')
// const BlokArtikel = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokArtikel.vue')
// const BlokEvent = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokEvent.vue')
// const BlokLoker = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokLoker.vue')
// const BlokWorkshop = () =>
//   import('~/components/' + config.theme.dashboard + '/dashboard/BlokWorkshop.vue')

export default {
  name: 'DashboardShow',
  data() {
    return {}
  },
  components: {
  	BlokProfil,
  	BlokKoin,
  	BlokBerita,
  	BlokArtikel,
  	BlokEvent,
  	BlokMitra
  },
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>