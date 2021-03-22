<template>
	<div>
		<section id="detail-event" style="background:#fff;">
			<b-container>
				<div class="d-flex detail-loc fs-12 text-red mb-3">
					<nuxt-link to="/" class="text-gray-portal mx-1">Home</nuxt-link>
					>>
					<nuxt-link to="/mitra" class="text-gray-portal mx-1">Mitra Coffee</nuxt-link>
					>>
					<nuxt-link to="#" class="text-gray-portal mx-1 font-weight-bold ft-capitalize">{{post.title}}</nuxt-link>
				</div>
				<h3 class="text-gray-portal ft-weight-bold ml-1">{{post.title}}</h3>
				<div class="d-flex flex-wrap align-items-center ml-1">
					<!-- <div class="mb-2 mr-2">
						<img src="/assets/themes/lightred/images/star.svg" width="19" alt="">
						<img src="/assets/themes/lightred/images/star.svg" width="19" alt="">
						<img src="/assets/themes/lightred/images/star.svg" width="19" alt="">
						<img src="/assets/themes/lightred/images/star.svg" width="19" alt="">
						<img src="/assets/themes/lightred/images/star.svg" width="19" alt="">
					</div> -->
					<div class="fs-12 mb-2 text-gray-portal">Dimodifikasi terakhir pada 
						<span class="text-red-portal">{{ $moment(post.input_date ).format('LL') }}</span> 
						oleh 
						<span class="text-red-portal">{{post.account_name}}</span>
					</div>
				</div>
				<b-row class="my-5">
					<div class="col-lg-8">
						<div class="br-10 bgwhite p-2 p-md-3 mb-3">
							<div class="d-md-flex">	
								<div class="text-center">
									<!-- <img :src="post.image[0]['thumb']" class="img-fluid" width="250" alt=""> -->
									<img :src="post.content.image" class="img-fluid" width="250" alt="">
								</div>
								<div class="px-md-4 py-2">
									<h5 class="mb-4">Info Mitra</h5>
									<div class="info-content my-2 d-md-flex">
										<div class="info-left d-flex justify-content-between">
											<div>
												<img src="/assets/themes/lightred/images/detail/phone.png" class="mr-2" style="transform: rotate(80deg)" alt="">
												Telepon
											</div>
											<span class="m-r-5"> :</span>
										</div>
										<div class="info-right">
											{{post.content.phonenumber}}
										</div>
									</div>
									<div class="info-content my-2 d-md-flex">
										<div class="info-left d-flex justify-content-between">
											<div>
												<img src="/assets/themes/lightred/images/detail/email.png" class="mr-2" alt="">
												Email
											</div>
											<span class="m-r-5"> :</span>
										</div>
										<div class="info-right">
											{{post.content.link_medsos[0].url}}
										</div>
									</div>
									<!-- <div class="info-content my-2 d-md-flex">
										<div class="info-left d-flex justify-content-between">
											<div>
												<img src="/assets/themes/lightred/images/detail/web.png" class="mr-2" alt="">
												Website
											</div>
											<span class="m-r-5"> :</span>
										</div>
										<div class="info-right">
											-
										</div>
									</div> -->
									<div class="info-content my-2 d-md-flex">
										<div class="info-left d-flex justify-content-between">
											<div>
												<img src="/assets/themes/lightred/images/detail/pin.png" class="mr-2" alt="">
												Alamat
											</div>
											<span class="m-r-5"> :</span>
										</div>
										<div class="info-right">
											{{post.content.address}}
										</div>
									</div>
									<div class="info-content my-2 d-md-flex">
										<div class="info-left d-flex justify-content-between">
											<div>
												<i class="fa fa-list text-secondary mr-2 fs-14"></i>
												Kategori
											</div>
											<span class="m-r-5"> :</span>
										</div>
										<div class="info-right">
											{{post.category_title}}
										</div>
									</div>
									<!-- <div class="text-center text-md-left">
										<button class="btn bg-red text-white p-l-70 p-r-70 py-1 mt-5 fs-13">HUBUNGI PEMILIK</button>
									</div> -->
								</div>
							</div>
						</div>
						<div class="br-10 bgwhite p-2 p-md-3 my-3">
							<h6>Deskripsi</h6>
							<div class="fs-12">
								<p class="m-0" v-html="post.content.content"></p>
							</div>
						</div>
						<div class="br-10 bgwhite p-2 p-md-3 my-3">
							<h6>Galeri</h6>
							<div class="mitra-deskripsi fs-12 px-2">
								<!-- <b-row> -->
									<!-- <div class="col-md-3 col-6 p-1" v-for="(gallery, index) in post.image" :key="index">
										<div @click="redir(gallery.original)">
											<img :src="gallery.thumb" class="img-fluid" alt="">
										</div>
									</div> -->
									<!-- <div class="col-12 d-flex justify-content-center">
										<button class="btn bg-red text-white p-l-70 p-r-70 py-1 my-4 fs-13">Lebih Banyak</button>
									</div> -->
								<!-- </b-row> -->
								<div>
									<no-ssr>
										<LightGallery
											:images="setImageGallery()"
											:index="selected"
											:disable-scroll="true"
											@close="selected = null"

										/>
									</no-ssr>
									<b-row>
										<div
											class="m-1"
											v-for="(item, index) in post.image"
											:key="index">
											<b-img
												v-bind="mainProps"
												:src="item.thumb"
												@click="selected = index"
												alt="image">
											</b-img>
										</div>
									</b-row>
								</div>
							</div>
						</div>
						<!-- <div class="share d-flex align-items-center my-5">
							<h5 class="m-0">Bagikan Ke :</h5>
							<nuxt-link to="#">
								<img src="/assets/themes/lightred/images/detail/facebook_grey.png" class="m-2" width="13" alt="">
							</nuxt-link>
							<nuxt-link to="#">
								<img src="/assets/themes/lightred/images/detail/twitter_grey.png" class="m-2" width="25" alt="">
							</nuxt-link>
							<nuxt-link to="#">
								<img src="/assets/themes/lightred/images/detail/instagram_grey.png" class="m-2" width="25" alt="">
							</nuxt-link>
						</div> -->
						<!-- <div class="comment-box">
							<h5 class="m-0">Tinggalkan Balasan</h5>
							<textarea class="mt-2" name="comment" id="comment" rows="5" placeholder="Masukkan Komentar Anda"></textarea>
							<button class="btn bg-red text-white p-l-50 p-r-50 py-2 mt-3 m-b-60 fs-13">KIRIM KOMENTAR</button>
						</div> -->
					</div>
					<div class="col-lg-4">
						<!-- <b-row>
							<div class="col-4 my-3 px-1">
								<div class="bgwhite br-5 p-2 text-center">
									<img src="/assets/themes/lightred/images/detail/lope.png" alt="">
									<p class="m-0 fs-13">9999</p>
								</div>
							</div>
							<div class="col-4 my-3 px-1">
								<div class="bgwhite br-5 p-2 text-center">
									<img src="/assets/themes/lightred/images/detail/coment.png" alt="">
									<p class="m-0 fs-13">9999</p>
								</div>
							</div>
							<div class="col-4 my-3 px-1">
								<div class="bgwhite br-5 p-2 text-center">
									<img src="/assets/themes/lightred/images/detail/eye.png" alt="">
									<p class="m-0 fs-13">9999</p>
								</div>
							</div>
						</b-row> -->
						<b-row class="mb-3">
							<div class="col-12 mb-3 px-1">
								<div class="bgwhite br-5 p-2">
									<!-- <div>
										<img src="/assets/themes/lightred/images/detail/map_mini.png" class="img-fluid" width="100%" alt="">
									</div> -->
									<div class="my-3 px-2">
										<h5 class="mb-4">Opening Hours</h5>
										<div class="info-content px-3 my-2 d-flex" v-for="(schedule, index) in post.content.schedule" v-bind:key="index">
											<div class="info-left fs-12">
												{{schedule.day}}
											</div>
											<div class="info-right fs-12">
												{{schedule.open}} - {{schedule.close}}
											</div>
										</div>
										<!-- <div class="info-content px-3 my-2 d-flex">
											<div class="info-left fs-12">
												Rabu
											</div>
											<div class="info-right fs-12">
												08.00 - 17.00
											</div>
										</div>
										<div class="info-content px-3 my-2 d-flex">
											<div class="info-left fs-12">
												Kamis
											</div>
											<div class="info-right fs-12">
												08.00 - 17.00
											</div>
										</div>
										<div class="info-content px-3 my-2 d-flex">
											<div class="info-left fs-12">
												Jum'at
											</div>
											<div class="info-right fs-12">
												08.00 - 17.00
											</div>
										</div>
										<div class="info-content px-3 my-2 d-flex">
											<div class="info-left fs-12">
												Sabtu
											</div>
											<div class="info-right fs-12">
												08.00 - 17.00
											</div>
										</div>
										<div class="info-content px-3 my-2 d-flex">
											<div class="info-left fs-12">
												Minggu
											</div>
											<div class="info-right fs-12">
												08.00 - 17.00
											</div>
										</div> -->
										<!-- <div class="d-flex justify-content-center">
											<button class="btn bg-red text-white p-l-70 p-r-70 py-1 mt-5 fs-13">TOKO KAMI</button>
										</div> -->
									</div>
								</div>
								<banner-public/>
							</div>
						</b-row>
						<!-- <h5>Daftar UMKM</h5>
						<b-row class="mb-4">
							<div v-for="mitra in mitras" v-bind:key="mitra.id" class="col-12 col-md-6 col-lg-12 p-0">
								<div class="br-10 bgwhite p-2 p-md-3 my-1">
									<div class="d-flex">	
										<div class="text-center">
											<img src="/assets/themes/lightred/images/detail/event1_mini.png" width="100" alt="">
										</div>
										<div class="px-2 py-0 fs-14">
											Break the Fake Hackathon 2019 - Jakarta
											<div class="fs-10 mt-2">
												<p class="m-0">Provinsi Yogyakarta</p>
												<p class="m-0">22 - 25 September 2019</p>
												<p class="m-0">15.00 WIB - 18.00 WIB</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</b-row>
						<h5>Event UMKM</h5>
						<b-row class="mb-4">
							<div v-for="event in events" v-bind:key="event.id" class="col-12 col-md-6 col-lg-12 p-0">
								<div class="br-10 bgwhite p-2 p-md-3 my-1">
									<div class="d-flex">	
										<div class="text-center">
											<img src="/assets/themes/lightred/images/detail/event1_mini.png" width="100" alt="">
										</div>
										<div class="px-2 py-0 fs-14">
											Break the Fake Hackathon 2019 - Jakarta
											<div class="fs-10 mt-2">
												<p class="m-0">Provinsi Yogyakarta</p>
												<p class="m-0">22 - 25 September 2019</p>
												<p class="m-0">15.00 WIB - 18.00 WIB</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</b-row> -->
					</div>
				</b-row>
			</b-container>
		</section>
	</div>
</template>
<script>
export default {
  name: 'SingleMitra',

  layout(e) {
    return config.theme.public + '/Secondary'
  },
  data() {
  	return {
      post: this.$parent.apiContent.result,
  		// mitras: [
  		// { id: 1 },
  		// { id: 2 },
  		// { id: 3 }
  		// ],
  		// events: [
  		// { id: 1 },
  		// { id: 2 }
			// ]
			images: [
				{ title:'img 3', url: 'https://picsum.photos/800/1200?image=1003' },
				{ title:'img 3', url: 'https://picsum.photos/800/1200?image=1003' },
				{ title:'img 3', url: 'https://picsum.photos/800/1200?image=1003' },
				{ title:'img 3', url: 'https://picsum.photos/800/1200?image=1003' },
				{ title:'img 3', url: 'https://picsum.photos/800/1200?image=1003' }
			],
			selected: null,
			mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'm1' }
  	}
  },
  components: {},
  methods: {
  	redir(url) {
  		window.location = url;
  	},
  	setImageGallery(){
  		return this.post.image.map((val)=> {
  			return {
  				title : this.post.title,
  				url: val.original 
  			}

  		})
  	}
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>