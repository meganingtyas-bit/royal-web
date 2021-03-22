<template>
	<div class="">
		<div class="container bgfaq">
			<div class="row py-4">
				<div class="col-lg-5 m-b-65">
					<div class="box-title fs-18 text-red p-b-10 m-t-65"> 
						<span class="font-weight-bold">
							<img src="/assets/themes/lightred/images/subtitle_red.png" alt=""> DUKUNGAN
						</span>
					</div>
					<h1 class="text-gray lh-1-0 p-b-25"><b> Pusat Bantuan</b></h1>
				</div>
				<div class="col-lg-7 px-2 px-md-0 faq-accordion m-t-65 m-b-65" role="tablist">
					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-1 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Apa Itu UMKM Group?</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									UMKM Group adalah sebuah portal komunitas UMKM seluruh Indonesia berisi informasi tentang kegiatan UMKM, profil  anggota, profil usahanya, artikel, info lowongan kerja, event, forum yang bisa meningkatkan dan memaksimalkan potensi umkm Anda menjadi lebih maju dan berkembang ke depannya. Saatnya UMKM Naik Kelas !
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-2 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Bagaimana cara bergabung ke UMKM Group ?</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									Untuk bergabung menjadi anggota UMKM Group  ada beberapa pilihan :
									<ul class="mt-2">
										<li>Melalui website www.umkmnusantara.con kemudian pilih menu Pendaftaran atau klik <nuxt-link to="#"> http://bit.ly/DaftarUMKMNUSANTARA</nuxt-link></li>
										<li>Datang langsung ke Kantor Pusat UMKM Group , Gedung Genesis Svargaloka Jl. Ahmad Wahid, Kalangan, Baturetno, Banguntapan, Bantul, Yogyakarta, 55197</li>
									</ul>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-3 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Bagaimana cara mendapatkan Token Verifikasi</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									Serial token verifikas UMKM Group  bisa diperoleh melalui anggota UMKM Nusantara  atau Kantor Pusat  UMKM Group.
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-4 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Apa kegunaan Token Verifikasi?</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									Serial Token verifikasi  UMKM NUSANTARA digunakan untuk registrasi sekaligus menjadi anggota terverifikasi .
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-5 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Apa Keuntungannya jika bergabung dengan UMKM Group ?</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									Keuntungannya dengan bergabung menjadi anggota UMKM Group  adalah sebagai berikut :
									<ul class="mt-2">
										<li>Personal Branding</li>
										<p>Pasarkan diri anda sebagai mitra konsultan, tampilkan Profile diri, bikin forum diskusi, bikin ulasan/artikel terkait, bikin event, dan pasarkan layanan anda lebih luas.</p>
										<li>Company Branding</li>
										<p>Pasarkan perusahaan anda sebagai mitra company, tampilkan company Profile, mulai ulas produk/layanan perusahaan dalam artikel/jurnalisme, bikin forum diskusi terkait, bikin event, dan sebarkan lebih luas.</p>
										<li>Sales & Event Booster</li>
										<p>Pasarkan Produk/layanan & event anda di Lakumarket, bikin ulasan artikel atau forum terkait di Portal, sebarkan undangan compliment untuk Voucher diskon early bird.</p>
										<li>Forum Discussion</li>
										<p>Waktunya anda, usaha anda, atau produk anda memiliki komunitas loyalis, mulailah dengan membuka forum diskusi terkait, kelas pelatihan, ataupun sekedar ulasan jurnalisme</p>
										<li>Entrepreneurship</li>
										<p>Bisnis Anda berkembang pesat, waktunya anda menduplikasi bisnis, tawarkan bisnis anda untuk orang lain disini dengan konsep franschise ataupun pembukaan jaringan.</p>
										<li>Business Wisdom</li>
										<p>Asuh Forum, Buka Pelatihan atau seminar, dan mulailah pasarkan kelas private & pelatihan anda</p>
									</ul>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-1" role="tab">
							<b-button block href="#" v-b-toggle.accordion-6 variant="info">
								<div class="d-flex justify-content-between align-items-center">
									<div class="fs-11 ft-weight-bold text-left">Bagaimana melakukan Reset Password ?</div>
									<div class="dropdown-icons"><img src="/assets/themes/lightred/images/down-chevron2.svg" width="20" alt=""></div>
								</div>
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									<ul>
										<li>Pertama klik tombol LOGIN/REGISTER  setelah itu akan muncul Halaman Login</li>
										<li>Kemudian, silakan pilih menu Lupa Password</li>
										<li>Masukkan email terdaftar Anda untuk pengiriman  tautan konfirmasi reset password ke email Anda</li>
										<li>Masukkan link reset password yang kami kirimkan via email</li>
										<li>Isikan password terbaru Anda kemudian silakan dilakukan penyimpanan</li>
										<li>SELAMAT ! Password baru Anda berhasil di buat. Silakan untuk login dengan menggunakan Password terbaru Anda </li>
									</ul>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>			
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'StaticFaq',

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