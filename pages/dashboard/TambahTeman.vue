<template>
	<div>
		<div class="dashboard-content">
			<b-container>
				<div class="d-flex detail-loc fs-12 text-red mb-3">
					<nuxt-link to="#" class="text-default mr-1">Beranda</nuxt-link>
					>>
					<nuxt-link to="#" class="text-default mx-1">Mitra</nuxt-link>
					>>
					<nuxt-link to="#" class="text-default mx-1">Tambah Usaha</nuxt-link>
				</div>
				<div class="d-flex align-items-center">
					<img src="/assets/themes/lightred/images/subtitle_red.png" class="mr-2" alt="">
					<h4 class="dashboard-title m-0">Tambah Usaha</h4>
				</div>
				<div class="bg-white br-10 box-shadow p-md-3 p-2 mt-4">
					<div class="d-md-flex justify-content-between">
						<div class="col-md-6 p-0">
							<div class="form-group">
								<label for="nama" class="fs-12">Nama<span class="text-red">*</span></label>
								<input type="text" class="form-control fs-13" id="nama" placeholder="Masukkan Nama Teman Anda">
							</div>
							<div class="form-group">
								<label for="email" class="fs-12">Email<span class="text-red">*</span></label>
								<input type="email" class="form-control fs-13" id="email" placeholder="Masukkan Email Teman Anda">
							</div>
							<div class="form-group">
								<label for="pwd" class="fs-12">Password<span class="text-red">*</span></label>
								<input type="password" class="form-control fs-13" id="pwd" placeholder="Masukkan Password">
							</div>
							<div class="form-group">
								<label for="noTeleph" class="fs-12">Nomor HP<span class="text-red">*</span></label>
								<input type="text" class="form-control fs-13" id="noTeleph" placeholder="Masukkan Nomor HP">
							</div>
							<div class="pendamping-radio">
								<b-form-group label="Sudah Mempunyai Pin & Serial ?">
									<b-form-radio-group
									v-model="selected"
									:options="options"
									name="radio-inline"
									></b-form-radio-group>
								</b-form-group>
							</div>
							<div class="d-flex align-items-center">
								<div class="col-md-6">
									<div class="form-group">
										<label for="Serial" class="fs-12">Nomor Serial</label>
										<input type="text" class="form-control fs-13" id="Serial" placeholder="Masukkan Nomor Serial">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="pin" class="fs-12">PIN</label>
										<input type="text" class="form-control fs-13" id="pin" placeholder="Masukkan PIN">
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="text-center pt-5">
						<nuxt-link to="#" class="btn text-red px-4">
							<div class="d-flex align-items-center">
								<img src="/assets/themes/lightred/images/dashboard/refresh_2.png" class="mr-1" alt="">
								RESET
							</div>
						</nuxt-link>
						<nuxt-link to="#" class="btn bg-red text-white px-4">
							<div class="d-flex align-items-center">
								<img src="/assets/themes/lightred/images/dashboard/save_1.png" class="mr-1" alt="">SIMPAN
							</div>
						</nuxt-link>
					</div>
				</div>
			</b-container>
		</div>
	</div>
</template>

<script>
import config from '~/config/config.js'
export default {
  name: 'Tambah Teman',
  layout(e) {
    return config.theme.dashboard + '/Main'
  },
  head() {
    return ''
  },
  data() {
    return {
    	filename : 'Seret Atau Taruh File Gambar Disini Atau Klik',
    	selected: 'first',
        options: [
          { text: 'Ya', value: 'first' }
        ]
    }
  },
  components: {},
  methods: {
  	onFileChange(event){
  		var fileData =  event.target.files[0];
  		this.filename = fileData.name;
  	}
  },
  props: {},
  computed: {}
}
</script>

<style lang="css" scoped>
</style>